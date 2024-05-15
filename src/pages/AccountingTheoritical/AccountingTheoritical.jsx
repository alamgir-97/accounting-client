import AccountingNavbar from "../../Components/AccountingNavbar";
import AppName from "../../Components/AppName";
import Footer from "../../Components/Footer";

const AccountingTheoritical = () => {
    return (
        <div  className="bg-white">
            <AppName></AppName>
            <AccountingNavbar></AccountingNavbar>
           <h2 className="text-center text-4xl font-bold">AccountingTheoritical</h2>
           <a href="https://www.youtube.com/watch?v=-O-IXU5HdPg&list=PLytYcCwHZt2w-AVVFcZuOtYuXz_7xyNsH"  width="700" height="525" target="blank" className="mx-auto text-2xl font-bold border flex flex-wrap p-6">Personal , Real and Nominal Accounts | Type of Accounts | #1 Journal Entries Accounting | Class 11</a>
           <a href="https://www.youtube.com/watch?v=Rh1SqReFjJo&list=PLytYcCwHZt2w-AVVFcZuOtYuXz_7xyNsH&index=2"  width="700" height="525" target="blank" className="mx-auto text-2xl font-bold border flex flex-wrap p-6">Golden Rules of Accounts | Rules of Debit and Credit |#2 Journal Entries Accounting | Class 11</a>
           <a href="https://www.youtube.com/watch?v=IwEQo43csNc&list=PLytYcCwHZt2w-AVVFcZuOtYuXz_7xyNsH&index=3"  width="700" height="525" target="blank" className="mx-auto text-2xl font-bold border flex flex-wrap p-6">Rules of Debit and Credit | Modern Method | #3 Journal Entries Accounting | Class 11</a>
           <a href="https://www.youtube.com/watch?v=ieSbh5MHoVI&list=PLytYcCwHZt2w-AVVFcZuOtYuXz_7xyNsH&index=4"  width="700" height="525" target="blank" className="mx-auto text-2xl font-bold border flex flex-wrap p-6">Rules of Debit and Credit | Modern Method | #4 Journal Entries Accounting | Class 11</a>
           
           <Footer></Footer>
        </div>
    );
};

export default AccountingTheoritical;