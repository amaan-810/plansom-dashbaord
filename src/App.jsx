import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/Auth/pages/Login";
import MyDay from "./modules/MyDay/pages";
import "./assets/styles/common.css";
import "./assets/styles/text.css";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/" element={<MyDay />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
