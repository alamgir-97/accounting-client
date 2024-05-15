import { NavLink } from "react-router-dom";

const EngineeringNavbar = () => {
    return (
        <div>
        <div className='flex justify-center gap-8 text-sm z-0'>
        <NavLink to='engineering/architecture' className='border rounded-md m-4 px-8 py-2 font-bold bg-fuchsia-600 text-white' >Architecture</NavLink>
        <NavLink to='engineering/structuralEngineering' className='border rounded-md m-4 px-8 py-2 font-bold bg-fuchsia-600 text-white' >Structural Engineering</NavLink>
        </div>
        </div>
    );
};

export default EngineeringNavbar;