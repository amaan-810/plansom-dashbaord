import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyDay from "./modules/MyDay/pages";
import Login from "./modules/Auth/pages/Login";
import "./assets/styles/common.css";
import "./assets/styles/text.css";
import { HOME, LOGIN, SIGNUP, MYDAY, PROFILE } from "./core/config/constants/routesConstants.js";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path={MYDAY} element={<MyDay />} />
      <Route path={LOGIN} element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
