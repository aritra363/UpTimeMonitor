import React from "react";
import { Link } from "react-router-dom";
import "../CStyling/Sidebar.css";
import { useContext, useState } from "react";
import MainState from "../Context/MainState";
import { FaTachometerAlt } from "react-icons/fa";
import ViewProfile from "./OptionsComponent/ViewProfile";
import EditProfile from "./OptionsComponent/EditProfile";
import ChangePassword from "./OptionsComponent/ChangePassword";
import ViewLinks from "./OptionsComponent/ViewLinks";
import EditLinks from "./OptionsComponent/EditLinks";
import deleteAccount from "../Request/deleteAccount";
import { toast } from "react-hot-toast";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Sidebar() {
  const {
    sidebar,
    setoptionComponent,
    setisLoggedin,
    intID,
    setuserData,
    setsidebar,
    setsettingsActive,
    setlinksActive,
    settime,
    userData,
  } = useContext(MainState);
  const dashboardName = sidebar.Name;
  //State for the popup
  const [open, setOpen] = useState(false);
  const [popupInput, setpopupInput] = useState("");
  const closeModal = () => {
    setOpen(false);
    setpopupInput("");
  };
  const popupinputHandler = (e) => {
    setpopupInput(e.target.value);
  };
  const optionHandler = async (event) => {
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
        setOpen((prev) => !prev);

        /* if (confirmation) {
          //all logout operations
          const result = await toast.promise(
            deleteAccount(userData.phone, localStorage.getItem("token")),
            {
              loading: "Deleting Account Wait!",
            }
          );
          if (result) {
            //deleted Successfully
            setisLoggedin(false);
            localStorage.removeItem("token");
            clearInterval(intID);
            clearInterval(intID - 1);
            setuserData(undefined);
            setsidebar({
              Lists: ["View Links", "Edit Links"],
              Name: "Links",
            });
            setsettingsActive(false);
            setlinksActive(true);
            //settime("00:00:00");
            setoptionComponent(<ViewLinks />);
            toast.success("Account Delete Successfully", { duration: 2000 });
          } else {
            toast.error("Cannot DElete Some thing went wrong!", {
              duration: 2000,
            });
          }
        } */
        break;
      case "View Links":
        setoptionComponent(() => {
          return (
            <>
              <ViewLinks />
            </>
          );
        });
        break;
      case "Edit Links":
        setoptionComponent(() => {
          return (
            <>
              <EditLinks />
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
  const deleteAccountHandler = async () => {
    if (popupInput.toLowerCase() === "delete") {
      //all logout operations
      const result = await toast.promise(
        deleteAccount(userData.phone, localStorage.getItem("token")),
        {
          loading: "Deleting Account Wait!",
        }
      );
      if (result) {
        //deleted Successfully
        setisLoggedin(false);
        localStorage.removeItem("token");
        clearInterval(intID);
        clearInterval(intID - 1);
        setuserData(undefined);
        setsidebar({
          Lists: ["View Links", "Edit Links"],
          Name: "Links",
        });
        setsettingsActive(false);
        setlinksActive(true);
        //settime("00:00:00");
        setoptionComponent(<ViewLinks />);
        toast.success("Account Delete Successfully", { duration: 2000 });
      } else {
        toast.error("Cannot DElete Some thing went wrong!", {
          duration: 2000,
        });
      }
    }
  };
  return (
    <>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <Popup open={open} onClose={closeModal} modal>
          <div>
            <div className="modal-body">
              <p>
                Type <b>delete</b> in the below textbox to delete the Account
              </p>
            </div>
            <div className="form-group flex-column">
              <div className="input-group mb-3 flex-row d-flex justify-content-start">
                <input
                  type="text"
                  className="form-control"
                  placeholder="delete"
                  onChange={popupinputHandler}
                  value={popupInput}
                />
              </div>
              <div
                className="flex-row d-flex 
              justify-content-end"
              >
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteAccountHandler}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </Popup>
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
    </>
  );
}

export default Sidebar;
