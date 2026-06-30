import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../redux/features/tasks/tasksSlice';

const TaskCard = ({ task }) => {
    
    // const task = {
    //   id: 1,
    //   status: 'pending',
    //   title: 'Remove Button',
    //   description:
    //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
    //   date: '2023-08-28',
    //   assignedTo: 'Mir Hussain',
    //   priority: 'high',
    // };

const dispatch = useDispatch();

let updatedStatus;
// updatedStatus = task.status+1;

if(task.status == "pending"){
    updatedStatus = "running";
}else if (task.status == "running") {
updatedStatus = "done";
}else {
    updatedStatus = "archive";
    }


//   const task = {
//     id: 1,
//     status: 'pending',
//     title: 'Remove Button',
//     description:
//       'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
//     date: '2023-08-28',
//     assignedTo: 'Mir Hussain',
//     priority: 'high',
//   };

  return (
    <div className={`rounded-md p-5 
        ${task?.status === 'done' ? 'bg-green-100' : ''} 
        ${task?.status === 'pending' ? 'bg-red-100' : ''} 
        ${task?.status === 'running' ? 'bg-yellow-100' : ''} 
        ${task?.status === 'archive' ? 'bg-blue-100' : ''} 
        `}>
      <h1
        className={`text-lg font-semibold mb-3 
        ${task?.priority === 'high' ? 'text-red-600' : ''} 
        ${task?.priority === 'medium' ? 'text-yellow-600' : ''} 
        ${task?.priority === 'low' ? 'text-green-600' : ''}
            `}
      >
        {task?.title}
        {/* <p>TaskCard</p> */}
      </h1>
      <p className="mb-3">{task?.description}</p>
      {/* <a href={task?.description} className="text-sm text-blue-500 mb-3">{task?.description}</a> */}
      {/* <iframe
    src={task?.description}
    width="100%"
    height="30%"    
    sandbox=""
    loading="lazy"
    title="Link Preview"
  ></iframe> */}
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">

          <button  onClick={()=>dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button onClick={()=>dispatch(updateStatus({id: task.id, status: updatedStatus }))}
            title="Update Status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
