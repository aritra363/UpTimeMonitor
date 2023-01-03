import LogRes from "./Component/LogRes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import { LoginPrivateRoute } from "./PrivateRoute/LoginPrivateRoute";
import { MainProvider } from "./Context/MainState";
import { DashboardPrivateRoute } from "./PrivateRoute/DashboardPrivateRoute";

function App() {
  return (
      <MainProvider>
        <Router>
          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <DashboardPrivateRoute>
                    <LogRes />
                  </DashboardPrivateRoute>
                }
              />
              <Route
                exact
                path="/Dashboard"
                element={
                  <LoginPrivateRoute>
                    <Dashboard />
                  </LoginPrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </MainProvider>
  );
}

export default App;
