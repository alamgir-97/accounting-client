import { useForm } from "react-hook-form";
import Modal from "../components/ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/tasksSlice";


const AddTaskModal = ({isOpen, setIsOpen}) => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false)
    }

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addTask(data))
        onCancel();
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Programming Hero'}> 
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2"> Title</label>
            <input className="w-full rounded-md" id="title" defaultValue={'Add task'} type='text' {...register('title')}/>
        </div>

        <div className="flex flex-col mb-5">
            <label htmlFor="description" className="mb-2">Description</label>
            <input className="w-full rounded-md" id="description" type='text' defaultValue={'Add description, This is just test description.'} {...register('description')}/>
        </div>

        <div className="flex flex-col mb-5">
            <label htmlFor="deadline" className="mb-2">Deadline</label>
            <input className="w-full rounded-md" id="deadline" type='date' {...register('date')}/>
        </div>


        <div className="flex flex-col mb-5">
            <label htmlFor="assignedTo" className="mb-2">Assigned To</label>
            <select className="w-full rounded-md" id='assignedTo' {...register('assignedTo')}>
            <option value="Mir Hussain">Mir Hussain</option>
            <option value="Mezba Abedin">Mezba Abedin</option>
            <option value="Nahid Hasan">Nahid Hasan</option>
            <option value="Mizanur Rahman">Mizanur Rahman</option>
            <option value="Tanmoy Parvez">Tanmoy Parvez</option>
            <option value="Fahim Ahmed Firoz">Fahim Ahmed Firoz</option>
            <option value="Rahatul Islam">Rahatul Islam</option>
            <option value="Samin Israr Ravi">Samin Israr Ravi</option>
            <option value="Mahedi Anik">Mahedi Anik</option>
            <option value="Ehtisam Haq">Ehtisam Haq</option>
            <option value="Anisur Rahman">Anisur Rahman</option>
            <option value="Muktadir Hasan">Muktadir Hasan</option>
            <option value="Masud Alam">Masud Alam</option>
            </select>
        </div>

        <div className="flex flex-col mb-5">
            <label htmlFor="priority" className="mb-2">Priority</label>
            <select className="w-full rounded-md" id="priority" {...register('priority')}>
                <option defaultValue value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>           
        </div>

        <div className="flex gap-3 justify-end">           
            <button onClick={()=> onCancel()} type='button' className="btn btn-danger">Cancel</button>
            <button type='submit' className="btn btn-primary">Submit</button>
        </div>
        </form>     
        
  
        
        </Modal>
    );
};

export default AddTaskModal;