const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");
const { pdfToPng } = require("pdf-to-png-converter");

const inputPDF = "./banglaClass5_2025_ch1.pdf"; // Input your PDF path here
const chapters = [
  { name: "Chapter1", start: 1, end: 2 },
  { name: "Chapter2", start: 3, end: 5 },
  // Add all 25 chapters here with start and end page numbers
];

const outputDir = "./outputPNG";

async function extractChapter(pdfBytes, chapter, index) {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const newDoc = await PDFDocument.create();

  for (let i = chapter.start - 1; i < chapter.end; i++) {
    const [copiedPage] = await newDoc.copyPages(pdfDoc, [i]);
    newDoc.addPage(copiedPage);
  }

  const newPdfBytes = await newDoc.save();
  const chapterPdfPath = path.join(outputDir, `${chapter.name}.pdf`);
  fs.writeFileSync(chapterPdfPath, newPdfBytes);

  console.log(`✔ Saved ${chapter.name}.pdf`);

  // Convert to PNG
  const pngOutputDir = path.join(outputDir, chapter.name);
  const pngImages = await pdfToPng(chapterPdfPath, {
    outputFolder: pngOutputDir,
    pages: "1-", // all pages
    viewportScale: 2.0,
  });

  console.log(`🖼 Converted ${chapter.name} to PNGs`);
}

(async () => {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  const pdfBytes = fs.readFileSync(inputPDF);

  for (let i = 0; i < chapters.length; i++) {
    await extractChapter(pdfBytes, chapters[i], i);
  }

  console.log("✅ All chapters converted!");
})();
