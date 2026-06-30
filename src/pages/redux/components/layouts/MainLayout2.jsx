import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';


const MainLayout2 = () => {
  return (
    <div className="flex bg-white">
      <div className="w-[80px]">
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout2;