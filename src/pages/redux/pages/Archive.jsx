
import { useSelector } from 'react-redux';
import TaskCard from './../tasks/TaskCard';

const Archive = () => {
    const {tasks} = useSelector((state) => state.tasksSlice);

    const archiveTasks = tasks.filter((task) => task.status === "archive");

    return (
        <div className='p-10'>
        <div>
            <h1 className='text-xl font-semibold mb-10'>Archive Board</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
            {archiveTasks?.map((item) => (<TaskCard key={item.id} task={item} />))}
        </div>
        </div>
    );
};

export default Archive;