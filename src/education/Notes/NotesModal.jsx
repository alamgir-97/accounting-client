import { useState, useRef, useEffect, Children, } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const NotesModal = ({ noteKey, children }) => {
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
   
     const [notesData, setNotesData] = useState(() => {
       return JSON.parse(localStorage.getItem(noteKey)) || [];
     });
   
     const [noteText, setNoteText] = useState('');
   
     const { register, reset, handleSubmit } = useForm();
   
     useEffect(() => {
       localStorage.setItem(noteKey, JSON.stringify(notesData));
     }, [notesData, noteKey]);
   
     const handleReset = () => {
       reset();
     };
   
     const onSubmit = (data) => {
       const updatedQuestions = [...notesData, data];
       setNotesData(updatedQuestions);
       console.log(notesData);
       reset();
     };
   
     const handleOnChange = (e, index) => {
       const { name, value } = e.target;
   
       setNotesData((prevNotes) => {
         const updatedNotes = [...prevNotes];
         updatedNotes[index] = {
           ...updatedNotes[index],
           [name]: value,
         };
         return updatedNotes;
       });
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
           //   const updatedData = setNotesData.filter(
           //     (_, index) => index !== deleteIndex
           //   );
           //   setNotesData(updatedData);
             setNotesData((prevNotes) => prevNotes.filter((_, index) => index !== deleteIndex));
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
   
     const handleChange = (event) => {
       setNoteText(event.target.value);
     };
   
     const handleReadEnglish = (e) => {
       const text = e.target.value;
       const utterance = new SpeechSynthesisUtterance(text);
       window.speechSynthesis.speak(utterance);
     };
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full flex flex-col"
      >        
        <span className="text-md"> নোট রাখা </span>
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
          

    <div className="w-full bg-white">
      <div className="flex flex-wrap justify-center items-center gap-2 bg-slate-400 rounded-md w-full py-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-xs bg-blue-100 text-gray-700"
        >
          {isOpen ? "Hide Add Comp" : "Add Component"}
        </button>
        <button
          className="btn btn-xs text-xs bg-lime-100 text-gray-700 flex flex-wrap"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          {isOpen2
            ? "Show Questions Only"
            : "Show Questions & Answers"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`flex flex-col ${isOpen ? "my-4 sm:mx-2 md:mx-4" : "py-0"}`}            
          >
            <input
              type="text"
              id="title"
              {...register("title")}
              className="border rounded-t-md py-2 resize-y h-8 text-wrap px-2 font-semibold text-sm bg-blue-200"
              placeholder={`Note title: ${noteKey}`}
              onChange={handleChange} 
            />
            <textarea
              type="text"
              id="note"
              {...register("note")}
              className="border-x bottom-b rounded-b-md w-full py-2 h-18 resize-y text-wrap px-2 text-sm bg-blue-100"
              placeholder={`Note: ${noteKey}`}
            />
            <div className="flex gap-1 my-1 justify-end">
              <input
                onClick={handleReset}
                type="reset"
                value="Reset"
                className="btn btn-sm mx-0 h-18 bg-blue-400 text-white"
                onChange={handleChange} 
              />
              <input
                type="submit"
                value="Add Note"
                className="btn btn-sm mx-0 h-18 bg-blue-700 text-white"
              />
            </div>
          </form>
        </div>
      )}
      {/* ============ Divider ============ */}
      <div className="divider">Notes</div>
      {/* {notesData.lenght !== 0 && } */}
      {/* ============ Notes ============ */}
      <div className="mt-4">
        {notesData.map((question, index) => (
          <div
            key={index}
            className={`flex flex-col border border-blue-50 pb-2 rounded-md ${isOpen ? "gap-1 my-4 sm:mx-2 md:mx-4" : "py-0"}`}
          >
            {isOpen2 && (
              <div>
                <input
                  className="border rounded-t-md w-full px-2 py-2 resize-y h-8 text-wrap font-semibold text-sm bg-blue-100"
                  //   "w-full border rounded-t-md bg-blue-100 p-2 py-2 h-8 resize-y text-gray-700 text-md  border-black shadow-slate-600 shadow-md"
                  placeholder={`Write your answer for Q-${index + 1}`}
                  value={notesData[index].title || ""}
                  onDoubleClickCapture={(e) => handleReadEnglish(e)}
                //   onChange={(e) => handleOnChange(e, index)}
                onChange={handleChange} 
                />
                <textarea
                  className="border-x bottom-b rounded-b-md w-full px-2 py-2 h-18 resize-y text-wrap text-sm bg-blue-50"
                  //   "w-full border rounded-b-md bg-blue-100 p-2 py-2 h-16 resize-y text-gray-700 text-md  border-black shadow-slate-600 shadow-md"
                  placeholder={`Write your answer for Q-${index + 1}`}
                  value={notesData[index].note || ""}
                  onDoubleClickCapture={(e) => handleReadEnglish(e)}
                  onChange={(e) => handleOnChange(e, index)}
                />
              </div>
            )}
<div className="flex justify-end">
            <button
              onClick={() => handleDelete(index)}
              className="btn btn-xs bg-blue-700 text-white"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="btn btn-xs bg-green-500 text-white"
            >
              Save
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="btn btn-xs bg-red-500 text-white"
            >
              X
            </button>
</div>
          </div>
        ))}
      </div>
      {/* <div>{noteKey}</div> */}
    </div>
        </div>
      )}
    </div>
  );
};

export default NotesModal;
