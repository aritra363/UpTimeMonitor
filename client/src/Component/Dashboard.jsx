import DashboardMain from "./DashboardMain";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect } from "react";


function Dashboard() {
  return (
    <>
      <header>
        <Sidebar />
        <Navbar />
      </header>
      <DashboardMain />
    </>
  );
}

export default Dashboard;
