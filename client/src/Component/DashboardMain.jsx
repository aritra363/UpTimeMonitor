import { useContext } from "react";
import MainState from "../Context/MainState";

function DashboardMain() {
  const { optionComponent } = useContext(MainState);
  return (
    <div style={{marginLeft : '18%'}}>
      <div className="container pt-4">{optionComponent}</div>
    </div>
  );
}

export default DashboardMain;
