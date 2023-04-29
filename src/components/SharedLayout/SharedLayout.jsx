import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

function SharedLayout() {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SharedLayout;
