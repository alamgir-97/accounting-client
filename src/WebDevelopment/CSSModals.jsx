import AccountingNavbar from "../Components/AccountingNavbar";    

const CSSModals = () => {
    return (
        <div>
        <AccountingNavbar></AccountingNavbar>
        <div className="flex flex-col gap-12 list-none">
        <li><a className="font-xl border font-xl rounded-md bg-orange-300 px-8 py-4 text-blue-700 cursor-pointer font-semibold" href="https://www.youtube.com/watch?v=9DwGahSqcEc" target="_blank" rel='noreferrer'>Create a modal with React (Pop-up)</a></li>
            <li><a className="font-xl border font-xl rounded-md bg-orange-300 px-8 py-4 text-blue-700 cursor-pointer font-semibold" href="https://www.youtube.com/watch?v=snhpoxtLugU" target="_blank" rel='noreferrer'>Popup with blurred background Using CSS3 And Vanilla Javascript | Modal</a></li>
            <li><a className="font-xl border font-xl rounded-md bg-orange-300 px-8 py-4 text-blue-700 cursor-pointer font-semibold" href="https://www.youtube.com/watch?v=zbz2X-0ZciQ" target="_blank" rel='noreferrer'>How to Create a CSS Call To Action Video Modal Popup with Simple Javascript (EASY)</a></li>
            <li><a className="font-xl border font-xl rounded-md bg-orange-300 px-8 py-4 text-blue-700 cursor-pointer font-semibold" href="https://www.youtube.com/watch?v=D5oswSO9y-k" target="_blank" rel='noreferrer'>Build A Custom React JS Modal - Using Hooks (Pop-up Window)</a></li>
            <li><a className="font-xl border font-xl rounded-md bg-orange-300 px-8 py-4 text-blue-700 cursor-pointer font-semibold" href="https://www.youtube.com/watch?v=ZCvemsUfwPQ" target="_blank" rel='noreferrer'>Modal in ReactJS - Code a React Modal Tutorial using Hooks</a></li>
            <li><a className="font-xl border font-xl rounded-md bg-orange-300 px-8 py-4 text-blue-700 cursor-pointer font-semibold" href="" target="_blank" rel='noreferrer'></a></li>
        </div>
        </div>
    );
};

export default CSSModals;