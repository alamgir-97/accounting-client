import { useState } from "react";
import Bangla from "./Subject/Bangla";

const ClassVNew = () => {
   const [isOpenBangla, setIsOpenBangla] = useState(false);
  return (
    <div>
    <ul className="flex flex-col gap-4 m-4 h-full overflow-scroll">
        <li className="border rounded-md p-4" onClick={()=>setIsOpenBangla(!isOpenBangla)}>Bangla</li>
        <li className="border rounded-md p-4">English</li>
        <li className="border rounded-md p-4">Math</li>
        <li className="border rounded-md p-4">Science</li>
        <li className="border rounded-md p-4">BGS</li>
        <li className="border rounded-md p-4">Islam</li>        
    </ul>
    {isOpenBangla && (
      <Bangla />
    )}
    </div>
  )
}

export default ClassVNew