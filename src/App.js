import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeApp from "./components/Home/HomeApp";
import HeaderIndex from "./components/Header/HeaderIndex";
import FooterIndex from "./components/Footer/FooterIndex";
import BlogIndex from "./components/Pages/Blog/BlogIndex";
import AboutIndex from "./components/Pages/About/AboutIndex";
import NavbarIndex from "./components/Navbar/NavbarIndex";
import ServiceIndex from "./components/Pages/Service/ServiceIndex";

function App() {
  return (
    <>
      <HeaderIndex />
      <NavbarIndex />
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/Service" element={<ServiceIndex />} />
      </Routes>
      <FooterIndex />
    </>
  );
}

export default App;
