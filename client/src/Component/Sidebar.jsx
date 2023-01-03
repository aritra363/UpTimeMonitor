import React from "react";
import { Link } from "react-router-dom";
import "../CStyling/Sidebar.css";
import { useContext } from "react";
import MainState from "../Context/MainState";
import { FaTachometerAlt } from "react-icons/fa";
import ViewProfile from "./OptionsComponent/ViewProfile";
import EditProfile from "./OptionsComponent/EditProfile";
import ChangePassword from "./OptionsComponent/ChangePassword";

function Sidebar() {
  const { sidebar, setoptionComponent } = useContext(MainState);
  const dashboardName = sidebar.Name;

  const optionHandler = (event) => {
    switch (event.target.innerText) {
      case "View Profile":
        setoptionComponent(() => {
          return (
            <>
              <ViewProfile />
            </>
          );
        });
        break;
      case "Edit Profile":
        setoptionComponent(() => {
          return (
            <>
              <EditProfile />
            </>
          );
        });
        break;
      case "Change Password":
        setoptionComponent(() => {
          return (
            <>
              <ChangePassword />
            </>
          );
        });
        break;
      case "Delete My Account":
        window.confirm("Are you Sure");
        break;
      case "Demo 1":
        setoptionComponent(() => {
          return (
            <>
              <div>Demo 1</div>
            </>
          );
        });
        break;

      default:
        break;
    }
  };
  const menuLinks = sidebar.Lists.map((item, index) => {
    if (item !== "Delete My Account") {
      return (
        <Link
          href="#"
          className="list-group-item list-group-item-action py-2 ripple"
          key={index}
          onClick={optionHandler}
        >
          <span>{item}</span>
        </Link>
      );
    } else {
      return (
        <Link
          href="#"
          className="list-group-item list-group-item-action py-2 ripple delete-option"
          key={index}
          onClick={optionHandler}
        >
          <span>{item}</span>
        </Link>
      );
    }
  });
  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <div
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <FaTachometerAlt size="30" />
            &nbsp;
            <span>{dashboardName}</span>
          </div>
          {menuLinks}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
