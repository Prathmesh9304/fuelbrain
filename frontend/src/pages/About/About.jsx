import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Compass,
  Sparkles,
  Award,
  Trophy,
  Medal,
  Star,
  CheckCircle2,
} from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "../../components";
import {
  OmkarAndhereImg,
  OmkarFIDEImg,
  TrophiesImg,
  MedalsImg,
  ChildWithAdultStudying1,
} from "../../assets";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full bg-white font-sans text-slate-800"
    >
      {/* Header section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16 md:pb-20 text-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1A73E8] font-semibold mb-6 border border-[#1A73E8]/20"
          >
            <span>About Us</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tight text-[#111827] mb-6 leading-tight">
            Attain True Academic Success <br className="hidden md:block" />
            with <span className="text-[#F5A623]">Expert-Led Tutoring</span> at
            FuelBrain
          </h1>
          <p className="text-lg lg:text-[19px] text-[#4B5563] max-w-3xl mx-auto leading-relaxed font-medium">
            At FuelBrain, our sessions are more than just lessons — they're
            tailored learning experiences designed around you. We believe in
            shaping future leaders by cultivating strong logical foundations
            today.
          </p>
        </div>
      </section>

      {/* Mission & Vision grid */}
      <section className="w-full bg-[#F8F9FA] py-16 md:py-24 border-t border-slate-200">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-[#FFF4E5] rounded-[2rem] relative overflow-hidden flex flex-col justify-center border border-[#F4A623]/10"
          >
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#F4A623] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="bg-[#F4A623] text-white w-fit p-4 rounded-2xl mb-6 shadow-sm">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1E]">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-[#6B7280]">
                To empower children aged 8-16 with robust cognitive, analytical,
                and problem-solving skills through gamified, engaging education
                in Chess, Coding, and Mathematics. We turn screen time into
                growth time.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-[#E8F0FE] rounded-[2rem] relative overflow-hidden flex flex-col justify-center border border-[#1A73E8]/10"
          >
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#1A73E8] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="bg-[#1A73E8] text-white w-fit p-4 rounded-2xl mb-6 shadow-sm">
                <Compass size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1E]">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-[#6B7280]">
                To be the leading global platform that nurtures a generation of
                brilliant, confident, and logical thinkers who are equipped to
                innovate and excel in an ever-evolving world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy - Blob Style layout */}
      <section className="w-full bg-white py-16 md:py-24 border-t border-slate-200">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            {/* Blob Background */}
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-[#F8F9FA] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] -z-10 shadow-xl border border-slate-100"></div>
            <img
              src={ChildWithAdultStudying1}
              alt="Philosophy Student"
              className="w-[300px] md:w-[400px] object-cover rounded-3xl drop-shadow-xl z-10"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1C1C1E]">
              What Sets FuelBrain Apart?
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                <div className="text-[#F4A623] shrink-0 mt-1">
                  <CheckCircle2
                    size={28}
                    className="fill-[#F4A623] text-white"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C1C1E] text-lg">
                    Personalized Learning Paths
                  </h4>
                  <p className="text-[#6B7280]">
                    We architect mental frameworks integrating strategic
                    foresight, logical structuring, and swift precision.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                <div className="text-[#F4A623] shrink-0 mt-1">
                  <CheckCircle2
                    size={28}
                    className="fill-[#F4A623] text-white"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C1C1E] text-lg">
                    Gamified Approach
                  </h4>
                  <p className="text-[#6B7280]">
                    We don't believe in one-size-fits-all. Our approach keeps
                    your child highly engaged through structured gamification.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                <div className="text-[#F4A623] shrink-0 mt-1">
                  <CheckCircle2
                    size={28}
                    className="fill-[#F4A623] text-white"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C1C1E] text-lg">
                    Trusted by Parents Worldwide
                  </h4>
                  <p className="text-[#6B7280]">
                    With a near-perfect rating, FuelBrain is trusted for
                    delivering quality, reliability, and real cognitive results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder & Achievements Section */}
      <section className="w-full bg-[#F8F9FA] py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-[#1C1C1E] mb-4">
              Our Mentorship & Achievements
            </h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
              Celebrating excellence, dedication, and the brilliant minds that
              define FuelBrain.
            </p>
          </motion.div>

          {/* Founder Profile */}
          <motion.div
            variants={itemVariants}
            className="mb-20 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row border border-slate-100">
              <div className="md:w-2/5 p-8 bg-[#E8F0FE] flex items-center justify-center relative">
                <div className="absolute w-[200px] h-[200px] bg-[#1A73E8]/20 rounded-full blur-2xl"></div>
                <img
                  className="w-full max-w-xs object-cover rounded-[2rem] shadow-2xl relative z-10 border-4 border-white"
                  src={OmkarAndhereImg}
                  alt="Omkar Andhere - Founder"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=Omkar+Andhere";
                  }}
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="uppercase tracking-widest text-sm text-[#F4A623] font-bold mb-2">
                  Founder & Lead Mentor
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
                  Omkar Andhere
                </h2>
                <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                  Omkar is a passionate educator with years of experience in
                  competitive chess and cognitive development. He has
                  successfully guided hundreds of students to achieve their full
                  potential, blending critical thinking with creative
                  problem-solving.
                </p>
                <div className="flex items-center gap-4 text-[#0D1B2A] font-bold bg-[#FFD700]/20 w-fit px-5 py-3 rounded-xl border border-[#FFD700]/30">
                  <Medal size={24} className="text-[#F4A623]" />
                  <span>10 Levels of ICMAS Abacus Credential</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Omkar FIDE Certificate",
                  src: OmkarFIDEImg,
                  icon: Award,
                  color: "text-[#1A73E8]",
                },
                {
                  title: "Championship Trophies",
                  src: TrophiesImg,
                  icon: Trophy,
                  color: "text-[#F4A623]",
                },
                {
                  title: "Medals & Honors",
                  src: MedalsImg,
                  icon: Star,
                  color: "text-[#FFD700]",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="group overflow-hidden rounded-3xl border-none shadow-md hover:shadow-xl transition-shadow bg-white"
                >
                  <CardHeader className="bg-white flex flex-row items-center gap-4 pb-4">
                    <div className={`p-2 rounded-lg bg-slate-50 ${item.color}`}>
                      <item.icon size={24} />
                    </div>
                    <CardTitle className="text-lg text-[#1C1C1E]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x300?text=${item.title.replace(/ /g, "+")}`;
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
