import { Outlet } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-28 pb=20 " >
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
