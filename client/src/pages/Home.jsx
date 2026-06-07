import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Optimize Your Resume for <span className="text-blue-600">ATS</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get AI-powered insights to make your resume pass through Applicant Tracking Systems and reach hiring managers.
        </p>
        <Link
          to="/analyzer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
        >
          Start Analyzing <ArrowRight size={20} />
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap size={32} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Analysis</h3>
          <p className="text-gray-600">Get instant feedback on your resume's ATS compatibility in seconds.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">AI-Powered</h3>
          <p className="text-gray-600">Advanced AI analyzes your resume against real job requirements and ATS patterns.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Actionable Tips</h3>
          <p className="text-gray-600">Get specific recommendations to improve your resume and increase success rate.</p>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">1</div>
            <h4 className="font-semibold text-gray-800">Upload Resume</h4>
            <p className="text-sm text-gray-600 mt-2">Upload or paste your resume</p>
          </div>
          <div className="p-4">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">2</div>
            <h4 className="font-semibold text-gray-800">AI Analysis</h4>
            <p className="text-sm text-gray-600 mt-2">Get AI-powered analysis</p>
          </div>
          <div className="p-4">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">3</div>
            <h4 className="font-semibold text-gray-800">Get Results</h4>
            <p className="text-sm text-gray-600 mt-2">Receive detailed report</p>
          </div>
          <div className="p-4">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">4</div>
            <h4 className="font-semibold text-gray-800">Improve</h4>
            <p className="text-sm text-gray-600 mt-2">Follow recommendations</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Resume?</h2>
        <p className="mb-6 text-lg">Join thousands of job seekers who improved their chances with our ATS analyzer.</p>
        <Link
          to="/analyzer"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  )
}

export default Home
