import { NavLink } from "react-router-dom";

const AccountingNavbar = () => {
  
    return (
        <>
        <div className="flex flex-wrap gap-3 lg:gap-x-5 lg:gap-y-2 justify-center items-center bg-fuchsia-600 font-bold px-8">
            <NavLink  to="accounting/accountingTheoritical"
                className={({ isActive, isPending }) =>    isPending ? "pending" : isActive ? "active bg-white px-4" : "text-white"}>  
                Accounting (Theorical)
            </NavLink>

            <NavLink  to="accounting/journal"
                className={({ isActive, isPending }) =>    isPending ? "pending" : isActive ? "active bg-white px-4" : "text-white"  }>
                Journal
            </NavLink>
            <NavLink  to="accounting/ledger"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active bg-white px-4" : "text-white"  }>
  Ledger
            </NavLink>   
        </div>
  
        </>
    );
};

export default AccountingNavbar;