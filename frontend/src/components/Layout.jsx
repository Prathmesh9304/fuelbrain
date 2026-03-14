import React from 'react'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import Background from './ui/Background'

export default function Layout() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "917709663121"

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Background />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Global WhatsApp FAB */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[-4px_4px_15px_rgba(37,211,102,0.4)] hover:bg-[#1fa951] hover:scale-110 transition-all flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      >
        <MessageCircle size={32} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </motion.a>
    </div>
  )
}
