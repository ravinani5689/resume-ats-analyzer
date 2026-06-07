# Resume ATS Analyzer - AI-Powered Platform

A full-stack web application that uses artificial intelligence to analyze resumes against job descriptions and provides detailed ATS (Applicant Tracking System) compatibility scores with actionable improvement suggestions.

## 🚀 Features

### Resume Analysis
- **PDF/DOCX Upload**: Support for multiple resume formats
- **Data Extraction**: Automatically extract skills, experience, education, certifications, and projects
- **Keyword Recognition**: Identify all relevant keywords in the resume

### ATS Compatibility Scoring
- **Keyword Matching**: Compare resume keywords with job description
- **Skill Analysis**: Match technical and soft skills
- **Project Relevance**: Evaluate project experience relevance
- **Experience Alignment**: Assess work history compatibility
- **Formatting Analysis**: Check resume structure and formatting
- **Timeline Validation**: Verify employment timeline consistency

### Improvement Suggestions
- Resume headline optimization
- Section structure recommendations
- Font and formatting guidelines
- Readability improvements
- Project description enhancements
- Missing keywords identification

### User Interface
- Clean, modern dashboard design
- Responsive mobile-friendly layout
- Real-time loading states
- Comprehensive error handling
- Visual analysis results

## 🛠 Tech Stack

### Frontend
- **React.js** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Multer** - File upload handling
- **PDF.js** - PDF parsing
- **Mammoth.js** - DOCX parsing
- **OpenAI API** - AI integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- OpenAI API key

### Backend Setup

```bash
cd server
npm install
cp .env.example .env
# Add your OpenAI API key to .env
npm start
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

Application available at `http://localhost:5173`

## 📊 Analysis Output

The analyzer provides:

1. **ATS Compatibility Score** (0-100)
2. **Keyword Match Report** - Keywords found/missing
3. **Skills Analysis** - Technical and soft skills matching
4. **Project Relevance** - How relevant projects are to job
5. **Experience Alignment** - Work history compatibility
6. **Formatting Score** - Document structure evaluation
7. **Actionable Suggestions** - Specific improvements
8. **Missing Keywords** - Keywords to add to resume

## 📄 License

MIT License
