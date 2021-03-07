import React from "react";
import "./LayoutStyle.scss";

// Components
import TopNavBar from "Components/Layout/TopNavBar/TopNavBar";
import SideBar from "Components/Layout/SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <div className="layout-container__header-container">
        <TopNavBar />
      </div>
      <div className="layout-container__content-container">
        <SideBar data={children.props} />
        <div>{children}</div>
      </div>
    </div>
  );
}
