import { useState } from "react";


const OuterModal = ({title, className, children, onIsSetOpen = true }) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
        <div>  
    {isOpen && (       
    <div className={`border rounded-md ${className}`}>
    <section className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-300 cursor-move w-full rounded-t-md">
        <div className="flex justify-center font-bold text-2xl w-[80vw]">{title}</div>
        <div className="flex gap-2 w-[20vw] justify-end"><button className="btn-xs border rounded-md">Maximize</button><button className="btn-xs text-red-600 font-semibold border rounded-md" onClick={()=>setIsOpen(!isOpen)} onTouchEnd={()=>setIsOpen(!isOpen)}>X</button></div>
    </section>
    <section className="bg-gray-200 rounded-b-md h-[50vh] p-4">{children}</section></div>
    )}
    </div>)};
export default OuterModal