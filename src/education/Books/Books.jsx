import { LucideChevronsLeftRight, LucideChevronsRightLeft } from "lucide-react";
import { useEffect, useState } from "react";

const Books = ({ uRL = { uRL }, imgURL = { imgURL }}) => {
  const lessonKey = "newLesson";
  const [inputValue, setInputValue] = useState(() => {
    return JSON.parse(localStorage.getItem(lessonKey)) || [];
  });
  const [isOpen, setIsOpen] = useState(true);

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

  return (
    <div>
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
        
    </div>
  );
};

export default Books;
