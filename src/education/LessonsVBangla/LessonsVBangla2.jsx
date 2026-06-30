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
const LessonsVBangla = () => {
  const [width, setWidth] = useState("w-full");
  const [width2, setWidth2] = useState("w-full");

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
    <div className="border-box mx-6 bg-blue-400">
 

    {/* <DraggableModal name="ShortQuestions"><ShortQuestions></ShortQuestions></DraggableModal> */}
    {/* <DraggableModal name="BroadQuestions"><BroadQuestions></BroadQuestions></DraggableModal> */}
      {/* =================Subject Cover Page Section================= */}
      {/* sticky max-[640px]:mt-[10vh] max-[640px]:top-[-200vw] sm:top-[9vw] md:top-[6vw]  */}
      <section className="w-full max-[640px]:h-full flex gap-4 max-[640px]:flex-col max-[640px]:mx-0 justify-center bg-white mb-2">
        <div className="max-[640px]:w-full max-[640px]:px-0 sm:w-[45vw] md:w-[35vw] lg:w-[26vw] flex justify-end aspect-[675/887] border rounded-lg bg-white">
          <img
            src="/banglaClass5_2025_ch0.png"
            className=""
            type="image/png"
            alt="পঞ্চম শ্রেণীর বাংলা বই"
          />
        </div>
        <div className="max-[640px]:w-full max-[640px]:px-0 sm:w-[45vw] md:w-[35vw] lg:w-[26vw] flex justify-start aspect-[675/887] border rounded-lg border-gray-50 bg-white">
          <div className="max-[640px]:text-xs sm:text-[10px] md:text-[10px] lg:text-sm p-2 overflow-y-clip">
            <h1 className="font-bold mb-2">আমার বাংলা বই: পঞ্চম শ্রেণী</h1>
            <ul className="list-disc pl-4 space-y-1">
              <li className="">
                বাম পাশে অধ্যায় অনুযায়ী পাঠ্য বই দেখতে পাবে। Expand ও Collapse
                বাটনে ক্লিক করে বড় ছোট করতে পারবে।
              </li>
              <li className="">
                ডান পাশে এমসিকিউ, সংক্ষিপ্ত প্রশ্ন ও বিস্তারিত প্রশ্ন পাবে।
                অনেকগুলোর উত্তর দেওয়া থাকবে, তবে প্রয়োজন হলে নিজেরাও প্রশ্ন
                যুক্ত করতে পারবে এবং উত্তর লিখতে পারবে। এই সেকশনও Expand ও
                Collapse বাটনে ক্লিক করে বড় ছোট করতে পারবে।
              </li>
              <li className="">
                ডান পাশে এছাড়া তোমার প্রয়োজনমত নোট রাখারও ব্যবস্থা আছে।
              </li>
              <li className="">
                নোট, প্রশ্ন বা উত্তরের উপরের ডাবল ক্লিক করলে তোমার লেখাটা পড়িয়ে
                নিতেও পারবে।
              </li>
              <li className="">
                এই ওয়েবসাইটের উদ্দেশ্য তোমাদের পড়ালেখাকে আধুনিক মান উপযোগী, সহজ
                ও আকর্ষণীয় করে তোলা। পাঠক্রমকে শিখন ঘাটতি না থাকা উপযোগী করা।
              </li>
              <li className="">
                এটা তোমাদের পড়ালেখা এগিয়ে নেওয়ার সাথে সাথে কম্পিউটার ও অন্যান্য
                ডিজিটাল ডিভাইসের উপরও দক্ষতা গড়ে তুলতে সাহায্য করবে।
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* =================Book and Learning Aid Section================= */}
      {/* max-[640px]:mt-16 sm:mt-16 md:mt-14 lg:mt-24 */}
      <section className="flex gap-4 max-[640px]:flex-col max-[640px]:hidden bg-white max-[640px]:text-sm sm:text-md md:text-lg z-20">
        <div className={`${width}`}>
          <div className="flex bg-blue-800 text-gray-100 items-center py-2">
            <h1 className="font-bold text-center max-[600px]:w-75% w-[90%]">
              Book Section
            </h1>
            <h1 className="text-center max-[600px]:w-25% w-10% mt-2">
              {width === "w-full" ? (
                <button
                  onClick={handleShrink}
                  className="btn btn-xs max-[640px]:scale-75"
                >
                  <LucideChevronsRightLeft />
                </button>
              ) : (
                <button
                  onClick={handleExpand}
                  className="btn btn-xs max-[640px]:scale-75"
                >
                  <LucideChevronsLeftRight />
                </button>
              )}
            </h1>
          </div>
        </div>

        <div className={`${width2}`}>
          <div className="flex bg-blue-800 text-gray-100 items-center py-2">
            <h1 className="font-bold text-center max-[600px]:w-75% w-[90%]">
              Learning Aids
            </h1>
            <h1 className="text-center max-[600px]:w-25% w-10%">
              {width2 === "w-1/2" ? (
                <button
                  onClick={handleExpand2}
                  className="btn btn-xs mt-2 max-[640px]:scale-75"
                >
                  <LucideChevronsLeftRight />
                </button>
              ) : (
                <button
                  onClick={handleShrink}
                  className="btn btn-xs mt-2 max-[640px]:scale-75"
                >
                  <LucideChevronsRightLeft />
                </button>
              )}
            </h1>
          </div>
        </div>
      </section>

      <div className="flex gap-4 py-1 max-[640px]:sticky max-[640px]:top-[5vh] max-[640px]:text-[8px] bg-white z-50"> 
        {chapters.map((index) => (
          <div className="" key={index}>          
            <a
              href={`#${index-2}`}
              className="border rounded-md p-3 m-2"
              target="_self"
            >
              ch {index}
            </a>        
          </div>
        ))}
      </div>

      <section className="w-full bg-white">
        {/* =================Learning Aid Section================= */}
        

        {chapters.map((chapter, index) => (
          <div
            key={index}
            // className={`w-full px-4 flex flex-col broder rounded-md sticky max-[640px]:top-[12vw] sm:top-[9vw] md:top-[6vw] z-50 max-[640px]:h-[80vh] sm:h-[90vh] max-[640px]:overflow-y-scroll max-[640px]:mb-2 max-[640px]:shadow-md max-[640px]:${colors2[index][1]} ${colors2[index][0]} border ${colors2[index][2]}`}
            className={`w-full px-4 flex flex-col broder rounded-md z-50 max-[640px]:h-[80vh] sm:h-[90vh] max-[640px]:overflow-y-scroll max-[640px]:mb-2 max-[640px]:shadow-md max-[640px]:${colors2[index][1]} ${colors2[index][0]} border ${colors2[index][2]}`}
          >
       
            {/* =================Chapter Heading================= */}
            {/* ${
                chapter === 1
                  ? "bg-red-100"
                  : chapter === 2
                  ? "bg-lime-300"
                  : chapter === 3
                  ? "bg-emerald-300"
                  : chapter === 4
                  ? "bg-fuchsia-300"
                  : chapter % 2 === 0
                  ? "bg-blue-300"
                  : "bg-green-100"
              } */}
            {/* sticky max-[640px]:top-[12vw] sm:top-[17vw] md:top-[12vw] lg:top-[10vw] z-40 border rounded-md max-[640px]:mx-0 mt-2 */}
            <h1
              className={`max-[640px]:text-sm md:text-md font-bold text-center w-full px-2 py-1 my-1 flex justify-center items-center 
               ${colors[index][0]} ${colors[index][1]} ${colors[index][2]}
              `}
            >
              <span className="max-[640px]:pr-1 sm:pr-1 md:pr-2">পাঠ: </span>
              <span className="text-orange-600 max-[640px]:pr-2 sm:pr-4 md:pr-4">
                {chapter}
              </span>
              <span className="max-[640px]:pr-1 sm:pr-1 md:pr-2">বিষয়:</span>
              <span className="text-green-500 max-[640px]:pr-2 sm:pr-4 md:pr-4">
                {selectSubject}
              </span>
              <span className="max-[640px]:pr-1 sm:pr-1 md:pr-2">শ্রেণী:</span>
              <span className="text-green-500 max-[640px]:pr-2 sm:pr-4 md:pr-4">
                {selectClass}
              </span>
            </h1>
            {/* <section className="flex gap-4 max-[640px]:flex-col max-[640px]:gap-4 mt-1 bg-white z-30 overflow-y-scroll"> */}
            <section className="flex max-[640px]:flex-col" id={index}>
              {/* Left panel: Book */}
              <div className="w-full"><BooksModal uRL={`/banglaClass5_2025_ch${chapter}.pdf`}
                  imgURL={`/banglaClass5_2025_ch${chapter}.png `}></BooksModal></div>
              
      
              <div className={`${width} max-[640px]:mb-4`}>
                <Books
                  uRL={`/banglaClass5_2025_ch${chapter}.pdf`}
                  imgURL={`/banglaClass5_2025_ch${chapter}.png `}
                  chapter={chapter}
                />
              </div>
              {/* Right panel: Learning Aids */}
              <div
                className={`${width2} max-[640px]:rounded-md max-[640px]:bg-white`}
              >
                <LearningAidsVBangla
                  selectClass="পঞ্চম"
                  selectSubject="আমার বাংলা বই"
                  noteKey={`banglaNote ch.${chapter}`}
                  shortQuestionKey={`banglaShortQuestions_ch.${chapter}`}
                  shortAnswerKey={`banglaShortAnswers_ch.${chapter}`}
                  broadQuestionKey={`banglaBroadQuestions_ch.${chapter}`}
                  broadAnswerKey={`banglaBroadAnswers_ch.${chapter}`}
                />
              </div>
            </section>
          </div>
        ))}
      </section>
      <PDFSplitter></PDFSplitter>
      <PdfToPngConverter></PdfToPngConverter>
      <PdfViewerOptimized></PdfViewerOptimized>
      <PdfViewerOptimized1></PdfViewerOptimized1>     
    </div>
  );
};

export default LessonsVBangla;
