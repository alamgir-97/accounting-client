import { useState } from "react";
import {
  LucideChevronsLeftRight,
  LucideChevronsLeftRightEllipsis,
  LucideChevronsRightLeft,
} from "lucide-react";
import LearningAidsVBangla from "../LearningAids/LearningAidsBangla";
import Books from "../Books/Books";
import PdfToPngConverter from "../pdfToPngConverter";
import PDFSplitter from "../PdfSplitter";
import PdfViewerOptimized from "../PdfViewerOptimized";
import PdfViewerOptimized1 from "../PdfViewerOptimized1";
import DraggableModalBN from "../DraggableModal/DraggableModalBN";
import Notes from "../Notes/Notes";
import ShortQuestions from "../ShortQuestions/shortQuestions";
import BroadQuestions from "../broadQuestions/broadQuestions";
import BooksModal from "../Books/BooksModal";
import BroadQuestionsModal from "../broadQuestions/broadQuestionsModal";
import ShortQuestionsModal from "../ShortQuestions/ShortQuestionsModal";
import NotesModal from "../Notes/NotesModal";
import DraggableResizableModal from "../DraggableModal/DraggableResizableModal";
import DraggableResizableModalGemini from "../DraggableModal/DraggableResizableModalGemini";
import OuterModal from "../DraggableModal/OuterModal";
import App from "../DraggableModal/App";
import App2 from "../DraggableModal/App2";
const LessonsVBangla = () => {
  const [width, setWidth] = useState("w-full");
  const [width2, setWidth2] = useState("w-full");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const handleExpand = () => {
    setWidth("w-full");
    setWidth2("w-0");
  };
  const handleShrink = () => {
    setWidth("w-1/2");
    setWidth2("w-1/2");
  };
  const handleExpand2 = () => {
    setWidth2("w-full");
    setWidth("w-0");
  };
  //   const handleShrink2 = () => {
  //     setWidth2("w-1/2");
  //     setWidth("w-1/2");
  //   };

  const selectClass = "পঞ্চম";
  const selectSubject = "আমার বাংলা বই";

  const handleToggle = (chapter) => {
    setIsOpen1(!isOpen1);}

  const colors = [
    ["bg-yellow-400", "border-gray-700", "text-black"], // Bright bg, dark border
    ["bg-black", "border-gray-300", "text-yellow-600"], // Bright bg, dark border
    ["bg-blue-500", "border-yellow-300", "text-white"], // Cool bg, warm border
    ["bg-green-500", "border-blue-800", "text-white"], // Earthy bg, contrasting border
    ["bg-purple-500", "border-pink-300", "text-white"], // Vibrant combo
    ["bg-red-500", "border-yellow-200", "text-white"], // Bold bg, soft border
    ["bg-lime-500", "border-green-800", "text-black"], // High contrast, clean look
    ["bg-amber-400", "border-red-600", "text-black"], // Warm combo
    ["bg-cyan-500", "border-blue-900", "text-black"], // Fresh and readable
    ["bg-rose-400", "border-gray-800", "text-black"], // Modern, balanced
    ["bg-indigo-500", "border-sky-200", "text-white"], // Elegant pair
    ["bg-orange-400", "border-gray-700", "text-black"], // Strong contrast
    ["bg-teal-500", "border-lime-200", "text-white"], // Calm and balanced
    ["bg-fuchsia-400", "border-black", "text-black"], // Trendy, still readable
    ["bg-pink-400", "border-rose-600", "text-black"], // Soft, consistent
    ["bg-emerald-500", "border-gray-800", "text-white"], // Deep, vivid green
    ["bg-sky-400", "border-blue-800", "text-black"], // Airy, calm contrast
    ["bg-red-500", "border-black", "text-black"], // Bright bg, dark border
    ["bg-blue-500", "border-yellow-300", "text-white"], // Cool bg, warm border
    ["bg-green-500", "border-blue-800", "text-white"], // Earthy bg, contrasting border
    ["bg-purple-500", "border-pink-300", "text-white"], // Vibrant combo
    ["bg-red-500", "border-yellow-200", "text-white"], // Bold bg, soft border
    ["bg-lime-500", "border-green-800", "text-black"], // High contrast, clean look
    ["bg-amber-400", "border-red-600", "text-black"], // Warm combo
    ["bg-cyan-500", "border-blue-900", "text-black"], // Fresh and readable
    ["bg-rose-400", "border-gray-800", "text-black"], // Modern, balanced
    ["bg-indigo-500", "border-sky-200", "text-white"], // Elegant pair
    ["bg-orange-400", "border-gray-700", "text-black"], // Strong contrast
    ["bg-teal-500", "border-lime-200", "text-white"], // Calm and balanced
    ["bg-fuchsia-400", "border-black", "text-black"], // Trendy, still readable
    ["bg-pink-400", "border-rose-600", "text-black"], // Soft, consistent
    ["bg-emerald-500", "border-gray-800", "text-white"], // Deep, vivid green
    ["bg-sky-400", "border-blue-800", "text-black"], // Airy, calm contrast
  ];

  const colors2 = [
    ["bg-yellow-200", "shadow-yellow-300", "border-gray-700", "text-black"], // Bright bg, dark border
    ["bg-blue-300", "shadow-blue-400", "border-yellow-300", "text-white"], // Cool bg, warm border
    ["bg-green-300", "shadow-green-400", "border-blue-800", "text-white"], // Earthy bg, contrasting border
    ["bg-purple-300", "shadow-purple-400", "border-pink-300", "text-white"], // Vibrant combo
    ["bg-red-300", "shadow-red-400", "border-yellow-200", "text-white"], // Bold bg, soft border
    ["bg-lime-300", "shadow-lime-400", "border-green-800", "text-black"], // High contrast, clean look
    ["bg-amber-200", "shadow-amber-300", "border-red-600", "text-black"], // Warm combo
    ["bg-cyan-300", "shadow-cyan-400", "border-blue-900", "text-black"], // Fresh and readable
    ["bg-rose-300", "shadow-rose-400", "border-gray-800", "text-black"], // Modern, balanced
    ["bg-indigo-300", "shadow-indigo-400", "border-sky-200", "text-white"], // Elegant pair
    ["bg-orange-200", "shadow-orange-300", "border-gray-700", "text-black"], // Strong contrast
    ["bg-teal-300", "shadow-teal-400", "border-lime-200", "text-white"], // Calm and balanced
    ["bg-fuchsia-200", "shadow-fuchsia-300", "border-black", "text-black"], // Trendy, still readable
    ["bg-pink-200", "shadow-pink-3", "border-rose-600", "text-black"], // Soft, consistent
    ["bg-emerald-300", "shadow-emerald-400", "border-gray-800", "text-white"], // Deep, vivid green
    ["bg-sky-200", "shadow-sky-300", "border-blue-800", "text-black"], // Airy, calm contrast
    ["bg-red-300", "shadow-red-400", "border-black", "text-black"], // Bright bg, dark border
    ["bg-blue-300", "shadow-blue-400", "border-yellow-300", "text-white"], // Cool bg, warm border
    ["bg-green-300", "shadow-green-400", "border-blue-800", "text-white"], // Earthy bg, contrasting border
    ["bg-purple-300", "shadow-purple-400", "border-pink-300", "text-white"], // Vibrant combo
    ["bg-red-300", "shadow-red-400", "border-yellow-200", "text-white"], // Bold bg, soft border
    ["bg-lime-300", "shadow-lime-400", "border-green-800", "text-black"], // High contrast, clean look
    ["bg-amber-200", "shadow-amber-300", "border-red-600", "text-black"], // Warm combo
    ["bg-cyan-300", "shadow-cyan-400", "border-blue-900", "text-black"], // Fresh and readable
    ["bg-rose-200", "shadow-rose-300", "border-gray-800", "text-black"], // Modern, balanced
    ["bg-indigo-300", "shadow-indigo-400", "border-sky-200", "text-white"], // Elegant pair
    ["bg-orange-200", "shadow-orange-300", "border-gray-700", "text-black"], // Strong contrast
    ["bg-teal-300", "shadow-teal-400", "border-lime-200", "text-white"], // Calm and balanced
    ["bg-fuchsia-200", "shadow-fuchsia-300", "border-black", "text-black"], // Trendy, still readable
    ["bg-pink-200", "shadow-pink-300", "border-rose-600", "text-black"], // Soft, consistent
    ["bg-emerald-300", "shadow-emerald-400", "border-gray-800", "text-white"], // Deep, vivid green
    ["bg-sky-200", "shadow-sky-300", "border-blue-800", "text-black"], // Airy, calm contrast
  ];

  const chapters = [1,2];
    <section className="w-full max-[640px]:h-full flex gap-4 max-[640px]:flex-col max-[640px]:mx-0 justify-center bg-white mb-2 aspect-[675/887]">
    <div className="max-[640px]:w-full max-[640px]:px-0 sm:w-[45vw] md:w-[35vw] lg:w-[26vw] flex flex-col justify-end  border rounded-lg bg-white text-center">
      <img
        src="/banglaClass5_2025_ch0.png"
        className=""
        type="image/png"
        alt="পঞ্চম শ্রেণীর বাংলা বই"
      />
    </div>
  </section>
  return (
    <div className="border-box bg-blue-400">
      {/* =================Subject Cover Page Section================= */}
<App></App>
<App2></App2>
      <section className="w-full">
        {/* =================Learning Aid Section================= */}
   
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className={`w-full px-4 flex flex-col my-4 broder rounded-md max-[640px]:${colors2[index][1]} ${colors2[index][0]} border ${colors2[index][2]}`}
          >
            {/* =================Chapter Heading================= */}

            <section
              className="flex justify-between items-center gap-2 py-4"
              id={index}
            >
              <div className="w-1/2 text-md">
                     <div>
                  <span className="max-[640px]:pr-1 sm:pr-1 md:pr-2">
                    অধ্যায়:{" "}
                  </span>
                  <span className="text-white max-[640px]:pr-2 sm:pr-4 md:pr-4">
                    {chapter}
                  </span>
                </div>
              </div>
              <div className="w-1/2 flex justify-end items-center text-xs gap-2">
                <div className="flex gap-2 w-full m-8">
                  <button
                    onClick={() => handleToggle(chapter)}
                    onTouchEnd={() => handleToggle(chapter)}
                    className="w-full px-4 py-4 flex gap-4 flex-col items-center justify-center text-orange-600 border rounded-md max-[640px:text-[10px] sm:text-sm font-bold"
                  >
                      পাঠ্যবই: ch_{chapter}{" "}
                  </button>
                  {isOpen1 && (
                  <DraggableModalBN
                    headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                    // onSetIsOpen={() => setIsOpen1(false)}
                    
                  >
                    <Books
                      uRL={`/banglaClass5_2025_ch${chapter}.pdf`}
                      imgURL={`/banglaClass5_2025_ch${chapter}.png `}
                    ></Books>
                  </DraggableModalBN>
              )}
                  <button
                    onClick={() => setIsOpen2(!isOpen2)}
                    onTouchEnd={() => setIsOpen2(!isOpen2)}
                   className="w-full px-4 py-4 flex gap-4 flex-col items-center justify-center text-orange-600 border rounded-md max-[640px:text-[10px] sm:text-sm font-bold"
                  >
                      নোট: ch_{chapter}{" "}
                  </button>
                  
                  <button
                    onClick={() => setIsOpen3(!isOpen3)}
                    onTouchEnd={() => setIsOpen3(!isOpen3)}
                    className="w-full px-4 py-4 flex gap-4 flex-col items-center justify-center text-orange-600 border rounded-md max-[640px:text-[10px] sm:text-sm font-bold"
                  >
                      সংক্ষিপ্ত প্রশ্ন: ch_{chapter}{" "}
                    
                  </button>

                  <button
                    onClick={() => setIsOpen4(!isOpen4)}
                    onTouchEnd={() => setIsOpen4(!isOpen4)}
                    className="w-full px-4 py-4 flex gap-4 flex-col items-center justify-center text-orange-600 border rounded-md max-[640px:text-[10px] sm:text-sm font-bold"
                  >
                      বিস্তারিত প্রশ্ন: ch_{chapter}{" "}
                   
                  </button>
                </div>
              </div>
              
            </section>
            <section className="w-full h-fit border rounded-md p-8">
              {isOpen1 && (
                  <DraggableModalBN
                    headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                    onSetIsOpen={() => setIsOpen1(false)}
                    
                  >
                    <Books
                      uRL={`/banglaClass5_2025_ch${chapter}.pdf`}
                      imgURL={`/banglaClass5_2025_ch${chapter}.png `}
                    ></Books>
                  </DraggableModalBN>
              )}

              {isOpen2 && (
                  <DraggableModalBN
                    headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                    onSetIsOpen={() => setIsOpen2(false)}
                  >
                    নোট
                    <LucideChevronsLeftRight />
                    <Notes noteKey={`banglaNote_ch${chapter}`}></Notes>
                  </DraggableModalBN>
              )}

              {isOpen3 && (
                  <DraggableModalBN
                    headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                    onSetIsOpen={() => setIsOpen3(false)}
                  >
                    সংক্ষিপ্ত প্রশ্ন ‍
                    <ShortQuestions
                      questionKey={`banglaShortQuestion_ch${chapter}`}
                      answerKey={`banglaShortAnswer_ch${chapter}`}
                    ></ShortQuestions>
                  </DraggableModalBN>
              )}

              {isOpen4 && (
                  <DraggableModalBN
                    headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                    onSetIsOpen={() => setIsOpen4(false)}
                  >
                    বিস্তারিত প্রশ্ন ‍
                    {/* <LucideChevronsLeftRight /> */}
                    <BroadQuestions
                      questionKey={`banglaBroadQuestion_ch${chapter}`}
                      answerKey={`banglaBroadAnswer_ch${chapter}`}
                    ></BroadQuestions>
                  </DraggableModalBN>
              )}
            </section>            
          </div>
        ))}
      </section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-center text-2xl w-full rounded-md btn"
      >
        PDF Splitter
      </button>
      {isOpen && <PDFSplitter></PDFSplitter>}
    </div>
  );
};

export default LessonsVBangla;
