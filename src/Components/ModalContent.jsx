import { useState } from "react";


const ModalContent = () => {
    const [close, setClose] = useState(true);
    const handleToggleModal2 = () =>{       
        setClose(!close)        
    }
    return (
       
            <div className="draggable" id="">          
            <div className='w-[100vw] h-[100vh] opacity-80 fixed top-0 left-0 bg-gray-400'></div>           
            <div className="mx-auto -top-72 w-[800px] h-[200px] font-bold rounded-md border-2 border-black  outline-4 outline-red-500 -outline-offset-[20px] outline-double z-20 bg-white transition ease-in-out delay-150 hover:bg-red-100 relative resize overflow-auto">
            <h1 className="bg-blue-500 text-white font-bold text-center resize w-full p-1 m-4 header" >Resizable Modal</h1>
            <button className="bg-blue-500 text-white py-2 px-4 absolute top-0 right-0" onClick={handleToggleModal2}>Close</button>
        </div>           
       

      
        
        </div>
    );
};

export default ModalContent;