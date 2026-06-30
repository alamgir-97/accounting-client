import { useState } from "react";
import Notes from "../Notes/Notes";
import ShortQuestions from "../ShortQuestions/shortQuestions";
import BroadQuestions from "../broadQuestions/broadQuestions";

// --------------------------
// import { useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";
// --------------------------

const LearningAidsVBangla = ({
  noteKey,
  shortQuestionKey,
  shortAnswerKey,
  broadQuestionKey,
  broadAnswerKey,
  selectClass,
  selectSubject,
}) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showShortQuestions, setShowShortQuestions] = useState(false);
  const [showBroadQuestions, setShowBroadQuestions] = useState(false);
  const [showMCQs, setShowMCQs] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const handleNotes = () => {
    setShowNotes(!showNotes);
    setShowShortQuestions(false);
    setShowBroadQuestions(false);
    setShowMCQs(false);
    setShowVideos(false);
  };

  const handleShortQuestions = () => {
    setShowNotes(false);
    setShowShortQuestions(!showShortQuestions);
    setShowBroadQuestions(false);
    setShowBroadQuestions(false);
    setShowMCQs(false);
    setShowVideos(false);
  };

  const handleBroadQuestions = () => {
    setShowNotes(false);
    setShowShortQuestions(false);
    setShowBroadQuestions(!showBroadQuestions);
    setShowMCQs(false);
    setShowVideos(false);
  };

  const handleMCQ = () => {
    setShowNotes(false);
    setShowShortQuestions(false);
    setShowBroadQuestions(false);
    setShowBroadQuestions(false);
    setShowMCQs(!showMCQs);
    setShowVideos(false);
  };

  const handleVideos = () => {
    setShowNotes(false);
    setShowShortQuestions(false);
    setShowBroadQuestions(false);
    setShowBroadQuestions(false);
    setShowMCQs(false);
    setShowVideos(!showVideos);
  };

  // --------------------------
  // const buttonData = [
  //   {
  //     label: "Note Taking",
  //     handler: () => {
  //       setShowNotes(!showNotes);
  //       setShowShortQuestions(false);
  //       setShowBroadQuestions(false);
  //       setShowMCQs(false);
  //       setShowVideos(false);
  //     },
  //   },
  //   {
  //     label: "MCQ",
  //     handler: () => {
  //       setShowNotes(false);
  //       setShowShortQuestions(false);
  //       setShowBroadQuestions(false);
  //       setShowBroadQuestions(false);
  //       setShowMCQs(!showMCQs);
  //       setShowVideos(false);
  //       alert("MCQ");
  //     },
  //   },
  //   {
  //     label: "Short Questions",
  //     handler: () => {
  //       setShowNotes(false);
  //       setShowShortQuestions(false);
  //       setShowBroadQuestions(!showBroadQuestions);
  //       setShowMCQs(false);
  //       setShowVideos(false);
  //       alert("Short Questions");
  //     },
  //   },
  //   {
  //     label: "Broad Questions",
  //     handler: () => {
  //       setShowNotes(false);
  //       setShowShortQuestions(false);
  //       setShowBroadQuestions(false);
  //       setShowBroadQuestions(false);
  //       setShowMCQs(!showMCQs);
  //       setShowVideos(false);
  //       alert("Broad Questions");
  //     },
  //   },
  //   {
  //     label: "Supporting Video",
  //     handler: () => {
  //       setShowNotes(false);
  //       setShowShortQuestions(false);
  //       setShowBroadQuestions(false);
  //       setShowBroadQuestions(false);
  //       setShowMCQs(false);
  //       setShowVideos(!showVideos);
  //     },
  //   },
  // ];

  // const [active, setActive] = useState(buttonData[0]);
  // const [open, setOpen] = useState(false);
  // const dropdownRef = useRef(null);

  // const handleSelect = (button) => {
  //   setActive(button);
  //   setOpen(false);
  // };

  // // Close dropdown on outside click
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);
  // --------------------------

  //   {/* // -------------------------- */}
  //   <div
  //   className="relative inline-flex items-center space-x-2"
  //   ref={dropdownRef}
  // >
  //   {/* Active Button */}
  //   <button
  //     onClick={active.handler}
  //     className="btn btn-xs bg-blue-100 text-gray-700"
  //   >
  //     {active.label}
  //   </button>

  //   {/* Dropdown Toggle */}
  //   <button
  //     onClick={() => setOpen((prev) => !prev)}
  //     className="btn btn-xs bg-blue-100 text-gray-700 px-2"
  //   >
  //     <ChevronDown size={16} />
  //   </button>

  //   {/* Dropdown List */}
  //   {open && (
  //     <div className="absolute top-full mt-1 right-0 bg-white border shadow rounded z-10 w-max">
  //       {buttonData
  //         .filter((btn) => btn.label !== active.label)
  //         .map((btn) => (
  //           <button
  //             key={btn.label}
  //             onClick={() => handleSelect(btn)}
  //             className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50"
  //           >
  //             {btn.label}
  //           </button>
  //         ))}
  //     </div>
  //   )}
  // </div>
  return (
    <div>
      {/* max-[640px]:h-[30vh] h-[140vh] overflow-y-scroll  */}
      <div className="w-full border rounded-md">
        <div className="border rounded-md w-full">
          <div className="flex justify-center flex-wrap gap-1 rounded-md bg-yellow-200 py-1 mb-1 ">
            <button
              onClick={() => handleNotes()}
              className="btn btn-xs bg-blue-100 text-gray-700"
            >
              Note Taking
            </button>
          </div>

          <div>{showNotes && <Notes noteKey={noteKey} />}</div>
          <div className="flex justify-center flex-wrap gap-1 rounded-md bg-blue-200 py-1 mb-1 ">
            <button
              onClick={handleShortQuestions}
              className="btn btn-xs bg-blue-100 text-gray-700"
            >
              Short Questions
            </button>
          </div>
          <div>
            {showShortQuestions && (
              <ShortQuestions
                questionKey={shortQuestionKey}
                answerKey={shortAnswerKey}
              />
            )}
          </div>
          <div className="flex justify-center flex-wrap gap-1 rounded-md bg-green-200 py-1 mb-1 ">
            <button
              onClick={handleBroadQuestions}
              className="btn btn-xs bg-blue-100 text-gray-700"
            >
              Broad Questions
            </button>
          </div>
          <div>
            {showBroadQuestions && (
              <BroadQuestions
                questionKey={broadQuestionKey}
                answerKey={broadAnswerKey}
              />
            )}
          </div>
            {/*<div className="flex justify-center flex-wrap gap-1 rounded-md bg-lime-200 py-1 mb-1 ">
            <button
              onClick={handleMCQ}
              className="btn btn-xs bg-blue-100 text-gray-700"
            >
              MCQ
            </button>
          </div>
         <div>
            {showMCQs && (
              <div>
                <MCQTemplate
                  selectClass={selectClass}
                  selectSubject={selectSubject}
                ></MCQTemplate>
                <MCQDisplayTemplate
                  selectClass={selectClass}
                  selectSubject={selectSubject}
                ></MCQDisplayTemplate>
              </div>
            )}
          </div> */}
          {/* <div className="flex justify-center flex-wrap gap-1 rounded-md bg-orange-200 py-1 mb-1">
            <button
              onClick={handleVideos}
              className="btn btn-xs bg-blue-100 text-gray-700"
            >
              Supporting Video
            </button>
          </div> */}

          {/* <div>{showVideos && <Videos></Videos>}</div> */}
        </div>
      </div>
    </div>
  );
};

export default LearningAidsVBangla;
