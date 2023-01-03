import { createContext, useState } from "react";

const MainState = createContext();

export const MainProvider = ({ children }) => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [userData, setuserData] = useState(undefined);
  const [sidebar, setsidebar] = useState({
    Lists: ["Demo 1", "Demo 2", "Demo 3"],
    Name: "Demo",
  });
  const [settingsActive, setsettingsActive] = useState(false);
  const [linksActive, setlinksActive] = useState(true);
  const [optionComponent, setoptionComponent] = useState(<></>);
  const [tokenExp, settokenExp] = useState("");
  const [min, setmin] = useState(0);
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
        tokenExp,
        settokenExp,
        min,
        setmin,
      }}
    >
      {children}
    </MainState.Provider>
  );
};

export default MainState;