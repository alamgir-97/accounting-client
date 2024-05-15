import { useState } from "react";
import ModalContent from "./ModalContent";


const Modal = () => {
    const [open, setOpen] = useState(false);
    const handleToggleModal = () =>{       
        setOpen(!open)        
    }

//     const wrapper = document.getElementById("wrapper");
//     console.log(wrapper)
//     const header = document.getElementById("header");     
//     console.log(header)

//  const onDrag = (e) =>{
//    let getStyle = window.getComputedStyle(".wrapper"); 
//    console.log(getStyle)
//    let left = parseInt(getStyle.left);
//   let top = parseInt(getStyle.top);
//   console.log(e)
//    console.log(typeof left, typeof top)
// }    

// header.addEventListener("mousedown", ()=>{
//   header.addEventListener("mousedown", onDrag())
//  })
    
    
   
    return (
        <>
        <div className="wrapper" id="wrapper">
        <header id="header">Draggable Div</header>
            <button className="bg-blue-500 text-white py-2 px-4" onClick={handleToggleModal}>Open modal</button>        

            {open && (  
        <div className="flex flex-col gap-2">            
            <button className="bg-blue-300 text-white py-2 px-4" onClick={handleToggleModal}>Close1</button>
            <ModalContent></ModalContent>
        </div>
        ) }


        </div>
        </>
    );
};

export default Modal;