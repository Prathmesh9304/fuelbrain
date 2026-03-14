import React from "react"
import { motion } from "framer-motion"
import { Brain, Calculator, Code, FlaskConical, Lightbulb, Rocket, Stars, Trophy, GraduationCap, Microscope } from "lucide-react"

const icons = [Brain, Calculator, Code, FlaskConical, Lightbulb, Rocket, Stars, Trophy, GraduationCap, Microscope]

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50">
      {/* Dynamic floating icons */}
      {React.useMemo(() => icons.map((Icon, index) => {
        // Generate random starting positions
        const startX = Math.random() * 100
        const startY = Math.random() * 100
        
        // Generate random movement ranges
        const moveX = (Math.random() - 0.5) * 40
        const moveY = (Math.random() - 0.5) * 40
        
        // Random animation duration and delay
        const duration = 20 + Math.random() * 20
        const delay = Math.random() * 10
        const scale = 0.5 + Math.random() * 1.5

        return (
          <motion.div
            key={index}
            className="absolute text-brand-blue/10"
            initial={{ 
              x: `${startX}vw`, 
              y: `${startY}vh`,
              scale,
              rotate: 0 
            }}
            animate={{
              x: [`${startX}vw`, `${startX + moveX}vw`, `${startX}vw`],
              y: [`${startY}vh`, `${startY + moveY}vh`, `${startY}vh`],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={48} />
          </motion.div>
        )
      }), [])}

      {/* Subtle decorative glowing orbs */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-orange/5 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  )
}
