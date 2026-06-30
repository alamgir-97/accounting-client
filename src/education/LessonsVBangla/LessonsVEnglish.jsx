import { useState } from "react";
import { LucideChevronsLeftRight, LucideChevronsRightLeft } from "lucide-react";
import LearningAidsVBangla from "../LearningAids/LearningAidsBangla";
import Books from "../Books/Books";
import PdfToPngConverter from "../pdfToPngConverter";
import PDFSplitter from "../PdfSplitter";
import PdfViewerOptimized from "../PdfViewerOptimized";
import PdfViewerOptimized1 from "../PdfViewerOptimized1";
import DraggableModal from "../DraggableModal/DraggableModal";
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
import BooksPng from "../Books/BooksPng";
const LessonsVEnglish = () => {
  const [width, setWidth] = useState("w-full");
  const [width2, setWidth2] = useState("w-full");
  const [isOpen, setIsOpen] = useState(false);

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

  const chapters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="border-box bg-blue-400">
   
      {/* =================Subject Cover Page Section================= */}
     
          <img
            src="/banglaClass5_2025_ch0.png"
            className=" aspect-[675/887] mx-auto"
            type="image/png"
            alt="পঞ্চম শ্রেণীর বাংলা বই"
          />
 
       




      <section className="w-full bg-white">
      <h1 className="font-bold text-center max-[640px]:w-75% w-[90%] py-2">
        <span className="max-[640px]:pr-1 sm:pr-1 md:pr-2">বিষয়:</span>
              <span className="text-white max-[640px]:pr-2 sm:pr-4 md:pr-4">
                {selectSubject}
              </span>
              <span className="max-[640px]:pr-1 sm:pr-1 md:pr-2">শ্রেণী:</span>
              <span className="text-white max-[640px]:pr-2 sm:pr-4 md:pr-4">
                {selectClass}
              </span>
              </h1>
        {/* =================Learning Aid Section================= */}
{/*  sticky max-[640px]:top-[5vh] sm:top-[9vw] md:top-[6vw] z-40  */}
        {chapters.map((chapter, index) => (
          
          <div
            key={index}
            className={`w-full px-4 broder rounded-md max-[640px]:${colors2[index][1]} ${colors2[index][0]} border ${colors2[index][2]} z-30`}
          >
            {/* =================Chapter Heading================= */}

             
            <section className="flex justify-between" id={index}>
              {/* Left panel: Book */}
              <section className="w-full flex flex-col">
                <h1
              className={`max-[640px]:text-sm md:text-md font-bold text-center w-1/3 py-4 my-1 flex justify-center items-center 
               ${colors[index][0]} ${colors[index][1]} ${colors[index][2]}
              `}
            >
              <span className="max-[640px]:pr-1 sm:pr-1 md:pr-2">পাঠ: </span>
              <span className="text-white max-[640px]:pr-2 sm:pr-4 md:pr-4">
                {chapter}
              </span>
            
            </h1> 
              </section>
              <section className="flex w-2/3">

              <div className="w-full mt-4">
                <DraggableModal
                  topic={`পাঠ্য বই`}
                  chapter={`অধ্যায় ${chapter}`}
                  headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                >
                  পাঠ্য বই: আমার বাংলা বই অধ্যায়: {chapter} ‍
                  <Books
                    uRL={`/banglaClass5_2025_ch${chapter}.pdf`}
                    imgURL={`/banglaClass5_2025_ch${chapter}.png `}
                  >
                    {chapter}
                  </Books>
                </DraggableModal>
              </div>

              <div className="w-full mt-4">
                <DraggableModal
                  topic={`পাঠ্য বই`}
                  chapter={`অধ্যায় ${chapter}`}
                  headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                >
                  পাঠ্য বই: আমার বাংলা বই অধ্যায়: {chapter} ‍
                  <BooksPng
                    uRL={`/banglaClass5_2025_ch${chapter}.pdf`}
                    imgURL={`/banglaClass5_2025_ch${chapter}.png `}
                  >
                    {chapter}
                  </BooksPng>
                </DraggableModal>
              </div>

              <div className="w-full mt-4">
                <DraggableModal
                  topic={`নােট`}
                  chapter={`অধ্যায় ${chapter}`}
                  headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                >
                  নোট: আমার বাংলা বই অধ্যায়: {chapter}{" "}
                  <Notes noteKey={`banglaNote_ch${chapter}`}></Notes>
                </DraggableModal>
              </div>
              <div className="w-full mt-4">
                <DraggableModal
                  topic={`সংক্ষিপ্ত প্রশ্ন`}
                  chapter={`অধ্যায় ${chapter}`}
                  headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                >
                  সংক্ষিপ্ত প্রশ্ন: আমার বাংলা বই অধ্যায়: {chapter} ‍
                  <ShortQuestions
                    questionKey={`banglaShortQuestion_ch${chapter}`}
                    answerKey={`banglaShortAnswer_ch${chapter}`}
                  ></ShortQuestions>
                </DraggableModal>
              </div>
              <div className="w-full mt-4 mx-auto">
                <DraggableModal
                  topic={`বিস্তারিত প্রশ্ন`}
                  chapter={`অধ্যায় ${chapter}`}
                  headerTitle={`আমার বাংলা বই অধ্যায়: ${chapter}`}
                >
                  বিস্তারিত প্রশ্ন: আমার বাংলা বই অধ্যায়: {chapter} ‍
                  <BroadQuestions
                    questionKey={`banglaBroadQuestion_ch${chapter}`}
                    answerKey={`banglaBroadAnswer_ch${chapter}`}
                  ></BroadQuestions>
                </DraggableModal>
              </div>
            </section>

              </section>
            
          </div>
        ))}
      </section>

    </div>
  );
};

export default LessonsVEnglish;
