import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import EstimatingNavbar from "../Components/EstimatingNavbar";
import AppName from "../Components/AppName";
import Navbar from "../Components/Navbar";



const EstimatingLayout = () => {
    
    return (
        <div>    
                 <div className="fixed top-0 left-0 w-full"> 
                <AppName></AppName>
           </div>
          <Navbar></Navbar>   
        <EstimatingNavbar></EstimatingNavbar>  
        <Outlet></Outlet>  
        <Footer></Footer>
    </div>
    );
};

export default EstimatingLayout;