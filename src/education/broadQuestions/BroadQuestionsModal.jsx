import { useState, useRef, useEffect, Children, } from 'react';
import { LucideChevronsLeftRight, LucideChevronsRightLeft } from "lucide-react";
import { RiFileEditLine } from "@remixicon/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const BroadQuestionsModal = ({ questionKey = {questionKey}, answerKey = {answerKey}, children }) => {
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


    const [isOpen2, setIsOpen2] = useState(true);
  
    const [questionsData, setQuestionsData] = useState(() => {
      return JSON.parse(localStorage.getItem(questionKey)) || [];
    });
  
    const [answersData, setAnswersData] = useState(() => {
      return JSON.parse(localStorage.getItem(answerKey)) || [];
    });
  
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");
  
    const { register, reset, handleSubmit } = useForm();
  
    useEffect(() => {
      localStorage.setItem(questionKey, JSON.stringify(questionsData));
    }, [questionsData, questionKey]);
  
    useEffect(() => {
      localStorage.setItem(answerKey, JSON.stringify(answersData));
    }, [answersData, answerKey]);
  
    const onSubmit = (data) => {
      const updatedQuestions = [...questionsData, data];
      setQuestionsData(updatedQuestions);
      reset();
    };
  
    const handleOnChange = (e, index) => {
      const newAnswers = [...answersData];
      newAnswers[index] = e.target.value;
      setAnswersData(newAnswers);
    };
  
    const handleEditClick = (index) => {
      setEditIndex(index);
      setEditText(questionsData[index].txt);
    };
  
    const handleEditSave = (index) => {
      const updatedQuestions = [...questionsData];
      updatedQuestions[index].txt = editText;
      setQuestionsData(updatedQuestions);
      setEditIndex(null);
      setEditText("");
    };
  
    const handleDelete = (deleteIndex) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
  
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const updatedData = questionsData.filter(
              (_, index) => index !== deleteIndex
            );
            setQuestionsData(updatedData);
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    };
  
    const handleReadEnglish = (index) => {
      const texts = questionsData[index]?.txt || "";
      const utterance = new SpeechSynthesisUtterance(texts);
      window.speechSynthesis.speak(utterance);
    };
  
    const handleReadEnglish2 = (e) => {
      const answer = e.target.value;
      const utterance = new SpeechSynthesisUtterance(answer);
      window.speechSynthesis.speak(utterance);
    };
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full flex flex-col"
      >        
        <span className="text-md"> বড় প্রশ্ন </span>
        <span className="text-lg"> অধ্যায় {children} </span>
        <span className="text-sm"> (খোলার জন্য ক্লিক করুন) </span>
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className="fixed bg-white shadow-2xl rounded-lg border border-gray-300"
          style={{
            width: '70vw',
            height: '50vh',
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
          
          <div className="w-full">
      <div className="flex gap-2 scale-[.85] bg-slate-400 rounded-md px-8 py-2 items-center justify-center w-full">
        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-xs bg-orange-100 text-gray-700">
          {isOpen ? "Hide Add Comp" : "Add Comp"}
        </button>
        <button
          className="btn btn-xs text-xs bg-lime-100 text-gray-700 flex flex-wrap"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          {isOpen2 ? "Show Questions Only" : "Show Questions & Answers"}
        </button>
      </div>

      {isOpen && (
        <div className="rounded-md mx-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-1 my-2 w-full rounded-md items-end"
          >
            <textarea
              type="text"
              id="txt"
              {...register("txt")}
              className="border rounded-md w-11/12 py-2 h-18 resize-y text-wrap p-2"
              placeholder={`Type here to add your ${questionKey}`}
            />
            <input type="submit" value="Add" className="btn btn-sm mx-0 h-18" />
          </form>
        </div>
      )}

      <div className="mx-4 mt-4">
        {questionsData.map((question, index) => (
          <div
            key={index}
            className={`flex flex-col ${isOpen ? "gap-1 m-4" : "py-0"}`}
          >
            <div className="flex gap-1 border bg-blue-200 rounded-md items-end">
              {editIndex === index ? (
                <textarea
                  className="w-full border rounded-md bg-white text-gray-900 px-2 py-2"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onDoubleClickCapture={() => handleReadEnglish(index)}
                />
              ) : (
                <textarea
                  className={`w-full rounded-md px-2 border bg-blue-200 text-gray-900 overflow-y ${isOpen2 ? "py-2" : "py-0"}`}
                  value={`Q-${index + 1}: ${question.txt}`}
                  readOnly
                  onDoubleClickCapture={() => handleReadEnglish(index)}
                />
              )}
              {editIndex === index ? (
                <button
                  onClick={() => handleEditSave(index)}
                  className="btn btn-xs bg-green-500 text-white"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(index)}
                  className="btn btn-xs"
                >
                  <RiFileEditLine />
                </button>
              )}
            </div>

            {isOpen2 && (
              <div className="flex gap-1 items-end mb-2">
                <textarea
                  className="w-full border rounded-md bg-green-100 p-2 py-2 h-24 resize-y text-gray-700 max-[460px]:text-[8px] sm:text-[10px] md:text-base lg:text-md border-black shadow-yellow-600 shadow-md"
                  placeholder={`Write your answer for Q-${index + 1}`}
                  value={answersData[index] || ""}
                  onDoubleClickCapture={(e) => handleReadEnglish2(e)}
                  onChange={(e) => handleOnChange(e, index)}
                />
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-xs bg-red-500 text-white"
                >
                  X
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>
      )}
    </div>
  );
};

export default BroadQuestionsModal;
