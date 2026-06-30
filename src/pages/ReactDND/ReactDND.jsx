import { useState } from "react";
import Items from "./Items";
import "./ReactDND.css";
import {
  closestCorners,
  DndContext,
  PointerSensor,
  TouchSensor,
  MouseSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

const ReactDND = () => {
  const [data, setData] = useState([
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    { id: 5, content: "Item 5" },
  ]);

  const getPosition = (id) => data.findIndex((obj) => obj.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(active.id);
    console.log(over.id);

    if (active.id === over.id) return;

    setData(() => {
      const originalPosition = getPosition(active.id);
      const latestPosition = getPosition(over.id);

      return arrayMove(data, originalPosition, latestPosition);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor),
    useSensor(KeyboardSensor)
  );

  return (
    <div className="">
      <DndContext
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
        sensors={sensors}
      >
        <SortableContext items={data} strategy={verticalListSortingStrategy}>
          {data.map((el) => (
            <Items key={el.id} {...el} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ReactDND;
