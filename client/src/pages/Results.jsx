import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { AlertCircle, CheckCircle, TrendingUp, Award } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Results() {
  const [results, setResults] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem('analysisResult')
    if (saved) {
      setResults(JSON.parse(saved))
    } else {
      navigate('/analyzer')
    }
  }, [])

  if (!results) return <div className="text-center py-12">Loading results...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Your ATS Analysis Results</h1>

      {/* Overall Score */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-blue-600">
          <div className="text-5xl font-bold text-blue-600 mb-2">{results.atsScore || 75}%</div>
          <h3 className="text-xl font-semibold text-gray-800">ATS Score</h3>
          <p className="text-gray-600 mt-2">Your resume's ATS compatibility</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
          <div className="text-5xl font-bold text-green-600 mb-2">{results.matchScore || 68}%</div>
          <h3 className="text-xl font-semibold text-gray-800">Job Match</h3>
          <p className="text-gray-600 mt-2">Match with job requirements</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-purple-600">
          <div className="text-5xl font-bold text-purple-600 mb-2">{results.keywordCount || 24}</div>
          <h3 className="text-xl font-semibold text-gray-800">Keywords Found</h3>
          <p className="text-gray-600 mt-2">Relevant keywords detected</p>
        </div>
      </div>

      {/* Issues & Recommendations */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Issues */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertCircle className="text-red-600" />
            Issues Found
          </h2>
          <div className="space-y-3">
            {(results.issues || ['Poor formatting', 'Missing keywords', 'Too long']).map((issue, idx) => (
              <div key={idx} className="p-3 bg-red-50 border-l-4 border-red-600 rounded">
                <p className="text-gray-700">{issue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle className="text-green-600" />
            Recommendations
          </h2>
          <div className="space-y-3">
            {(results.recommendations || ['Improve formatting', 'Add more keywords', 'Reduce length']).map((rec, idx) => (
              <div key={idx} className="p-3 bg-green-50 border-l-4 border-green-600 rounded">
                <p className="text-gray-700">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Analysis */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="text-blue-600" />
          Skills Analysis
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Found Skills</h3>
            <div className="space-y-2">
              {(results.foundSkills || ['JavaScript', 'React', 'Node.js', 'Python']).map((skill, idx) => (
                <span key={idx} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Missing Important Skills</h3>
            <div className="space-y-2">
              {(results.missingSkills || ['Docker', 'Kubernetes', 'AWS']).map((skill, idx) => (
                <span key={idx} className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  ✗ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={() => navigate('/analyzer')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition flex items-center justify-center gap-2 mx-auto"
        >
          <Award size={20} />
          Analyze Another Resume
        </button>
      </div>
    </div>
  )
}

export default Results
