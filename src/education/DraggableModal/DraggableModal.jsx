import { useState, useRef } from 'react';

const DraggableModal = ({children, topic, chapter, headerTitle}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const offset = useRef( { x: 0, y: 0 } );

  const handleMouseDown = (e) => {
    const modal = modalRef.current;
    offset.current = {
      x: e.clientX - modal.getBoundingClientRect().left,
      y: e.clientY - modal.getBoundingClientRect().top,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const modal = modalRef.current;
    const left = e.clientX - offset.current.x;
    const top = e.clientY - offset.current.y;
    modal.style.left = `${left}px`;
    modal.style.top = `${top}px`;
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        onTouchEnd={() => setIsOpen(true)}
        // bg-blue-600
        className="w-full  text-white px-4 py-4 rounded flex gap-4 flex-col items-center justify-center"
      >
        <span className="max-[640px:text-[7px] sm:text-xs p-2 max-[640px:p-1 border rounded-md border-zinc-400 text-zinc-600 text-nowrap">{topic}</span>
        <span className="max-[640px: text-[10px] sm:text-xs p-2 border rounded-md hidden">{chapter} </span>
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className="z-50 fixed left-0  top-[20vh] w-full h-fit mx-auto bg-white shadow-2xl rounded-lg border border-gray-300  overflow-y-scroll resize-y"
          style={{
            // width: '100vw',
            // height: '50vh',
            // zIndex: 1000,
            // position: 'sticky',
            // top: '0vh',
            // left: '0vw',
            // overflow: 'scroll',
            // resize: 'vertical',
          }}
        >
          <div
            className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-100 cursor-move w-full"
            onMouseDown={handleMouseDown}
          >
            <h2 className="text-2xl font-semibold text-center">{headerTitle}</h2>
            <button
              onClick={() => setIsOpen(true)}
              onTouchEnd={() => setIsOpen(true)}
              className="text-red-500 font-bold text-xl leading-none hover:text-red-700"
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DraggableModal;
