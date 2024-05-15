import { NavLink } from 'react-router-dom';

const EstimatingNavbar = () => {
    return (
        <div>
            <div className='flex justify-center gap-8 text-sm z-0'>
        <NavLink to='/estimating' className='border rounded-md m-4 px-8 py-2 font-bold bg-fuchsia-600 text-white' >About Estimating</NavLink>
        <NavLink to='estimating/basicItemRate' className='border rounded-md m-4 px-8 py-2 font-bold bg-fuchsia-600 text-white' >Basic Item Rate</NavLink>
        <NavLink to='estimating/itemRateSchedule' className='border rounded-md m-4 px-8 py-2 font-bold bg-fuchsia-600 text-white' >Item Rate Schedule</NavLink>
        <NavLink to='estimating/itemRateAnalysis' className='border rounded-md m-4 px-8 py-2 font-bold bg-fuchsia-600 text-white' >Item Rate Analysis</NavLink>
        </div>
        </div>
    );
};

export default EstimatingNavbar;