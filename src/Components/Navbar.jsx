import { NavLink } from "react-router-dom";
import Speech from "./Speech";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-wrap gap-3 lg:gap-x-5 lg:gap-y-2 justify-center items-center bg-fuchsia-600 font-bold px-8 relative top-8">
      
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/webDev"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          WebDevelopment
        </NavLink>
        <NavLink
          to="/freelancing"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          Freelancing
        </NavLink>
        
        <NavLink
          to="/engineering"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          Engineering
        </NavLink>  
        <NavLink
          to="/estimating"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          Estimating
        </NavLink>
        
        <NavLink
          to="/companyLaw"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          Company Law
        </NavLink>
        <NavLink
          to="/companyUpdate"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          Company Update
        </NavLink>
        <NavLink
          to="/accounting"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          Accounting
        </NavLink>  
        
        

             

        <div className="flex flex-wrap gap-3 md:gap-5 justify-center items-center">
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
          >
            Register
          </NavLink>

          
          <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
        >
          Users
        </NavLink>
          
          {user ? (
            <div className="flex flex-col items-center">
              <p className="text-xs text-gray-400 mx-2">{user.email}</p>{" "}
              <button
                className="px-4 py-1 bg-white text-fuchsia-800 rounded-md mb-4"
                onClick={handleSignOut}
              >
                SignOut
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active bg-white px-4"
                  : "text-white"
              }
            >
              Login
            </NavLink>
          )}






          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
          >
            Blog
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white px-4"
              : "text-white"
          }
          >
            Help
          </NavLink>
          <NavLink
            to="/requirements"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-white px-4"
                : "text-white text-xs"
            }
          >
            Requirements
          </NavLink>
        </div>
      </div>
      <Speech></Speech>
    </>
  );
};

export default Navbar;
