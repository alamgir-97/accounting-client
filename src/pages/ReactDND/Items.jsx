import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Items = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition, active } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: active ? "grabbing" : "grab",
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="items"
    >
      <div style={{ touchAction: "none" }}>{content}</div>
    </div>
  );
};

export default Items;
