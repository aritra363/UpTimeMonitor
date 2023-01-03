import { useContext, useEffect, useState } from "react";
import "../CStyling/Navbar.css";
import MainState from "../Context/MainState";
import { Link } from "react-router-dom";
import {
  AiOutlineSetting,
  AiOutlinePoweroff,
  AiOutlineUser,
  AiOutlineCloudServer,
} from "react-icons/ai";
import checkUserToken from "../Request/checkUserToken";
import ViewProfile from "./OptionsComponent/ViewProfile";
//import extendToken from "../Request/extendToken";

function Navbar() {
  const {
    setisLoggedin,
    setuserData,
    userData,
    setsidebar,
    settingsActive,
    setsettingsActive,
    linksActive,
    setlinksActive,
    setoptionComponent,
  } = useContext(MainState);

  const [time, settime] = useState("00:00:00");

  const logoutHandler = () => {
    setisLoggedin(false);
    localStorage.removeItem("token");
    setuserData(undefined);
    setsidebar({
      Lists: ["Demo 1", "Demo 2", "Demo 3"],
      Name: "Demo",
    });
    setsettingsActive(false);
    setlinksActive(true);
    settime("00:00:00");
    setoptionComponent(<></>);
  };

  const settingsHandler = () => {
    setsidebar(() => {
      return {
        Lists: ["View Profile", "Edit Profile", "Delete My Account"],
        Name: "Settings",
      };
    });
    setsettingsActive(true);
    setlinksActive(false);
    setoptionComponent(<ViewProfile />);
  };
  const linksHandler = () => {
    setsidebar({
      Lists: ["Demo 1", "Demo 2", "Demo 3"],
      Name: "Demo",
    });
    setsettingsActive(false);
    setlinksActive(true);
    setoptionComponent(<div>Demo 1</div>);
  };
  useEffect(() => {
    checkUserToken(localStorage.getItem("token")).then((data) => {
      if (data) {
        setInterval(() => {
          let tokenTime = Math.abs(
            new Date(Date.now()).getTime() - new Date(data.tokenExp).getTime()
          );
          let hours = Math.floor(
            (tokenTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor(
            (tokenTime % (1000 * 60 * 60)) / (1000 * 60)
          );
          let seconds = Math.floor((tokenTime % (1000 * 60)) / 1000);
          if (minutes === 0 && seconds === 0) {
            logoutHandler();
          }
          //console.log(days, hours, minutes, seconds);
          settime(`${hours} : ${minutes} : ${seconds}`);
        }, 1000);
      }
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div
          className="navbar-brand"
          style={{ color: "#fefefe", fontWeight: "bold" }}
        >
          Uptime Monitor
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navlink"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item ${linksActive ? "active" : ""}`}
              onClick={linksHandler}
            >
              <Link className="nav-link navlink" aria-current="page">
                <AiOutlineCloudServer size="30" color="#fefefe" />
                &#x202F; <span>Links</span>
              </Link>
            </li>
            <li
              className={`nav-item ${settingsActive ? "active" : ""}`}
              onClick={settingsHandler}
            >
              <Link className="nav-link navlink" aria-current="page">
                <AiOutlineSetting size="30" color="#fefefe" />
                &#x202F; <span>Setting</span>
              </Link>
            </li>
            <li className="nav-item" onClick={logoutHandler}>
              <Link className="nav-link navlink" aria-current="page" href="#">
                <AiOutlinePoweroff size="30" color="#fefefe" />
                &#x202F; <span>Logout</span>
              </Link>
            </li>
            <div className="nav-item" onClick={logoutHandler}>
              <span className="nav-link navlink" aria-current="page" href="#">
                <span>{time}</span>
              </span>
            </div>
          </ul>
          <div
            className="nav-item"
            onClick={logoutHandler}
            style={{ color: "#fefefe", fontSize: "20px" }}
          >
            <span>Welcome {userData.firstName}</span>
            &nbsp;
            <AiOutlineUser size="30" color="#fefefe" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
