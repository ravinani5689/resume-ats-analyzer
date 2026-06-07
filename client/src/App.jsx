import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Analyzer from './pages/Analyzer'
import Results from './pages/Results'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
