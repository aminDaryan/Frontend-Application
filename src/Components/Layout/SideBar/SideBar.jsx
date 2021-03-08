import React, { useState } from "react";

// Utils
import { Link } from "react-router-dom";
import { RiHomeLine, RiBuildingLine } from "react-icons/ri";

export default function SideBar({ data }) {
  const currentUrl = data?.match.path;

  const [selectedTab, setSelectedTab] = useState(currentUrl === "/" ? 0 : 1);

  return (
    <div className="sidebar-container">
      <ul>
        <li
          className={`sidebar-container__tab ${
            selectedTab === 0 ? "active" : ""
          }`}
        >
          <Link
            className={`sidebar-container__tab__link ${
              currentUrl === "/" ? "active" : ""
            }`}
            to="/"
            onClick={() => setSelectedTab(0)}
          >
            <RiHomeLine />
            <span className="sidebar-container__tab__link__title">
              Main Page
            </span>
          </Link>
        </li>
        <li
          className={`sidebar-container__tab ${
            selectedTab === 1 ? "active" : ""
          }`}
        >
          <Link
            className={`sidebar-container__tab__link ${
              currentUrl === "/product" ? "active" : ""
            }`}
            to="/product"
            onClick={() => setSelectedTab(1)}
          >
            <RiBuildingLine />
            <span className="sidebar-container__tab__link__title">Product</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}