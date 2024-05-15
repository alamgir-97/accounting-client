// import React from 'react';
// import { Resizable } from 'react-resizable';
// import Draggable from 'react-draggable';

// const ResizableAndDraggableModal = ({ isOpen, onClose, children }) => {
//   const [width, setWidth] = React.useState(400);
//   const [height, setHeight] = React.useState(300);

//   const handleResize = (e, { size }) => {
//     setWidth(size.width);
//     setHeight(size.height);
//   };

//   const handleStop = (e, { x, y }) => {
//     // You can add logic here if you need to handle stop event
//   };

//   return (
//     <>
//      <button className="modal-close" onClick={onClose}>Open Draggable Modal</button>
//       {isOpen && (
//         <Draggable handle=".modal-header" onStop={handleStop}>
//           <div className="modal">
//             <div className="modal-header">Drag me</div>
//             <Resizable
//               width={width}
//               height={height}
//               onResize={handleResize}
//               minConstraints={[200, 100]}
//               maxConstraints={[800, 600]}
//             >
//               <div className="modal-content">{children}</div>
//             </Resizable>
//             <button className="modal-close" onClick={onClose}>Close</button>
//           </div>
//         </Draggable>
//       )}
//     </>
//   );
// };

// export default ResizableAndDraggableModal;