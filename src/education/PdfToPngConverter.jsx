import React, { useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfToPngConverter = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file || null);
    setImages([]);
  };

  const handleStartConversion = async () => {
    if (!selectedFile) return;

    setLoading(true);
    const arrayBuffer = await selectedFile.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    const pageImages = [];

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: .3 });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;

      const dataUrl = canvas.toDataURL('image/png');
      pageImages.push({ dataUrl, pageNum });
    }

    setImages(pageImages);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">PDF to PNG Converter</h1>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileSelect}
        />
        <button
          onClick={handleStartConversion}
          disabled={!selectedFile || loading}
          className={`px-4 py-2 rounded text-white ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Converting...' : 'Start Conversion'}
        </button>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-1 gap-6">
          {images.map(({ dataUrl, pageNum }) => (
            <div key={pageNum} className="border rounded shadow p-4">
              <h2 className="font-semibold mb-2">Page {pageNum}</h2>
              <img src={dataUrl} alt={`Page ${pageNum}`} className="w-full mb-2" />
              <a
                href={dataUrl}
                download={`page-${pageNum}.png`}
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Download PNG
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PdfToPngConverter;
