import { Outlet } from "react-router";
import AppName from "../Components/AppName";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto bg-[#00000055]">
           <div className="fixed top-0 left-0 w-full"> 
                <AppName></AppName>
           </div>
          <Navbar></Navbar>     

            <Outlet></Outlet>           
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;