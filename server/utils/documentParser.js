const pdf = require('pdfjs-dist/legacy/build/pdf');
const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

// Parse PDF file
const parsePDF = async (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath);
    const pdfData = new Uint8Array(fileContent);
    
    const document = await pdf.getDocument({ data: pdfData }).promise;
    let text = '';
    
    for (let i = 1; i <= document.numPages; i++) {
      const page = await document.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      text += pageText + ' ';
    }
    
    return text.trim();
  } catch (error) {
    throw new Error(`PDF parsing error: ${error.message}`);
  }
};

// Parse DOCX file
const parseDOCX = async (filePath) => {
  try {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value.trim();
  } catch (error) {
    throw new Error(`DOCX parsing error: ${error.message}`);
  }
};

// Main parsing function
const parseDocument = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  
  if (ext === '.pdf') {
    return await parsePDF(filePath);
  } else if (ext === '.docx' || ext === '.doc') {
    return await parseDOCX(filePath);
  } else {
    throw new Error('Unsupported file format');
  }
};

module.exports = {
  parseDocument,
  parsePDF,
  parseDOCX
};
