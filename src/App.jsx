import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Tracking from "./Pages/Tracking/Tracking";
import Smartboat from "./Pages/Smartboat/Smartboat";
import Roadmap from "./Pages/Roadmap/Roadmap";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/smartboat" element={<Smartboat />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </>
  );
}
