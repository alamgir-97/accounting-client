import { LucideChevronsLeftRight, LucideChevronsRightLeft } from "lucide-react";
import { useEffect, useState } from "react";

const BooksPng = ({ uRL = { uRL }, imgURL = { imgURL }}) => {
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
    <div className="w-full h-fit">      
        <img          
          src={imgURL}
          className="sm:hidden h-full w-full object-cover z-50"
          type="image/png"
          alt="পঞ্চম শ্রেণীর বাংলা বই"
        />
    </div>
  );
};

export default BooksPng;
