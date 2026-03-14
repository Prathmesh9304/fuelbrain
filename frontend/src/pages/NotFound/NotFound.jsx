import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-brand-orange/10 rounded-full text-brand-orange animate-pulse">
            <AlertTriangle size={64} />
          </div>
        </div>
        
        <h1 className="text-8xl font-bold bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent mb-4">
          404
        </h1>
        
        <h2 className="text-3xl font-semibold text-slate-800 mb-6">
          Oops! Page Not Found
        </h2>
        
        <p className="text-lg text-slate-600 max-w-md mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Background decorations - consistent with the site theme */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue/5 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-orange/5 blur-3xl rounded-full -z-10 animate-pulse" />
    </div>
  )
}
