import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Brain, Code, Calculator, ArrowRight, Zap, Target, Trophy } from "lucide-react"
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Hero Section */}
      <section className="text-center py-20 px-4 mb-16 relative">
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/20 text-brand-orange font-semibold mb-6"
          >
            <Zap size={20} />
            <span>Empowering Young Minds</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Ignite Your Child's 
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">Pure Potential</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            FuelBrain is a vibrant online education platform for kids ages 8-16, specializing in Chess, Coding, and Mathematics through gamified, structured learning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Book a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services" className="inline-flex items-center">Explore Programs</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Program Overview */}
      <section className="mb-24">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Programs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Structured logically to develop cognitive abilities and intellectual growth.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Chess",
              desc: "Develop foresight, patience, and analytical thinking with grandmaster strategies.",
              icon: Trophy,
              color: "text-brand-orange",
              bg: "bg-orange-100"
            },
            {
              title: "Creative Coding",
              desc: "Build games, apps, and logic gates while learning to speak the language of the future.",
              icon: Code,
              color: "text-brand-blue",
              bg: "bg-blue-100"
            },
            {
              title: "Mental Mathematics",
              desc: "Master numbers with ICMAS Abacus techniques and rapid calculation methods.",
              icon: Calculator,
              color: "text-brand-yellow",
              bg: "bg-yellow-100"
            }
          ].map((program, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full border-t-4 hover:-translate-y-2" style={{ borderTopColor: 'var(--color-brand-blue)' }}>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${program.bg} ${program.color} flex items-center justify-center mb-6`}>
                    <program.icon size={28} />
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{program.desc}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <motion.div variants={itemVariants}>
          <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Brain size={240} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">Why FuelBrain?</h2>
              <ul className="space-y-6 text-lg">
                {[
                  "Gamified learning paths that keep students engaged",
                  "Expert instruction from certified mentors",
                  "Personalized feedback and progress tracking",
                  "Focus on holistic intellectual development"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                      <Target className="text-brand-yellow" size={24} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
