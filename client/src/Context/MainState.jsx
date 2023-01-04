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
  return (
    <MainState.Provider
      value={{
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
