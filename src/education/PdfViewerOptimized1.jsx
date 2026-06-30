import React, { useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfViewerOptimized1 = () => {
  const fileInputRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    const loadedPdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    setPdf(loadedPdf);
    setNumPages(loadedPdf.numPages);
    setCurrentPage(1);
    setImageUrl(null);
    renderPage(loadedPdf, 1);
  };

  const renderPage = async (pdfDoc, pageNum) => {
    setLoading(true);
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: .1 }); // Fast rendering

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;

    const dataUrl = canvas.toDataURL('image/png');
    setImageUrl(dataUrl);
    setLoading(false);
  };

  const handleNext = () => {
    const nextPage = Math.min(currentPage + 1, numPages);
    setCurrentPage(nextPage);
    renderPage(pdf, nextPage);
  };

  const handlePrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
    renderPage(pdf, prevPage);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">PDF to PNG Viewer (Fast Mode)</h1>
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="mb-4"
      />

      {loading && <p className="text-blue-500 mb-4">Rendering page...</p>}

      {imageUrl && (
        <div className="mb-4 border rounded shadow p-4">
          <h2 className="font-semibold mb-2">Page {currentPage} of {numPages}</h2>
          <img src={imageUrl} alt={`Page ${currentPage}`} className="w-full mb-2" />
          <a
            href={imageUrl}
            download={`page-${currentPage}.png`}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Download PNG
          </a>
        </div>
      )}

      {pdf && (
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1 || loading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === numPages || loading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfViewerOptimized1;
