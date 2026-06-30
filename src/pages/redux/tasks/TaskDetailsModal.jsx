import { useSelector } from "react-redux";
import Modal from "../components/ui/Modal";


const TaskDetailsModal = ({isOpen, setIsOpen, id}) => {
    const {tasks} = useSelector((state) => state.tasksSlice);
    const task = tasks.find((item) => item.id === id);
    return (    
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}> 
            {task?.description}      
            <iframe
    src={task?.description}
    width="100%"
    height="50%"    
    sandbox=""
    loading="lazy"
    title="Link Preview"
  ></iframe>   
        </Modal>
    );
};

export default TaskDetailsModal;