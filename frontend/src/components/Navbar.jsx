import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import { FuelBrainLogo } from '../assets'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={FuelBrainLogo} alt="FuelBrain Logo" className="w-10 h-10" />
            <span className="font-bold text-2xl tracking-tight text-slate-900">
              Fuel<span className="text-brand-blue">Brain</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({isActive}) => 
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-brand-blue bg-blue-50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="ml-4">
              <Link to="/contact">
                <Button size="sm">Book Demo</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map(link => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({isActive}) => 
                    `block px-4 py-3 rounded-lg text-base font-medium ${isActive ? 'text-brand-blue bg-blue-50' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 px-4">
                <Link to="/contact" className="w-full inline-block" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Book Free Demo</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
