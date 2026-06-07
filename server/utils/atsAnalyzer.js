const openai = require('../config/openai');

const analyzeResumeWithAI = async (resumeText, jobDescription) => {
  try {
    const prompt = `You are an expert ATS (Applicant Tracking System) analyzer and resume consultant. Analyze the following resume against the job description and provide a detailed analysis in JSON format.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Provide analysis in the following JSON format:
{
  "atsScore": <0-100 number>,
  "keywordMatching": {
    "score": <0-100>,
    "matchedKeywords": [<list of matched keywords>],
    "missingKeywords": [<list of keywords from job description not in resume>],
    "explanation": "<brief explanation>"
  },
  "skillsMatch": {
    "score": <0-100>,
    "matchedSkills": [<technical skills matched>],
    "missingSkills": [<required skills not in resume>],
    "softSkills": [<soft skills present>],
    "explanation": "<brief explanation>"
  },
  "experienceRelevance": {
    "score": <0-100>,
    "yearsOfExperience": "<estimated years>",
    "relevantRoles": [<relevant job titles/roles>],
    "explanation": "<brief explanation>"
  },
  "projectRelevance": {
    "score": <0-100>,
    "relevantProjects": [<projects that match job requirements>],
    "explanation": "<brief explanation>"
  },
  "educationMatch": {
    "score": <0-100>,
    "degrees": [<degrees listed>],
    "institutions": [<universities>],
    "certifications": [<certifications>],
    "explanation": "<brief explanation>"
  },
  "formattingScore": {
    "score": <0-100>,
    "hasProperHeadings": <boolean>,
    "isWellStructured": <boolean>,
    "hasConsistentFormatting": <boolean>,
    "issues": [<formatting issues if any>],
    "explanation": "<brief explanation>"
  },
  "suggestions": [
    {
      "category": "<Headline|Skills|Experience|Projects|Formatting|Keywords>",
      "priority": "<High|Medium|Low>",
      "suggestion": "<specific actionable suggestion>",
      "impact": "<how this will improve ATS score>"
    }
  ],
  "overallAnalysis": "<comprehensive analysis summary>"
}

Ensure the response is valid JSON that can be parsed.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert ATS analyst and resume optimization consultant. Provide detailed, actionable analysis in valid JSON format.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const analysisText = response.choices[0].message.content;
    
    // Parse JSON from response
    const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not extract JSON from AI response');
    }
    
    const analysis = JSON.parse(jsonMatch[0]);
    return analysis;
  } catch (error) {
    console.error('AI Analysis error:', error);
    throw new Error(`Analysis failed: ${error.message}`);
  }
};

module.exports = {
  analyzeResumeWithAI
};
