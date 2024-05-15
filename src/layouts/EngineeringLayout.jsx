import { Outlet } from "react-router";
import EngineeringNavbar from './../Components/EngineeringNavbar';
import AppName from "../Components/AppName";
import Navbar from "../Components/Navbar";

const EngineeringLayout = () => {
    return (
        <div>
             <div className="fixed top-0 left-0 w-full"> 
                <AppName></AppName>
           </div>
          <Navbar></Navbar>   
            <EngineeringNavbar></EngineeringNavbar>
            <Outlet></Outlet>  
        </div>
    );
};

export default EngineeringLayout;