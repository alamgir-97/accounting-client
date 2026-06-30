import { useState, useRef, useEffect, } from 'react';
import { LucideChevronsLeftRight, LucideChevronsRightLeft } from "lucide-react";
const BooksModal = ({ uRL = { uRL }, imgURL = { imgURL }, children}) => {
  const lessonKey = "newLesson";
  const [inputValue, setInputValue] = useState(() => {
    return JSON.parse(localStorage.getItem(lessonKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(lessonKey, JSON.stringify(inputValue));
  }, [inputValue, lessonKey]);

  const [height, setHeight] = useState("h-[25vh]");

  const handleHeightExpand = () => {
    setHeight("h-[450vh]");
  };

  const handleHeightShrink = () => {
    setHeight("h-[25vh]");
  };
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

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
        className="bg-blue-600 text-white px-4 py-2 rounded w-full flex flex-col"
      >        
        <span className="text-md"> আমার বাংলা বই</span>
        <span className="text-lg"> অধ্যায় {children}</span>
        <span className="text-sm"> (খোলার জন্য ক্লিক করুন) </span>
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className="fixed bg-white shadow-2xl rounded-lg border border-gray-300"
          style={{
            width: '70vw',
            height: '80vh',
            top: '10vh',
            left: '0vw',
            zIndex: 1000,
            position: 'fixed',
            // overflow: 'scroll',
            resize: 'vertical',
          }}
        >
          <div
            className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-100 cursor-move"
            onMouseDown={handleMouseDown}
          >
            <h2 className="text-lg font-semibold">আমার বাংলা বই _অধ্যায়: </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-500 font-bold text-xl leading-none hover:text-red-700"
            >
              &times;
            </button>
          </div>
          <div className="p-4">
          <div className={`w-full mb-4`}>
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-sm relative -top-0 max-[640px]:visible"
          >
            {isOpen ? "Hide PDF" : "Show PDF"}
          </button>

          <h1 className="text-center max-[640px]:w-25% w-10% ">
            {height === "h-[25vh]" ? (
              <button
                onClick={handleHeightExpand}
                className="btn btn-xs mt-2 max-[640px]:scale-75 max-[640px]:rotate-90 sm:scale-100 sm:rotate-90"
              >
                <LucideChevronsLeftRight />
              </button>
            ) : (
              <button
                onClick={handleHeightShrink}
                className="btn btn-xs mt-2 max-[640px]:scale-75 max-[640px]:rotate-90 sm:scale-100 sm:rotate-90"
              >
                <LucideChevronsRightLeft />
              </button>
            )}
          </h1>
        </div>

        {isOpen && (
          <div className={`${height} flex flex-col`}>
            <iframe
              src={uRL}
              className={`h-full w-[96%]`}
              title="PDF Viewer"
            />
           </div>
          )}            
      </div>
        <img          
          src={imgURL}
          className="sm:hidden"
          type="image/png"
          alt="পঞ্চম শ্রেণীর বাংলা বই"
        />

          </div>
        </div>
      )}
    </div>
  );
};

export default BooksModal;
