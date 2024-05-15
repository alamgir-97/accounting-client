import { Outlet } from 'react-router';
import AccountingNavbar from '../Components/AccountingNavbar';


const AccountingLayout = () => {
    return (
        <div>
            <AccountingNavbar></AccountingNavbar>  
            <Outlet></Outlet>  
           
        </div>
    );
};

export default AccountingLayout;