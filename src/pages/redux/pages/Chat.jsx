import { useState } from "react";
import AddTaskModal2 from "../tasks/AddTaskModal2";
import AddTaskModal from "../tasks/AddTaskModal";
import Feed from "./Feed";

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    return (
      <div>
        <h1>Chat</h1>
        <button onClick ={()=>setIsOpen(!isOpen)} className="btn btn-primary">Add Task3</button>
        <AddTaskModal2 isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal2>
        <button onClick ={()=>setIsOpen2(!isOpen2)} className="btn btn-primary">Add Task4</button>
        <AddTaskModal isOpen={isOpen2} setIsOpen={setIsOpen2}></AddTaskModal>

        <Feed></Feed>
      </div>
    );
  };
  
  export default Chat;