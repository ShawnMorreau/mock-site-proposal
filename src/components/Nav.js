import React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as HomeSvg } from "../svgs/home.svg";
import { ReactComponent as FolderSvg } from "../svgs/folder.svg";
import { ReactComponent as BoatSvg } from "../svgs/ship.svg";
import { ReactComponent as SettingsSvg } from "../svgs/settings.svg";
const Nav = () => {
  const classes = useStyles();
  return (
    <ul className={classes.nav}>
      <section className={classes.navItems}>
        <Icon className={classes.item}>
          <HomeSvg />
        </Icon>
        <Icon className={classes.item}>
          <FolderSvg />
        </Icon>
        <Icon className={classes.item}>
          <BoatSvg />
        </Icon>
        <Icon className={classes.item}>
          <SettingsSvg />
        </Icon>
      </section>
      <img
        className={classes.profile}
        src="https://via.placeholder.com/25"
        alt=""
      />
    </ul>
  );
};
export default Nav;

const useStyles = makeStyles({
  nav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0",
    padding: "0",
    textAlign: "center",
    backgroundColor: "blue",
    minWidth: "60px",
  },
  navItems: {
  },
  
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
  },
  item: {
    display:"block",
    textAlign: "center",
    position: "relative",
    backgroundColor:"red",
    margin: "20px auto"
  },
});
