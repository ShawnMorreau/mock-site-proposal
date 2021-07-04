import React, { useState } from "react";
import OrderStepper from "./OrderStepper";
import SettingsContainer from "./SettingsContainer";
import { ReactComponent as BackSvg } from "../../svgs/leftArrow.svg";
import { ReactComponent as FolderSvg } from "../../svgs/folder.svg";
import "./styles/SidePanel.css";
const SidePanel = ({
  ShipInfo,
  OrderStatus,
  Chat,
  History,
  Files,
  Expenses,
  Settings,
}) => {
  const [orderDropOpen, setOrderDropOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
 
  return (
    <aside>
      <span id="backButton">
        <BackSvg /> Back
      </span>
      <div className="collection">

        <h3 id="shipName">PS456</h3>
        <span className="option">
          <FolderSvg />
          Info
        </span>
        <span className="option order">
          <section className="parent" onClick={() => setOrderDropOpen(!orderDropOpen)}>
            <FolderSvg />
            Order
          </section>

          {orderDropOpen &&
            <OrderStepper />
          }
        </span>
        <span className="option">
          <FolderSvg />
          Chat
        </span>
        <span className="option">
          <FolderSvg />
          History
        </span>
        <span className="option">
          <FolderSvg />
          Files
        </span>
        <span className="option">
          <FolderSvg />
          Expenses
        </span>
        <span className="option">
          <section className="parent" onClick={() => setSettingsOpen(!settingsOpen)}>
            <FolderSvg />
            Settings
          </section>
          {settingsOpen && (
            <SettingsContainer/>
          )}
        </span>
      </div>
    </aside>
  );
};

export default SidePanel;



