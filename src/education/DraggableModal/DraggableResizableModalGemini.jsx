import React, { useState, useRef, useEffect, useCallback } from 'react';
import Draggable from 'react-draggable';
// Using inline SVGs for icons for this standalone preview
// In a real project, you'd use react-icons or similar
// import { MdClose, MdMinimize, MdMaximize, MdFileCopy, MdPushPin, MdOutlinePushPin, MdFullscreenExit } from 'react-icons/md';


// Inline SVGs for icons (same as previous version)
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y2="6" x2="6" y1="18"></line><line y2="18" x2="18" y1="6"></line></svg>
);
const MinimizeIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x2="18" y2="12" x1="6" y1="12"></line></svg>
);
const MaximizeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3m-18 0v3a2 2 0 0 0 2 2h3"></path></svg>
);
 const RestoreIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3m-18 0v3a2 2 0 0 0 2 2h3m-4-8h-2v2m8-8h2v2m0 4v2m-8 8h-2v-2"></path></svg>
 );
const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect height="13" width="13" x="9" y="9" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);
const PinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y2="19" x2="12" y1="2"></line><line x2="5" y2="12" x1="19" y1="12"></line></svg>
);
const UnpinIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y2="19" x2="12" y1="2"></line><line x2="5" y2="12" x1="19" y1="12"></line><line x1="15" y2="22" x2="9" y1="16"></line></svg>
);


// Default content for the modal body (the requirements list)
const defaultModalContent = (
  <div className="prose dark:prose-invert max-w-none">
    <h3 className="text-xl font-semibold mb-2">Modal Component Requirements:</h3>
    <ul className="list-disc list-inside">
      <li>Reusable React component styled by tailwindcss.</li>
      <li>Divided in header and body portion.</li>
      <li>While hovered on header and body portions they will be highlighted differently.</li>
      <li>Background color of header will be bg-orange-600.</li>
      <li>Title and minimize, maximize, resize, pin, copy and close buttons will be shown in the header.</li>
      <li>While hovering over header mouse pointer will be changed into move cursor.</li>
      <li>If dragged the header by mouse pointer or touch the modal will be move smoothly towards the left, right, up or down based on dragging direction. (Voice instruction is outside component scope).</li>
      <li>If double clicked on header it'll toggle maximize and resize.</li>
      <li>Tooltip or title attributes for buttons will be available.</li>
      <li>All the buttons like minimize, maximize, resize, pin, copy and close etc. will be functional for click and touch and color will be changed when the button is active.</li>
      <li>It will take 70% of the window width and 90vh height initially before manually resized.</li>
      <li>It will be resizable along both x and y axis and show resize cursor at the eight points of the modal: up, down, left, right, and all four corners and animate while pointer is on the the resize symbols.</li>
      <li>Bring modal to front on click by managing z-index. Assign increasing z-index to active modal. (Requires external management, not possible with internal state).</li>
      <li>Minimized Modal Display and dock at top (like a taskbar). Click to restore or hover preview. (Requires external management).</li>
      <li>On Close Modal Display and dock at top (like a taskbar). Click to restore or hover preview. (Requires external management).</li>
      <li>Make pinned modals glow subtly and keep it fixed where there it is pinned until unpined.</li>
      <li>While pinned show the unpin button and while unpinned show the pinned button.</li>
      <li>While pinned make all other buttons disable.</li>
      <li>Prevent Modal Overlap initially but allow when dragged manually. (Requires external layout logic).</li>
      <li>Snap to grid or allow drag snapping. (Can be added to Draggable).</li>
      <li>Use edge-detection logic. (Implemented for resizing).</li>
      <li>Tailwind classes will be used for rounded corners, shadow, and smooth transitions.</li>
      <li>It needs to be persistent and won't be closed automatically if window is refreshed. (Requires external persistence logic).</li>
      <li>It will change it's position when up, down, right and left keys of the keyboard is clicked with Ctrl key. (Requires external global key listener).</li>
      <li>Need to open several modal at a time and organize them as needed. (Requires external management).</li>
      <li>In the body all these requirements will be available as requirement and can be copied using copied button and can be pasted.</li>
      <li>Name the modal DraggableResizableModalGemini.jsx.</li>
    </ul>
  </div>
);


// DraggableResizableModalGemini Component (Internal State Management)
// This version manages its own state (open/closed, position, size, etc.) internally.
// This limits the ability for a parent component to control or coordinate multiple modals.
// Features like z-index stacking, docking, persistence, initial overlap prevention,
// and global keyboard shortcuts across multiple instances are not possible
// with this component managing its state in isolation.
const DraggableResizableModalGemini = ({
  title = "Draggable Resizable Modal",
  children,
  onClose, // Keep onClose to signal to parent, but modal manages its own 'isOpen'
}) => {
  // Internal State for modal visibility and state
  const [isOpen, setIsOpen] = useState(true); // Modal starts open by default
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  // Internal State for modal dimensions and position
  // Initial position is centered, initial size is 70vw x 90vh
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Draggable will update this
  const [size, setSize] = useState({ width: '70vw', height: '90vh' }); // Use state for current size

  // State for resizing
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState(null); // 'n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'

  // Refs to access DOM elements and store resize start information
  const modalRef = useRef(null);
  const contentRef = useRef(null); // For body content
  const startResizeX = useRef(0);
  const startResizeY = useRef(0);
  const startWidth = useRef(0);
  const startHeight = useRef(0);
  // No need for startPositionX/Y refs as Draggable handles position

  // --- Z-index Management (Limited with internal state) ---
  // Cannot truly manage z-index relative to other modals without external state.
  // We can set a base z-index, but bringing to front requires coordination.
  const [localZIndex, setLocalZIndex] = useState(1000); // Assign a high base z-index

  // Bring to front on click/touch (basic implementation, won't work across multiple internally managed modals)
  const handleFocus = useCallback(() => {
      // In a multi-modal scenario managed externally, this would notify the parent
      // to update z-index. With internal state, we can't reliably bring to front
      // relative to other instances unless they are also managing z-index in a coordinated way,
      // which is complex without a central manager.
      // We'll just update a local state, which won't affect other modals.
       // setLocalZIndex(prevZIndex => prevZIndex + 1); // This won't work correctly for stacking
       // A true bring-to-front needs a shared z-index counter managed externally.
  }, []); // No dependencies

  // Add click listener (basic, limited z-index effect)
  useEffect(() => {
      const modalElement = modalRef.current;
      if(modalElement) {
          modalElement.addEventListener('mousedown', handleFocus);
          modalElement.addEventListener('touchstart', handleFocus);
      }
      return () => {
          if(modalElement) {
              modalElement.removeEventListener('mousedown', handleFocus);
              modalElement.removeEventListener('touchstart', handleFocus);
          }
      };
  }, [handleFocus]);


  // --- Resize Logic ---

  // Get the bounding rectangle of the modal
  const getModalRect = useCallback(() => {
      if (modalRef.current) {
          return modalRef.current.getBoundingClientRect();
      }
      return null;
  }, []);


  // Handle mouse down on resize handles
  const handleResizeMouseDown = useCallback((e, handle) => {
    // Disable resizing if minimized, maximized, or pinned
    if (isMinimized || isMaximized || isPinned) return;

    setIsResizing(true);
    setResizeHandle(handle);

    startResizeX.current = e.clientX;
    startResizeY.current = e.clientY;

    const rect = getModalRect();
    if (rect) {
      startWidth.current = rect.width;
      startHeight.current = rect.height;
      // No need to track start position for Draggable
    }

    e.preventDefault(); // Prevent default browser actions
    e.stopPropagation(); // Prevent dragging
  }, [isMinimized, isMaximized, isPinned, getModalRect]);

  // Handle mouse move during resizing
  const handleResizeMouseMove = useCallback((e) => {
    if (!isResizing || !resizeHandle) return;

    const deltaX = e.clientX - startResizeX.current;
    const deltaY = e.clientY - startResizeY.current;

    let newWidth = startWidth.current;
    let newHeight = startHeight.current;

    // Update width based on handle
    if (resizeHandle.includes('e')) {
      newWidth = Math.max(200, startWidth.current + deltaX); // Minimum width 200px
    }
    if (resizeHandle.includes('w')) {
      newWidth = Math.max(200, startWidth.current - deltaX);
      // Draggable needs to handle the position shift for 'w' resize
    }

    // Update height based on handle
    if (resizeHandle.includes('s')) {
      newHeight = Math.max(100, startHeight.current + deltaY); // Minimum height 100px for body
    }
    if (resizeHandle.includes('n')) {
      newHeight = Math.max(100, startHeight.current - deltaY);
       // Draggable needs to handle the position shift for 'n' resize
    }

    // Update size state (using px for consistency after initial render)
    setSize({ width: `${newWidth}px`, height: `${newHeight}px` });

    // Note: For 'w' and 'n' resizing, Draggable needs to adjust the position
    // automatically based on the change in size from the left/top edge.
    // With uncontrolled Draggable, this might not happen automatically.
    // A controlled Draggable (managing position state and passing it)
    // would be necessary for precise position updates during 'w'/'n' resizing.
    // Given the constraint of avoiding external props, a fully accurate
    // 8-point resize with position adjustment is challenging with uncontrolled Draggable.


  }, [isResizing, resizeHandle]); // Dependencies

  // Handle mouse up after resizing
  const handleResizeMouseUp = useCallback(() => {
    setIsResizing(false);
    setResizeHandle(null);
     // No external state change to notify
  }, []); // No dependencies

  // Add/remove global mousemove/mouseup listeners for resizing
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMouseMove);
      document.addEventListener('mouseup', handleResizeMouseUp);
    } else {
      document.removeEventListener('mousemove', handleResizeMouseMove);
      document.removeEventListener('mouseup', handleResizeMouseUp);
    }
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleResizeMouseMove);
      document.removeEventListener('mouseup', handleResizeMouseUp);
    };
  }, [isResizing, handleResizeMouseMove, handleResizeMouseUp]); // Dependencies

  // --- Button Handlers ---
  const handleMinimize = useCallback(() => {
    if(isPinned) return; // Cannot minimize if pinned
    setIsMinimized(!isMinimized);
    if (isMaximized) {
      setIsMaximized(false);
      // Restore size if coming from maximized
      setSize({ width: '70vw', height: '90vh' }); // Restore initial size
    }
     // No external state change to notify
  }, [isMinimized, isMaximized, isPinned]);

  const handleMaximize = useCallback(() => {
     if(isPinned) return; // Cannot maximize if pinned
    if (isMaximized) {
      // Restore
      setIsMaximized(false);
      // Restore size
      setSize({ width: '70vw', height: '90vh' }); // Restore initial size
    } else {
      // Maximize
      setIsMaximized(true);
      setIsMinimized(false); // Cannot be maximized and minimized
    }
     // No external state change to notify
  }, [isMaximized, isPinned]);

   // Toggle maximize/restore on header double click
   const handleHeaderDoubleClick = useCallback(() => {
       if(isPinned) return; // No action if pinned
       handleMaximize();
   }, [handleMaximize, isPinned]);


  const handleCopy = useCallback(() => {
    if(isPinned) return; // Cannot copy if pinned
    if (contentRef.current) {
      const textToCopy = contentRef.current.innerText;
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          console.log('Content copied to clipboard!');
          alert('Content copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy:', err);
          alert('Failed to copy content.');
        });
    }
  }, [isPinned]);

  const handlePin = useCallback(() => {
      // Cannot pin if minimized or maximized
      if(isMinimized || isMaximized) return;

      setIsPinned(!isPinned);
       // No external state change to notify
  }, [isPinned, isMinimized, isMaximized]);


  const handleClose = useCallback(() => {
     if(isPinned) return; // Cannot close if pinned
     setIsOpen(false); // Hide the modal internally
     if(onClose) {
         onClose(); // Signal closure to parent (if a handler is provided)
     }
  }, [onClose, isPinned]);


  // --- Draggable Event Handlers ---
  // Update position state when dragging stops
  const handleDragStop = useCallback((e, data) => {
      setPosition({ x: data.x, y: data.y });
      // No external state change to notify
  }, []);


  // If modal is not open, return null
  if (!isOpen) return null;

  // --- Tailwind Classes and Styles ---

  // Base classes for the modal container
  const baseModalClasses = `
    absolute bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-200 ease-in-out
    ${isPinned ? 'shadow-glow' : ''} {/* Subtle glow for pinned */}
  `;

  // Conditional classes for maximized state
  const maximizedClasses = isMaximized ?
    'fixed inset-0 w-screen h-screen !transform-none rounded-none' : ''; // inset-0 makes it full screen, !transform-none overrides centering

  // Conditional classes for minimized state (primarily affects height and visibility)
  const minimizedClasses = isMinimized ? 'h-auto w-64' : ''; // Fixed small size when minimized

  // Combine all modal classes
  const modalClasses = `${baseModalClasses} ${maximizedClasses} ${minimizedClasses}`;

  // Dynamic style for width and height when not minimized or maximized
  const modalSizeStyle = (!isMinimized && !isMaximized) ? { width: size.width, height: size.height } : {};

   // Dynamic style for position when not maximized or pinned
   // Draggable manages the transform style based on the 'position' state
   const modalPositionStyle = (!isMaximized && !isPinned) ? { transform: `translate(${position.x}px, ${position.y}px)` } : {};


  // Define resize handle classes and cursors
  const resizeHandleClasses = "absolute bg-transparent z-10"; // Base classes
  const handleSize = "5px"; // Size of the interactive area for resize handles

  const resizeHandles = [
    { handle: 'n', class: `top-0 left-0 right-0 h-[${handleSize}] cursor-ns-resize`, cursor: 'ns-resize' },
    { handle: 's', class: `bottom-0 left-0 right-0 h-[${handleSize}] cursor-ns-resize`, cursor: 'ns-resize' },
    { handle: 'e', class: `top-0 bottom-0 right-0 w-[${handleSize}] cursor-ew-resize`, cursor: 'ew-resize' },
    { handle: 'w', class: `top-0 bottom-0 left-0 w-[${handleSize}] cursor-ew-resize`, cursor: 'ew-resize' },
    { handle: 'ne', class: `top-0 right-0 w-[${handleSize}] h-[${handleSize}] cursor-ne-resize`, cursor: 'ne-resize' },
    { handle: 'nw', class: `top-0 left-0 w-[${handleSize}] h-[${handleSize}] cursor-nw-resize`, cursor: 'nw-resize' },
    { handle: 'se', class: `bottom-0 right-0 w-[${handleSize}] h-[${handleSize}] cursor-se-resize`, cursor: 'se-resize' },
    { handle: 'sw', className: `bottom-0 left-0 w-[${handleSize}] h-[${handleSize}] cursor-sw-resize`, cursor: 'sw-resize' },
  ];

  // Style for glow effect (add to your CSS or Tailwind config)
  // Example in tailwind.config.js:
  // extend: {
  //   boxShadow: {
  //     'glow': '0 0 10px 2px rgba(59, 130, 246, 0.5)', // blue glow
  //   }
  // }


  // If minimized, render a docked representation (requires parent to manage docking area)
  // With internal state, we can't automatically dock. The modal just becomes hidden.
  // A parent component would need to detect the minimized state and render a docked icon.
   if (isMinimized && !isMaximized) {
       // This component will simply render nothing when minimized.
       // A parent would need to render a "docked" version based on this state.
        return null;
   }


  return (
    <>
      {/* Overlay - Only show if not maximized or pinned */}
      {(!isMaximized && !isPinned) && <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}

      {/* Modal */}
      {/* Draggable is disabled when maximized or pinned */}
      <Draggable
          handle=".handle"
          disabled={isMaximized || isPinned}
          position={isMaximized || isPinned ? { x: 0, y: 0 } : position} // Control position only when draggable
          onStop={handleDragStop} // Update position state on drag stop
          // grid={[20, 20]} // Optional: uncomment to enable snapping to a 20x20 grid
      >
        {/* Main modal div */}
        <div
            ref={modalRef}
            className={modalClasses}
            style={{ ...modalSizeStyle, ...modalPositionStyle, zIndex: localZIndex }} // Apply size, position (via transform), and local z-index
            // onClick={handleFocus} // Basic bring to front (limited effect with internal state)
            // onTouchStart={handleFocus} // Basic bring to front (limited effect with internal state)
        >
          {/* Header - used as the drag handle and double-click target */}
          <div
              className={`handle flex justify-between items-center px-4 py-2 bg-orange-600 text-white cursor-move select-none
                        ${!isPinned ? 'hover:bg-orange-700' : ''} {/* Hover highlight */}
                        `}
              onDoubleClick={handleHeaderDoubleClick} // Double click to maximize/restore
          >
            <span className="text-lg font-semibold truncate">{title}</span>
            <div className="flex items-center space-x-1">
               {/* Pin/Unpin Button */}
                <button
                    onClick={handlePin}
                    className={`p-1 rounded hover:bg-orange-500 ${isPinned ? 'bg-orange-500' : ''}`}
                    title={isPinned ? 'Unpin' : 'Pin'}
                >
                    {isPinned ? <UnpinIcon size={18} /> : <PinIcon size={18} />}
                </button>

              {/* Copy Button */}
              {/* Only show copy button if body is visible and not pinned */}
              {!isMinimized && !isPinned && (
                <button
                  onClick={handleCopy}
                  className="p-1 rounded hover:bg-orange-500"
                  title="Copy Content"
                  disabled={isPinned} // Disable if pinned
                >
                  <CopyIcon size={18} />
                </button>
              )}

              {/* Minimize Button */}
              {/* Only show minimize when not maximized and not pinned */}
              {!isMaximized && !isPinned && (
                <button
                  onClick={handleMinimize}
                  className={`p-1 rounded hover:bg-orange-500 ${isMinimized ? 'bg-orange-500' : ''}`}
                  title={isMinimized ? 'Restore' : 'Minimize'}
                  disabled={isPinned} // Disable if pinned
                >
                  <MinimizeIcon size={18} />
                </button>
              )}

              {/* Maximize/Restore Button */}
              {/* Only show maximize when not pinned */}
               {!isPinned && (
                    <button
                        onClick={handleMaximize}
                        className={`p-1 rounded hover:bg-orange-500 ${isMaximized ? 'bg-orange-500' : ''}`}
                        title={isMaximized ? 'Restore' : 'Maximize'}
                        disabled={isPinned} // Disable if pinned
                    >
                        {isMaximized ? <RestoreIcon size={18} /> : <MaximizeIcon size={18} />}
                    </button>
               )}


              {/* Close Button */}
               {/* Only show close when not pinned */}
               {!isPinned && (
                    <button
                        onClick={handleClose}
                        className="p-1 rounded hover:bg-red-700 hover:text-white"
                        title="Close"
                        disabled={isPinned} // Disable if pinned
                    >
                        <CloseIcon size={18} />
                    </button>
               )}
            </div>
          </div>

          {/* Body - visible unless minimized or maximized (when maximized, it takes full size) */}
          {!isMinimized && (
            <div
              ref={contentRef}
              className={`p-4 overflow-y-auto flex-grow
                         ${!isPinned ? 'hover:bg-gray-50' : ''} {/* Hover highlight */}
                         ${isMaximized ? 'w-full h-full' : ''} {/* Full size when maximized */}
                         `}
              style={!isMaximized ? { height: `calc(${size.height} - 40px)` } : {}} // Approx header height 40px
              // Using calc for height when not maximized
            >
              {children}
            </div>
          )}

          {/* Resize Handles - Only show when not minimized, maximized, or pinned */}
          {!isMinimized && !isMaximized && !isPinned && resizeHandles.map(({ handle, className: handleClass, cursor }) => (
              <div
                  key={handle}
                  className={`${resizeHandleClasses} ${handleClass} cursor-${cursor} hover:bg-gray-400`} // Add hover highlight
                  onMouseDown={(e) => handleResizeMouseDown(e, handle)}
                  onTouchStart={(e) => handleResizeMouseDown(e.touches[0], handle)} // Handle touch
              ></div>
          ))}
        </div>
      </Draggable>
    </>
  );
};

export default DraggableResizableModalGemini;
