import { useState, useRef } from 'react';

const DraggableModal = ({children, headerTitle, isOpen, onSetIsOpen}) => {
//   const [isOpen, setIsOpen] = useState(true);
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
  
        <div
          ref={modalRef}
          className="fixed left-0  top-[0vh] w-full [h-60vh] mx-auto bg-white shadow-2xl rounded-lg border border-gray-300 z-40 overflow-y-scroll resize-y"
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
              onClick={onSetIsOpen}
              onTouchEnd={onSetIsOpen}
              className="text-red-500 font-bold text-xl leading-none hover:text-red-700"
            >
              &times;
            </button>
          </div>
          <div className="p-4 h-full">
            {children}
          </div>
        </div>
 
    </div>
  );
};

export default DraggableModal;
