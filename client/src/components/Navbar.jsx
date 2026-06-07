import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            📄 Resume ATS
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link
              to="/"
              className={`transition ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link
              to="/analyzer"
              className={`transition ${isActive('/analyzer') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Analyzer
            </Link>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/analyzer"
              className="text-gray-600 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Analyzer
            </Link>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
