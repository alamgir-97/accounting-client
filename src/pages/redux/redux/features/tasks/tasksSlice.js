import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        // {   id: 1,
        //     status: 'done',
        //     title: 'Create link for reliable news sorurces',
        //     description: 'https://www.dailyamardesh.com/',
        //     date: '2023-08-22',
        //     assignedTo: 'Mir Hussain',
        //     priority: 'high',
        // },
        {   id: 2,
            status: 'running',
            title: 'Add a Running Button',
            description: 'I have a link, I would like to make a react component to return a link previw of that website as like Whatsapp does.',
            date: '2023-08-24',
            assignedTo: 'Mir Hussain',
            priority: 'low',
        },
        {   id: 3,
            status: 'pending',
            title: 'Add a Pending Button',
            description: 'We need a remove button in our task card. Make the button red and use Heroicon for',
            date: '2023-08-26',
            assignedTo: 'Mir Hussain',
            priority: 'high',
        },
        {   id: 4,
            status: 'pending',
            title: 'Add a Pending Button',
            description: 'We need a remove button in our task card. Make the button red and use Heroicon for',
            date: '2023-08-26',
            assignedTo: 'Mir Hussain',
            priority: 'medium',
        },
        {   id: 5,
            status: 'archive',
            title: 'Add a Remove Button',
            description: 'We need a remove button in our task card. Make the button red and use Heroicon for',
            date: '2023-08-28',
            assignedTo: 'Mezba Abedin',
            priority: 'high',
        },

    ],
    userSpecificTasks: [],
}
const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if(state.tasks.length == 0){state.tasks.push({id: 1, status: "pending", ...payload})
            }else {
             const lastElement = state.tasks.at(-1);
             state.tasks.push({id: lastElement.id + 1, status: "pending", ...payload})
            }            
        },
        removeTask: (state, {payload}) => {
           state.tasks =  state.tasks.filter((item) => item.id != payload)
        },

        updateStatus: (state, { payload }) => {
            const target = state.tasks.find((item) => item.id == payload.id);            
            target.status = payload.status;            
        },

        userTasks: (state, { payload }) => {
            state.userSpecificTasks = state.tasks.filter((item) => item.assignedTo == payload);            
                       
        }

   
    }
})

export const { addTask , removeTask, updateStatus, userTasks } = tasksSlice.actions;
export default tasksSlice.reducer;