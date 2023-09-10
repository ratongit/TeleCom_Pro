import { Outlet } from "react-router-dom";
import './Theme.css'

const Main = () => {
    return (
        <div className="darktheme2 min-h-screen ">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;