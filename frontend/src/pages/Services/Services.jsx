import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "../../components"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const itemVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 }
}

export default function Services() {
  const courses = [
    {
      title: "Chess Mastery",
      level: "Beginner to Advanced",
      color: "blue",
      btnVariant: "default",
      features: [
        "Opening principles & traps",
        "Middle game strategy & planning",
        "Endgame techniques",
        "Live tournament analysis",
        "Tactical vision training"
      ]
    },
    {
      title: "Coding Fundamentals",
      level: "Ages 8-16",
      color: "orange",
      btnVariant: "default",
      features: [
        "Block-based sequencing basics",
        "Introduction to Python & JavaScript",
        "Game development projects",
        "Logic and algorithmic thinking",
        "Web design fundamentals"
      ]
    },
    {
      title: "Vedic & Abacus Maths",
      level: "All Levels",
      color: "yellow",
      btnVariant: "secondary",
      features: [
        "Mental calculation speed-up",
        "10 Levels of ICMAS Abacus",
        "Vedic Mathematics tricks",
        "Concentration enhancement",
        "Elimination of math anxiety"
      ]
    }
  ]

  const colorStyles = {
    blue: {
      header: "bg-brand-blue text-white",
      subtitle: "text-blue-100"
    },
    orange: {
      header: "bg-brand-orange text-white",
      subtitle: "text-orange-100"
    },
    yellow: {
      header: "bg-brand-yellow text-slate-900",
      subtitle: "text-slate-800"
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-6">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Comprehensive curriculum designed to challenge, engage, and elevate your child's cognitive abilities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, i) => {
          const style = colorStyles[course.color];
          
          return (
            <motion.div key={i} variants={itemVariants} className="flex h-full">
              <div className="flex flex-col w-full bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                {/* Header */}
                <div className={`p-6 md:p-8 ${style.header}`}>
                  <span className={`text-sm font-semibold uppercase tracking-wider mb-2 block ${style.subtitle}`}>
                    {course.level}
                  </span>
                  <h3 className="text-3xl font-bold">
                    {course.title}
                  </h3>
                </div>
                
                {/* Content */}
                <div className="flex-grow p-6 md:p-8 bg-white">
                  <ul className="space-y-4 md:space-y-5">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="text-brand-blue shrink-0" size={22} strokeWidth={1.5} />
                        <span className="text-slate-700 font-medium leading-tight pt-0.5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Footer */}
                <div className="p-6 md:p-8 pt-0 bg-white mt-auto flex items-center justify-start">
                  <Button variant={course.btnVariant} asChild>
                    <Link to="/contact">
                      Enquire <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div variants={itemVariants} className="mt-20 text-center bg-slate-100 rounded-3xl p-12 shadow-sm">
        <h2 className="text-3xl font-bold mb-4">Not sure which program to pick?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Book a free 1-on-1 demo session with our instructors to evaluate your child's needs.
        </p>
        <Button size="lg" variant="primary" asChild>
          <Link to="/contact">Book Free Demo</Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
