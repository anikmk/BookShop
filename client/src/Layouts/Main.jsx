import { Outlet } from "react-router-dom";
import Footer from "../Componnents/Shared/Footer/Footer";
import Navbar from "../Componnents/Shared/NavBar/Navbar";

const Main = () => {
  return (
    <div>
      
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>

    </div>
  );
};

export default Main;
