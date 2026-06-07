import { Upload, FileText } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Analyzer() {
  const [resumeText, setResumeText] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setResumeText(event.target.result)
        toast.success('File loaded successfully!')
      }
      reader.readAsText(file)
    }
  }

  const handleAnalyze = async () => {
    if (!resumeText.trim()) {
      toast.error('Please upload or paste a resume')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume: resumeText })
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('analysisResult', JSON.stringify(data))
        toast.success('Analysis complete!')
        navigate('/results')
      } else {
        toast.error('Analysis failed. Please try again.')
      }
    } catch (error) {
      toast.error('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Resume ATS Analyzer</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          {/* File Upload */}
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-blue-500 transition cursor-pointer">
            <label className="cursor-pointer flex flex-col items-center gap-3">
              <Upload size={32} className="text-blue-600" />
              <span className="text-gray-700 font-semibold">Upload Resume (PDF/TXT)</span>
              <span className="text-sm text-gray-500">or drag and drop</span>
              <input
                type="file"
                accept=".pdf,.txt,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Or Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 font-semibold">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Paste Resume */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Paste Your Resume</label>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume content here..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            {loading ? 'Analyzing...' : 'Analyze Resume'}
          </button>

          {/* Resume Preview */}
          {resumeText && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-2">Preview ({resumeText.length} characters)</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{resumeText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Analyzer
