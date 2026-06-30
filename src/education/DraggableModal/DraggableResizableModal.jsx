// DraggableResizableModal.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import {
  Minus,
  Maximize,
  MoveHorizontal,
  Pin,
  PinOff,
  ClipboardCopy,
  X
} from 'lucide-react';

const DraggableResizableModal = ({ id, title, content, onClose }) => {
  const [zIndex, setZIndex] = useState(1);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: '70%', height: '90vh' });

  const modalRef = useRef(null);
  const storageKey = `modal-${id}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const { position, size, isMinimized, isMaximized, isPinned } = JSON.parse(saved);
      setPosition(position);
      setSize(size);
      setIsMinimized(isMinimized);
      setIsMaximized(isMaximized);
      setIsPinned(isPinned);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ position, size, isMinimized, isMaximized, isPinned })
    );
  }, [position, size, isMinimized, isMaximized, isPinned]);

  const toggleMaximize = () => {
    if (isMaximized) {
      setSize({ width: '70%', height: '90vh' });
      setPosition({ x: 100, y: 100 });
    } else {
      setSize({ width: '100vw', height: '100vh' });
      setPosition({ x: 0, y: 0 });
    }
    setIsMaximized(!isMaximized);
  };

  const handleKeyDown = (e) => {
    if (!e.ctrlKey) return;
    const delta = 10;
    const newPos = { ...position };
    if (e.key === 'ArrowUp') newPos.y -= delta;
    if (e.key === 'ArrowDown') newPos.y += delta;
    if (e.key === 'ArrowLeft') newPos.x -= delta;
    if (e.key === 'ArrowRight') newPos.x += delta;
    setPosition(newPos);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [position]);

  if (isMinimized) return (
    <div className="fixed top-0 left-0 bg-orange-600 text-white p-2 cursor-pointer z-50" onClick={() => setIsMinimized(false)}>
      {title} (Minimized)
    </div>
  );

  const modalClassNames = [
    "fixed",
    "rounded-2xl",
    "shadow-xl",
    "transition-all",
    "border",
    "border-gray-300",
    isPinned ? "ring-2 ring-yellow-400" : ""
  ].join(" ");

  return (
    <Rnd
      ref={modalRef}
      size={size}
      position={position}
      minWidth={300}
      minHeight={200}
      bounds="window"
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({ width: ref.style.width, height: ref.style.height });
        setPosition(position);
      }}
      disableDragging={isPinned}
      style={{ zIndex }}
      className={modalClassNames}
      onMouseDown={() => setZIndex(Date.now())}
    >
      <div
        className="cursor-move bg-orange-600 text-white px-4 py-2 flex justify-between items-center"
        onDoubleClick={toggleMaximize}
        onMouseOver={() => modalRef.current?.updateSize(size)}
      >
        <div>{title}</div>
        <div className="flex space-x-1">
          <button title="Minimize" onClick={() => setIsMinimized(true)} disabled={isPinned}><Minus size={16} /></button>
          <button title="Maximize" onClick={toggleMaximize} disabled={isPinned}><Maximize size={16} /></button>
          <button title="Resize" disabled={isPinned}><MoveHorizontal size={16} /></button>
          <button title={isPinned ? "Unpin" : "Pin"} onClick={() => setIsPinned(!isPinned)}>
            {isPinned ? <PinOff size={16} /> : <Pin size={16} />}
          </button>
          <button title="Copy Content" onClick={() => navigator.clipboard.writeText(content)} disabled={isPinned}><ClipboardCopy size={16} /></button>
          <button title="Close" onClick={onClose} disabled={isPinned}><X size={16} /></button>
        </div>
      </div>
      <div className="bg-white text-black p-4 max-h-[calc(90vh-3rem)] overflow-auto hover:bg-gray-50">
        <pre className="whitespace-pre-wrap">{content}</pre>
      </div>
    </Rnd>
  );
};

export default DraggableResizableModal;
