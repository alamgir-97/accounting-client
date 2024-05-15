import AccountingNavbar from "../../Components/AccountingNavbar";
import AppName from "../../Components/AppName";
import Footer from "../../Components/Footer";

const Help = () => {
    return (
        <div  className="w-11/12 mx-auto bg-white">
            <AppName></AppName>
            <AccountingNavbar></AccountingNavbar>
           <h2 className="text-center text-4xl font-bold py-2 my-4 h-[75vh]">Help</h2>
           <h2 className="text-center 4xl">Learning Priorities</h2>
           <h2 className="text-center text-gray-400">From 02_05_2024</h2>
           <div className="flex gap-3 md:gap-4"><input type="checkbox"></input> <p>Toggle Sidebar Width</p></div>
           <div className="flex gap-3 md:gap-4"><input type="checkbox"></input> <p>Perfecting Sidebar</p></div>
           <div className="flex gap-3 md:gap-4"><input type="checkbox"></input> <p>overlay on image</p></div>
           <div className="flex gap-3 md:gap-4"><input type="checkbox"></input> <p>mash gradient</p></div>
           <div className="flex gap-3 md:gap-4"><input type="checkbox"></input> <p>Reading all text using one formula</p></div>
           <div className="flex gap-3 md:gap-4"><input type="checkbox"></input> <p>Showing and hiding Popup</p></div>
           <div className="flex gap-3 md:gap-4"><input type="checkbox"></input> <p>Quiz</p></div>
           <Footer></Footer>
        </div>
    );
};

export default Help;