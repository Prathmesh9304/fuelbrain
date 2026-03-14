import React from "react"
import { motion } from "framer-motion"
import { Heart, Target, Compass, Sparkles, Award, Trophy, Medal, Star } from "lucide-react"

import { Card, CardHeader, CardTitle, CardContent } from "../../components"
import { OmkarAndhereImg, OmkarFIDEImg, TrophiesImg, MedalsImg } from "../../assets"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-6">About FuelBrain</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We believe in shaping future leaders by cultivating strong logical foundations today.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
        {/* Mission */}
        <motion.div 
          variants={itemVariants}
          className="bento-card bg-gradient-to-br from-brand-orange to-orange-400 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target size={120} />
          </div>
          <div className="relative z-10 p-6 md:p-10">
            <div className="bg-white/20 w-fit p-4 rounded-2xl mb-6 backdrop-blur-md shadow-sm">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-orange-50 font-medium">
              To empower children aged 8-16 with robust cognitive, analytical, and problem-solving skills through gamified, engaging education in Chess, Coding, and Mathematics. We turn screen time into growth time.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div 
          variants={itemVariants}
          className="bento-card bg-gradient-to-br from-brand-blue to-blue-500 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Compass size={120} />
          </div>
          <div className="relative z-10 p-6 md:p-10">
            <div className="bg-white/20 w-fit p-4 rounded-2xl mb-6 backdrop-blur-md shadow-sm">
              <Compass size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed text-blue-50 font-medium">
              To be the leading global platform that nurtures a generation of brilliant, confident, and logical thinkers who are equipped to innovate and excel in an ever-evolving world.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        variants={itemVariants}
        className="mb-20 md:mb-24 max-w-4xl mx-auto text-center p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden"
      >
        <Sparkles className="mx-auto text-brand-yellow mb-6 relative z-10" size={48} />
        <h2 className="text-3xl font-bold mb-6 relative z-10">The FuelBrain Philosophy</h2>
        <p className="text-lg text-slate-600 leading-relaxed relative z-10">
          At FuelBrain, we don't just teach subjects; we architect mental frameworks. By integrating the strategic foresight of Chess, the logical structuring of Coding, and the swift precision of Vedic & Abacus Mathematics, we provide a holistic cerebral workout that prepares children for the complexities of tomorrow.
        </p>
      </motion.div>

      {/* Founder & Achievements Section */}
      <div className="mb-16">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Our Mentorship & Achievements</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Celebrating excellence, dedication, and the brilliant minds that define FuelBrain.
          </p>
        </motion.div>

        {/* Founder Profile */}
        <motion.div variants={itemVariants} className="mb-20">
          <Card className="overflow-hidden border-l-4" style={{ borderLeftColor: 'var(--color-brand-blue)' }}>
            <div className="md:flex">
              <div className="md:shrink-0 max-w-xs p-8 bg-blue-50/50 flex items-center justify-center">
                <img 
                  className="h-64 w-64 object-cover rounded-[2rem] shadow-xl ring-4 ring-white" 
                  src={OmkarAndhereImg} 
                  alt="Omkar Andhere - Founder" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/256x256?text=Omkar+Andhere" }}
                />
              </div>
              <div className="p-6 md:p-12 flex flex-col justify-center">
                <div className="uppercase tracking-wide text-sm text-brand-blue font-semibold mb-2">Founder & Lead Mentor</div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Omkar Andhere</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Omkar is a passionate educator with years of experience in competitive chess and cognitive development. He has successfully guided hundreds of students to achieve their full potential, blending critical thinking with creative problem-solving.
                </p>
                <div className="flex items-center gap-4 text-brand-orange font-medium bg-orange-50 w-fit px-4 py-2 rounded-full">
                  <Medal size={20} />
                  <span>10 Levels of ICMAS Abacus Credential</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Image Gallery */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-800">Gallery of Excellence</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Omkar FIDE Certificate",
                src: OmkarFIDEImg,
                icon: Award,
                color: "text-brand-blue"
              },
              {
                title: "Championship Trophies",
                src: TrophiesImg,
                icon: Trophy,
                color: "text-brand-yellow"
              },
              {
                title: "Medals & Honors",
                src: MedalsImg,
                icon: Star,
                color: "text-brand-orange"
              }
            ].map((item, i) => (
              <Card key={i} className="group overflow-hidden">
                <CardHeader className="bg-slate-50 flex flex-row items-center gap-4 pb-4">
                  <item.icon className={item.color} size={24} />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.src = `https://via.placeholder.com/400x300?text=${item.title.replace(/ /g, '+')}` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

    </motion.div>
  )
}
