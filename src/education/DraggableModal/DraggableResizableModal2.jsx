import React, { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import {
  Minimize2,
  Maximize2,
  X,
  Copy,
  Pin,
  Maximize,
} from "lucide-react";

let zIndexCounter = 1000;

const getStoredModals = () => {
  try {
    return JSON.parse(localStorage.getItem("modals") || "[]");
  } catch {
    return [];
  }
};

const saveModalState = (id, state) => {
  const modals = getStoredModals().filter((m) => m.id !== id);
  modals.push({ id, ...state });
  localStorage.setItem("modals", JSON.stringify(modals));
};

const DraggableResizableModal = ({ id, title = "Modal Title", children }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: window.innerWidth * 0.7, height: window.innerHeight * 0.9 });
  const [zIndex, setZIndex] = useState(zIndexCounter++);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const stored = getStoredModals().find((m) => m.id === id);
    if (stored) {
      setPosition(stored.position);
      setSize(stored.size);
      setIsMinimized(stored.isMinimized);
      setIsPinned(stored.isPinned);
      setIsMaximized(stored.isMaximized);
    }
  }, [id]);

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey) {
        let deltaX = 0,
          deltaY = 0;
        switch (e.key) {
          case "ArrowUp":
            deltaY = -10;
            break;
          case "ArrowDown":
            deltaY = 10;
            break;
          case "ArrowLeft":
            deltaX = -10;
            break;
          case "ArrowRight":
            deltaX = 10;
            break;
          default:
            return;
        }
        setPosition((pos) => ({ x: pos.x + deltaX, y: pos.y + deltaY }));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const onClickHeader = () => {
    setZIndex(zIndexCounter++);
  };

  const onDoubleClickHeader = () => {
    setIsMaximized((prev) => !prev);
  };

  useEffect(() => {
    saveModalState(id, {
      position,
      size,
      isMinimized,
      isPinned,
      isMaximized,
    });
  }, [position, size, isMinimized, isPinned, isMaximized, id]);

  if (isMinimized) {
    return (
      <div
        className="fixed top-0 left-0 m-2 px-4 py-2 bg-orange-600 text-white rounded shadow cursor-pointer"
        style={{ zIndex }}
        onClick={() => setIsMinimized(false)}
      >
        {title} (minimized)
      </div>
    );
  }

  return (
    <Rnd
      ref={modalRef}
      size={isMaximized ? { width: window.innerWidth, height: window.innerHeight } : { width: size.width, height: size.height }}
      position={position}
      onDragStart={() => setZIndex(zIndexCounter++)}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(position);
      }}
      bounds="window"
      disableDragging={isPinned}
      enableResizing={!isPinned}
      minWidth={300}
      minHeight={200}
      style={{ zIndex }}
      className="fixed rounded-2xl shadow-lg border border-gray-300 bg-white transition-all"
    >
      <div
        onMouseDown={onClickHeader}
        onDoubleClick={onDoubleClickHeader}
        className="cursor-move bg-orange-600 text-white p-2 rounded-t-2xl flex justify-between items-center hover:bg-orange-700"
        title="Drag to move. Double click to toggle maximize."
      >
        <span className="font-bold text-lg">{title}</span>
        <div className="flex space-x-2">
          <button
            title="Copy"
            className="hover:text-yellow-300"
            onClick={() => navigator.clipboard.writeText(document.getElementById(id + "-body").innerText)}
          >
            <Copy size={16} />
          </button>
          <button
            title={isPinned ? "Unpin" : "Pin"}
            className={isPinned ? "text-green-400" : "hover:text-green-300"}
            onClick={() => setIsPinned((prev) => !prev)}
          >
            <Pin size={16} />
          </button>
          <button
            title="Minimize"
            onClick={() => setIsMinimized(true)}
            disabled={isPinned}
            className="hover:text-blue-300"
          >
            <Minimize2 size={16} />
          </button>
          <button
            title="Maximize"
            onClick={() => setIsMaximized((prev) => !prev)}
            disabled={isPinned}
            className="hover:text-purple-300"
          >
            <Maximize size={16} />
          </button>
          <button
            title="Close"
            onClick={() => setIsMinimized(true)}
            disabled={isPinned}
            className="hover:text-red-300"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div
        id={id + "-body"}
        className="p-4 overflow-auto max-h-[calc(90vh-3rem)] hover:bg-gray-50"
      >
        <h2 className="text-xl font-semibold mb-2">Modal Requirements</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Draggable and resizable modal with header and body</li>
          <li>Hover highlights and cursor styling</li>
          <li>Functional buttons: minimize, maximize, pin, copy, close</li>
          <li>Position and state persistence in localStorage</li>
          <li>Resizable from 8 directions with appropriate cursors</li>
          <li>Z-index management for bring-to-front</li>
          <li>Keyboard arrow movement with Ctrl key</li>
          <li>Edge detection and snapping logic</li>
          <li>Multi-modal support with unique IDs</li>
          <li>Minimized and closed modal bar for restore</li>
          <li>Pinned modals glow and are fixed in position</li>
          <li>Tailwind styling for smooth transitions and layout</li>
        </ul>
        <div className="mt-4 text-sm text-gray-600">
          You can copy these requirements using the copy button in the header.
        </div>
        {children}
      </div>
    </Rnd>
  );
};

export default DraggableResizableModal;