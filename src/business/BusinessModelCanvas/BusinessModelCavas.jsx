import { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";

const defaultCanvas = () => [
  { name: "8. Key Partners [মূল অংশীদারগণ]", value: "" },
  { name: "7. Key Activities [মূল কাজসমূহ]", value: "" },
  { name: "6. Key Resources [মূল সম্পদসমূহ]", value: "" },
  { name: "2. Value Proposition [মূল্য প্রস্তাব]", value: "" },
  { name: "4. Customer Relationships [গ্রাহক সম্পর্ক]", value: "" },
  { name: "3. Channels [চ্যানেল]", value: "" },
  { name: "1. Customer Segments [ক্রেতা বিভাজন]", value: "" },
  { name: "9. Cost Structures [ব্যয় কাঠামো]", value: "" },
  { name: "5. Revenue Streams [রাজস্ব/আয় স্ট্রীম]", value: "" },
];

const BusinessModelCanvas = () => {
  const localStorageKey = "business-model-canvases";

  const [canvases, setCanvases] = useState(() => {
    return (
      JSON.parse(localStorage.getItem(localStorageKey)) || [defaultCanvas()]
    );
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(canvases));
  }, [canvases]);

  const handleOnChange = (canvasIndex, fieldIndex, value) => {
    setCanvases((prev) => {
      const updated = [...prev];
      updated[canvasIndex][fieldIndex].value = value;
      return updated;
    });
  };

  const addNewCanvas = () => {
    setCanvases((prev) => [...prev, defaultCanvas()]);
  };

  const deleteCanvas = (indexToRemove) => {
    setCanvases((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const exportToPDF = (index) => {
    const element = document.getElementById(`canvas-${index}`);
    html2pdf()
      .from(element)
      .save(`BusinessModelCanvas-${index + 1}.pdf`);
  };

  return (
    <div className="p-4 w-full">
      <button
        onClick={addNewCanvas}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ➕ New Business Model Canvas
      </button>

      {canvases.map((canvas, canvasIndex) => (
        <form
          key={canvasIndex}
          id={`canvas-${canvasIndex}`}
          className="flex flex-col mb-8 w-full bg-white border shadow-lg p-4 rounded"
        >
          <div className="flex justify-between items-center mb-2 w-full h-[10vh]">
            <h2 className="text-xl font-bold">
              Business Model Canvas #{canvasIndex + 1}
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => exportToPDF(canvasIndex)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                📄 Export PDF
              </button>
              <button
                type="button"
                onClick={() => deleteCanvas(canvasIndex)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                🗑 Delete
              </button>
            </div>
          </div>
{/* ===================end================ */}
          <div className="flex flex-nowrap justify-evenly gap-2 w-full h-[50vh]">
            {/* =====1===== */}
            <div className="flex flex-col w-[20vw] h-[50vh]">
              <div className="flex flex-col w-full h-[50vh]">
                <label className="w-full text-sm font-semibold mb-1">
                  {canvas[0].name} 
                </label>
                <textarea
                  className="w-full h-full p-2"
                  placeholder="Write here..."
                  value={canvas[0].value}
                  onChange={(e) =>
                    handleOnChange(canvasIndex, 0, e.target.value)
                  }
                />
              </div>
            </div>

            {/* =====2===== */}
            <div className="flex flex-col w-[20vw] h-[50vh]">
              <div className="flex flex-col w-full h-[25vh]">
                <label className="w-full text-sm font-semibold mb-1">
                  {canvas[1].name}
                </label>
                <textarea
                  className="w-full h-full p-2"
                  placeholder="Write here..."
                  value={canvas[1].value}
                  onChange={(e) =>
                    handleOnChange(canvasIndex, 1, e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col w-full h-[25vh]">
                <label className="w-full text-sm font-semibold mb-1">
                  {canvas[2].name}
                </label>
                <textarea
                  className="w-full h-full p-2"
                  placeholder="Write here..."
                  value={canvas[2].value}
                  onChange={(e) =>
                    handleOnChange(canvasIndex, 2, e.target.value)
                  }
                />
              </div>
            </div>
            

            {/* =====3===== */}
            <div className="flex flex-col w-[20vw] h-[50vh]">
              <label className="w-full text-sm font-semibold mb-1">
                {canvas[3].name}
              </label>
              <textarea
                className="w-full h-full p-2"
                placeholder="Write here..."
                value={canvas[3].value}
                onChange={(e) => handleOnChange(canvasIndex, 3, e.target.value)}
              />
            </div>
            

            {/* =====4===== */}
            <div className="flex flex-col w-[20vw] h-[50vh]">
              <div className="flex flex-col w-full h-[25vh]">
                <label className="w-full text-sm font-semibold mb-1">
                  {canvas[4].name}
                </label>
                <textarea
                  className="w-full h-full p-2"
                  placeholder="Write here..."
                  value={canvas[4].value}
                  onChange={(e) =>
                    handleOnChange(canvasIndex, 4, e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col w-full h-[25vh]">
                <label className="w-full text-sm font-semibold mb-1">
                  {canvas[5].name}
                </label>
                <textarea
                  className="w-full h-full p-2"
                  placeholder="Write here..."
                  value={canvas[5].value}
                  onChange={(e) =>
                    handleOnChange(canvasIndex, 5, e.target.value)
                  }
                />
              </div>
            </div>

            
            {/* =====5===== */}
            <div className="flex flex-col w-[20vw] h-[50vh]">
              <label className="w-full text-sm font-semibold mb-1">
                {canvas[6].name}
              </label>
              <textarea
                className="w-full h-full p-2"
                placeholder="Write here..."
                value={canvas[6].value}
                onChange={(e) => handleOnChange(canvasIndex, 6, e.target.value)}
              />
            </div>
          </div>
          

          <div className="flex w-full border-t mt-4 pt-4 gap-2 h-[20vh] ">
            <div className="flex flex-col w-1/2 h-full">
              <label className="text-sm w-full font-semibold mb-1">
                {canvas[7].name}
              </label>
              <textarea
                className="w-full h-full border p-2"
                placeholder="Write here..."
                value={canvas[7].value}
                onChange={(e) => handleOnChange(canvasIndex, 7, e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm w-full font-semibold mb-1">
                {canvas[8].name}
              </label>
              <textarea
                className="w-full h-full border p-2"
                placeholder="Write here..."
                value={canvas[8].value}
                onChange={(e) => handleOnChange(canvasIndex, 8, e.target.value)}
              />
            </div>
           
          </div>
        </form>
      ))}
    </div>
  );
};

export default BusinessModelCanvas;
