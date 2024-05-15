import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="h-[10vh] bg-slate-600">

<div  className='flex justify-center gap-8 items-center '>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active bg-red-600" : ""
  }
>    
  Home
</NavLink>

<NavLink
  to="/journal"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Journal
</NavLink>
<NavLink
  to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Register
</NavLink>
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Login
</NavLink>
</div>
           

<p className="text-center">Developed By: Md. Alamgir</p>

        </div>
    );
};

export default Footer;