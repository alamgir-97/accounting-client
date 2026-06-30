import { RiFileEditLine } from "@remixicon/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ShortQuestions = ({ questionKey = {questionKey}, answerKey = {answerKey} }) => {
  const [isOpen, setIsOpen] = useState(true);
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
                  className="w-full border rounded-md bg-green-100 p-2 py-2 h-16 resize-y text-gray-700 text-md  border-black shadow-slate-600 shadow-md"
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
  );
};

export default ShortQuestions;
