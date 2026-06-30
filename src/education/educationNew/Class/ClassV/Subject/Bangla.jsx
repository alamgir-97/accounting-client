import { useState } from "react";

const Bangla = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
   <div className="fixed top-80 w-[100vw] h-[50vh] bg-white flex justify-center items-center border rounded-md">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <button onClick={() => setIsOpen(!isOpen)} className="mt-4 bg-white text-red-500 px-4 py-2 rounded flex justify-end">Close</button>
          <h2 className="text-xl font-bold mb-4">My Bangla Book</h2>
          <p>Content goes here...</p>
        </div>
      </div>
  )
}

export default Bangla