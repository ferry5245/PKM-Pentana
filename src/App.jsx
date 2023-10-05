import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer/>
    </>
  );
}
