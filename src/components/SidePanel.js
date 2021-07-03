import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { ReactComponent as BackSvg } from "../svgs/leftArrow.svg";
import { ReactComponent as FolderSvg } from "../svgs/folder.svg";
const SidePanel = ({
  ShipInfo,
  OrderStatus,
  Chat,
  History,
  Files,
  Expenses,
  Settings,
}) => {
  const classes = useStyles();
  const [orderDropOpen, setOrderDropOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <aside>
      <span>
        <BackSvg /> Back
      </span>
      <h3>PS456</h3>
      <div className={classes.collection}>
        <span className={classes.option}>
          <FolderSvg />
          Info
        </span>
        <span className={classes.option}>
          <FolderSvg />
          Order
          {orderDropOpen && 
              <OrderStatus
                Status = {OrderStatus}
              />
          }
        </span>
        <span className={classes.option}>
          <FolderSvg />
          Chat
        </span>
        <span className={classes.option}>
          <FolderSvg />
          History
        </span>
        <span className={classes.option}>
          <FolderSvg />
          Files
        </span>
        <span className={classes.option}>
          <FolderSvg />
          Expenses
        </span>
        <span className={classes.option}>
          <FolderSvg />
          Info
        </span>
      </div>
    </aside>
  );
};

export default SidePanel;

const useStyles = makeStyles({
  collection: {
    display: "flex",
    flexDirection: "column",
  },
  option: {
    display: "flex",
    alignItems: "center" /* align vertical */,
  },
});
