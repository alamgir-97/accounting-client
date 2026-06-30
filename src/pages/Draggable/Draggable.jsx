import { useEffect, useState } from "react";
import {  DndContext, closestCenter, PointerSensor, useSensor, useSensors, TouchSensor, MouseSensor, KeyboardSensor } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import {GripVertical} from 'lucide-react'
import ReactDND from "../ReactDND/ReactDND";

const SortableItem = ({id, value, index, onChange, onRemove}) => {
  const {attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  
  const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.6 : 1
  }
     
  
      return (        
              <div 
              ref={setNodeRef} 
              style={style}  
              className={`p-2 w-full flex items-center gap-1 mb-3 border rounded-xl bg-white shadow-md
              ${isDragging ? 'ring-2 ring-blue-300' : ''
               }`}>
               <div 
               {...attributes} 
               {...listeners} 
               className="p-1 text-gray-400 hover:text-gray-600 hover:border hover:rounded-md hover:p-2 cursor-grab"
               title="Drag"
               >
                  <GripVertical size={20}/>
               </div>
                  <input type="text" 
                      value={value} 
                      onChange={(e)=> onChange(index, e.target.value)} 
                      className="w-1/12 px-3 py-2 border rounded-lg focus: outline-none focus-ring-2 focus:ring-blue-400"                       
                      placeholder={`Id`}/>     
                  <input type="text" 
                      value={value} 
                      onChange={(e)=> onChange(index, e.target.value)} 
                      className="w-1/12 px-3 py-2 border rounded-lg focus: outline-none focus-ring-2 focus:ring-blue-400"                       
                      placeholder={`Item key`}/>     
                  <input type="text" 
                      value={value} 
                      onChange={(e)=> onChange(index, e.target.value)} 
                      className="w-4/12 px-3 py-2 border rounded-lg focus: outline-none focus-ring-2 focus:ring-blue-400"                       
                      placeholder={`Item Description`}/>     
                  <input type="text" 
                      value={value} 
                      onChange={(e)=> onChange(index, e.target.value)} 
                      className="w-1/12 px-3 py-2 border rounded-lg focus: outline-none focus-ring-2 focus:ring-blue-400"                       
                      placeholder={`Unit`}/>     
                  <input type="text" 
                      value={value} 
                      onChange={(e)=> onChange(index, e.target.value)} 
                      className="w-1/12 px-3 py-2 border rounded-lg focus: outline-none focus-ring-2 focus:ring-blue-400"                       
                      placeholder={`Length`}/>     
                  <input type="text" 
                      value={value} 
                      onChange={(e)=> onChange(index, e.target.value)} 
                      className="w-1/12 px-3 py-2 border rounded-lg focus: outline-none focus-ring-2 focus:ring-blue-400"                       
                      placeholder={`Width`}/>     
                  <input type="text" 
                      value={value} 
                      onChange={(e)=> onChange(index, e.target.value)} 
                      className="w-1/12 px-3 py-2 border rounded-lg focus: outline-none focus-ring-2 focus:ring-blue-400"                       
                      placeholder={`Height`}/>     
                  <input type="text" 
                      value={value} 
                      onChange={(e)=> onChange(index, e.target.value)} 
                      className="w-1/12 px-3 py-2 border rounded-lg focus: outline-none focus-ring-2 focus:ring-blue-400"                       
                      placeholder={`No.`}/>     
                      
                  <button onClick={()=> onRemove(index)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg">
                      X
                  </button>        
              </div>
      );
  }

 const  Draggable = () =>{
    const [inputs, setInputs] = useState(['']);

    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(TouchSensor, {        
        activationConstraint: {
          delay: 250,
          tolerance: 5,},
        }),
      useSensor(MouseSensor, {activationConstraint: {
      distance: 10,
    },}),
      useSensor(KeyboardSensor),
      
    ); 

    useEffect(()=> {
        const stored = localStorage.getItem('dndInputs');
        if(stored) {
            setInputs(JSON.parse(stored))
        }
    }, [])

    useEffect(()=> {
            localStorage.setItem('dndInputs', JSON.stringify(inputs));
          }, [inputs])


    const handleDragEnd = (event) => {
        const {active, over} = event;
        if(active.id !== over?.id) {
            const oldIndex = inputs.findIndex((_, i) => i.toString() === active.id);
            const newIndex = inputs.findIndex((_, i) => i.toString() === over?.id);
            setInputs((items)=> arrayMove(items, oldIndex, newIndex));
        }
        };

    const handleAddInput = () => {
        setInputs([...inputs, ""])
        };
        
    const handleInputChange = (index, value) => {
        const updated = [...inputs];
        updated[index]= value;
        setInputs(updated);     
        };

    const handleRemoveInput = (index) => {
        // const newInputs = inputs.filter((_, i) => i !==index);
        setInputs(inputs.filter((_, i) => i !== index));
    }    


    // const handleSubmit = async () => {
    //     try {
    //         const response = await fetch('api/')
    //     }
    // }

  

            return (
                <div className="p-2 mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Drag & Drop Inputs</h2>                 
        <button 
        onClick={handleAddInput}
        className="mb-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Add Input Field
        </button>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext 
            items={inputs.map((_, i) => i.toString())}
            strategy={verticalListSortingStrategy}>

           {inputs.map((val, i) => (
            
                <SortableItem 
                key={i}
                id={i.toString()}
                value={val}
                index={i}
                onChange={handleInputChange}              
                onRemove={handleRemoveInput}
                >
                  
                </SortableItem>
           ))}
                </SortableContext>
            </DndContext>

{/* Submit Button */}
<button
// onClick={handleSubmit}
className="mt-4 mb-8 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
>
  Save to Backend
</button>

{/* Display Collected Data */}
<div className="mt-8">
<h3 className="text-lg font-medium mb-2 text-gray-700">
    Collected Data:
</h3> 
<ul className="bg-white">
    {inputs.map((value, index) => (
        <li key={index}>
            <span className="w-1/12">
            Sl. {index+1}: 
            </span> 
            <input value={`${index+1}.${index}`} placeholder={`${index+1}.${index}`} className="w-1/12 text-right"></input>
            <span className="max-w-10/12 p-2">
             
            </span> {value || '[empty]'}
        </li>                                
    ))}  
</ul>
</div>
<ReactDND></ReactDND>
                </div>
            );
        }
        
export default Draggable;