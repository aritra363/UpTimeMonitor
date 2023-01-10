import { createContext, useState } from "react";
import ViewLinks from "../Component/OptionsComponent/ViewLinks";

const MainState = createContext();

export const MainProvider = ({ children }) => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [userData, setuserData] = useState(undefined);
  const [sidebar, setsidebar] = useState({
    Lists: ["View Links", "Edit Links"],
    Name: "Links",
  });
  const [settingsActive, setsettingsActive] = useState(false);
  const [linksActive, setlinksActive] = useState(true);
  const [optionComponent, setoptionComponent] = useState(<ViewLinks />);
  const [intID, setintID] = useState("");
  //state for link delete id
  const [delLinkId, setdelLinkId] = useState("");
  //state to open close modal
  const [modal, setmodal] = useState(false);
  return (
    <MainState.Provider
      value={{
        modal,
        setmodal,
        delLinkId,
        setdelLinkId,
        isLoggedin,
        setisLoggedin,
        userData,
        setuserData,
        sidebar,
        setsidebar,
        settingsActive,
        setsettingsActive,
        linksActive,
        setlinksActive,
        optionComponent,
        setoptionComponent,
        intID,
        setintID,
      }}
    >
      {children}
    </MainState.Provider>
  );
};

export default MainState;
