const asyncHandler = require('express-async-handler');
const { analyzeResumeWithAI } = require('../utils/atsAnalyzer');

const analyzeResume = asyncHandler(async (req, res) => {
  const { resumeText, jobDescription } = req.body;
  
  if (!resumeText || !jobDescription) {
    return res.status(400).json({
      error: 'Resume text and job description are required'
    });
  }
  
  if (resumeText.trim().length < 50) {
    return res.status(400).json({
      error: 'Resume text is too short'
    });
  }
  
  if (jobDescription.trim().length < 50) {
    return res.status(400).json({
      error: 'Job description is too short'
    });
  }
  
  try {
    const analysis = await analyzeResumeWithAI(resumeText, jobDescription);
    
    res.json({
      success: true,
      data: analysis,
      message: 'Analysis completed successfully'
    });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to analyze resume'
    });
  }
});

module.exports = {
  analyzeResume
};
