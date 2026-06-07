const asyncHandler = require('express-async-handler');
const { parseDocument } = require('../utils/documentParser');
const fs = require('fs');
const path = require('path');

const uploadResume = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const filePath = req.file.path;
    const fileName = req.file.originalname;
    
    // Parse document
    const resumeText = await parseDocument(filePath);
    
    // Extract basic information
    const extractedData = {
      fileName: fileName,
      fileSize: req.file.size,
      uploadedAt: new Date(),
      resumeText: resumeText,
      characterCount: resumeText.length,
      wordCount: resumeText.split(/\s+/).length
    };
    
    // Clean up uploaded file
    fs.unlinkSync(filePath);
    
    res.json({
      success: true,
      data: extractedData,
      message: 'Resume uploaded and parsed successfully'
    });
  } catch (error) {
    // Clean up file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = {
  uploadResume
};
