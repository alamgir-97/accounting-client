// import { useState } from 'react';

// const DraggableModal = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartPosition({
//       x: e.clientX - position.x,
//       y: e.clientY - position.y
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return
//     setPosition({
//       x: e.clientX - startPosition.x,
//       y: e.clientY - startPosition.y
//     });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div>
//     <div
//       className="modal" 
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       <div className="modal-header m-16 p-10 w-48 h-48 border rounded-md">Drag me</div>
//       <div className="modal-content">
//         <h2 className='text-center text-4xl font-bold'>Modal</h2>
//         <p className='text-center text-4xl font-bold'>
//         ModalModalModalModalModalModalModalModalModalModalModalModalModalModalModalModalModalModalModalModalModalModalModal
//         </p>
       
//       </div>
//     </div>
//     </div>
//   );
// };

// export default DraggableModal;
