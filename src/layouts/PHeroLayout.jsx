import { Outlet } from "react-router";

import { NavLink } from "react-router-dom";


const PHeroLayout = () => {
    return (
        <>
   
        <div className="bg-white p-4 border h-10">      
        <NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 p-2 m-2 font-bold"}>TypeScript</NavLink>
           <Outlet></Outlet>
           </div>
        </>
    );
};

export default PHeroLayout;