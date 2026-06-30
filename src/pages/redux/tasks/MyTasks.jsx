import {
    CheckIcon,
    DocumentMagnifyingGlassIcon,
  } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus, userTasks } from '../redux/features/tasks/tasksSlice';
import TaskDetailsModal from './TaskDetailsModal';
  
  const MyTasks = () => {
    const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice);
    const { name: userName } = useSelector((state) => state.userSlice);
    console.log(userName)
    const [isOpen, setIsOpen]= useState(false);
    const [taskId, setTaskId] = useState(0);

    const dispatch = useDispatch();

    // const item = {
    //   id: 1,
    //   status: 'pending',
    //   title: 'Remove Button',
    //   description:
    //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
    //   date: '2023-08-28',
    //   assignedTo: 'Mir Hussain',
    //   priority: 'high',
    // };
   // id is given manually, but we need to get it from payload.
    const task = tasks.find((item) => item.id === 2);
    //
    console.log(task)
    // let updatedStatus;
    // if(task.status == "archive"){
    //     updatedStatus = "archive";        
    // }else {
    //     updatedStatus = "running";
    //     }
    const handleModal = (id) => {setTaskId(id); setIsOpen(!isOpen)};
    useEffect(() => {dispatch(userTasks(userName))}, [userName, dispatch, tasks]);   

    
    return (
      <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId}></TaskDetailsModal>
      
        <h1 className="text-xl my-3 bg-red-500">My Tasks</h1>
        <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks.map((item)=>(<div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button onClick={()=>handleModal(item.id)} className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              {/* ToDo: there is a problem, we need to fix it, if the status is "archive" and we click on this button the status again become "done", but it should not ramain "archive".*/}
              <button onClick={() => dispatch(updateStatus({id: item.id, status: "done"}))} className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>))}
          
        </div>
      </div>
    );
  };
  
  export default MyTasks;
  