import { Outlet } from "react-router-dom";
import './Theme.css'
import Footer from "../Pages/Footer/Footer";

const Main = () => {
    return (
        <div className="darktheme2 min-h-screen ">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;