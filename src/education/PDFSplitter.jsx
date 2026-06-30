import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import ButtonSwitcher from './ButtonSwitcher';

const PDFSplitter = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [chapterText, setChapterText] = useState('');
  const [filePrefix, setFilePrefix] = useState('banglaClass5_2025_ch');

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const parseChapterRanges = (text) => {
    return text
      .split(',')
      .map(range => {
        const [start, end] = range.split('-').map(Number);
        return [start - 1, end - 1]; // Convert to 0-indexed
      })
      .filter(([start, end]) => !isNaN(start) && !isNaN(end) && start <= end);
  };

  const handleSplit = async () => {
    if (!pdfFile) {
      alert('Please upload a PDF file.');
      return;
    }

    const chapterRanges = parseChapterRanges(chapterText);
    if (chapterRanges.length === 0) {
      alert('Invalid chapter ranges.');
      return;
    }

    const arrayBuffer = await pdfFile.arrayBuffer();
    const originalPdf = await PDFDocument.load(arrayBuffer);

    for (let i = 0; i < chapterRanges.length; i++) {
      const [start, end] = chapterRanges[i];

      const newPdf = await PDFDocument.create();
      const copiedPages = await newPdf.copyPages(
        originalPdf,
        Array.from({ length: end - start + 1 }, (_, idx) => start + idx)
      );

      copiedPages.forEach((page) => newPdf.addPage(page));
      const pdfBytes = await newPdf.save();

      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${filePrefix}${i }.pdf`;
      link.click();

      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="p-4 bg-white">
     <ButtonSwitcher></ButtonSwitcher>
      <h2 className="text-xl font-bold mb-2">Split PDF by Chapter</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 block"
      />

      <label className="block mb-2 font-medium">File name prefix:</label>
      <input
        type="text"
        value={filePrefix}
        onChange={(e) => setFilePrefix(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <label className="block mb-2 font-medium">Chapter ranges (e.g. 1-11,12-20,21-26, 27-31):</label>
      <textarea
        rows={3}
        value={chapterText}
        onChange={(e) => setChapterText(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <button
        onClick={handleSplit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Split PDF
      </button>
    </div>
  );
};

export default PDFSplitter;