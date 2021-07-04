import React from "react";
import { ReactComponent as HomeSvg } from "../../svgs/home.svg";
import { ReactComponent as FolderSvg } from "../../svgs/folder.svg";
import { ReactComponent as BoatSvg } from "../../svgs/ship.svg";
import { ReactComponent as SettingsSvg } from "../../svgs/settings.svg";
import "./styles/Nav.css";
const Nav = () => {
  return (
    <ul className="nav">
      <section className="iconsContainer">
        <HomeSvg className="item" />
        <FolderSvg className="item" />
        <BoatSvg className="item" />
        <SettingsSvg className="item" />
      </section>
      <img
        className="profile"
        src="https://via.placeholder.com/25"
        alt=""
      />
    </ul>
  );
};
export default Nav;


