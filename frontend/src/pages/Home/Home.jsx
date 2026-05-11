import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Code,
  Calculator,
  ArrowRight,
  Zap,
  Target,
  BookOpen,
  Monitor,
  Award,
  Star,
} from "lucide-react";
import {
  ChildWithBookFemale1,
  ChildWithBookFemale2,
  ChildWithAdultStudying1,
  ChildWithLaptopStudying2,
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
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full bg-white/0 font-sans text-slate-800"
    >
      {/* 1. Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-0 flex flex-col lg:flex-row items-stretch border-b border-transparent">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch w-full">
          {/* Left Text */}
          <motion.div
            variants={itemVariants}
            className="text-left z-10 flex flex-col justify-center pb-8 md:pb-12 lg:pb-16 lg:pt-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-[#111827] leading-[1.15] mb-5">
              Become an Academic All-Rounder <br className="hidden xl:block" />
              with FuelBrain's{" "}
              <span className="text-[#F5A623]">Online Tutoring</span>
            </h1>
            <p className="text-base md:text-lg text-[#4B5563] mb-8 lg:mb-10 max-w-[540px] leading-relaxed font-medium">
              Master every subject with expert guidance, personalized sessions,
              and a track record of real results. Join FuelBrain today — where
              your academic growth begins.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-[#F5A623] hover:bg-[#E0941E] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base font-bold shadow-[0_8px_20px_rgba(245,166,35,0.25)] transition-all whitespace-nowrap"
              >
                Book Your Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-[#5AA2E6] hover:bg-[#488AC7] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base font-bold shadow-[0_8px_20px_rgba(90,162,230,0.25)] transition-all whitespace-nowrap"
              >
                Talk to Our Education Consultant{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end flex-grow items-end mt-4 lg:mt-auto"
          >
            <div className="absolute top-[10%] left-1/2 lg:left-[20%] -translate-x-1/2 lg:translate-x-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-gradient-to-tr from-orange-50/50 to-blue-50/50 rounded-full blur-[60px] lg:blur-[80px] -z-10"></div>
            <img
              src={ChildWithBookFemale1}
              alt="Happy Student with Book"
              className="w-[320px] sm:w-[400px] md:w-[450px] xl:w-[580px] h-auto object-contain relative z-10 origin-bottom object-bottom block"
              style={{ filter: "drop-shadow(0px -10px 40px rgba(0,0,0,0.08))" }}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Feature / Value Prop Strip */}
      <section className="w-full bg-slate-50 py-12 md:py-16 border-t-2 border-slate-200 relative z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: Target, label: "Customized learning\nplans" },
              { icon: Zap, label: "Make learning\nexciting" },
              { icon: BookOpen, label: "Nail your\nhomework" },
              { icon: Monitor, label: "Tech-enabled\nplatform" },
              { icon: Code, label: "Future-ready tech\nskills" },
              { icon: Calculator, label: "Learning aids &\nassessments" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-start gap-4 group cursor-pointer w-28 md:w-32"
              >
                <div className="w-[72px] h-[72px] bg-white rounded-[1.25rem] border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex items-center justify-center text-[#5AA2E6] group-hover:shadow-[0_8px_25px_rgba(90,162,230,0.15)] group-hover:-translate-y-1 transition-all duration-300">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[12px] font-semibold text-[#4B5563] leading-[1.3] text-center whitespace-pre-line tracking-tight px-1">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About / Why Choose Us Section */}
      <section className="w-full bg-[#F8F9FA] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side Images */}
            <motion.div variants={itemVariants} className="relative h-[500px]">
              <img
                src={ChildWithAdultStudying1}
                alt="Tutor and Student high-five"
                className="absolute top-0 left-0 w-[65%] h-[320px] object-cover rounded-3xl shadow-xl z-10"
              />
              <div className="absolute bottom-0 right-0 w-[70%] h-[320px] bg-white rounded-3xl shadow-2xl p-3 z-20">
                <img
                  src={ChildWithLaptopStudying2}
                  alt="Student learning online"
                  className="w-full h-full object-cover rounded-[1.25rem]"
                />
              </div>
            </motion.div>

            {/* Right side Content */}
            <motion.div variants={itemVariants}>
              <div className="inline-block bg-[#E8F0FE] text-[#1A73E8] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                About Us
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-tight mb-6">
                Attain True Academic Success <br />
                with Expert-Led Tutoring at FuelBrain
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                At FuelBrain, our sessions are more than just lessons — they're
                tailored learning experiences designed around you. Our team of
                qualified experts has been carefully selected based on skill,
                subject-matter expertise, and years of proven experience.
              </p>

              <h3 className="font-bold text-xl text-slate-900 mb-6">
                What Sets FuelBrain Apart?
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#F4A623] rounded-full p-1 text-white shrink-0">
                    <Zap size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      Personalized Learning, Flexible Scheduling
                    </h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      We make it easy to learn on your terms. Choose a time that
                      works for you and your tutor — no rigid schedules, just
                      seamless learning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#F4A623] rounded-full p-1 text-white shrink-0">
                    <Target size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      Targeted Support for A/B Grades
                    </h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      We don't believe in one-size-fits-all. Our tutors identify
                      your challenges and build customized strategies to help
                      you consistently secure A or B grades.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#F4A623] rounded-full p-1 text-white shrink-0">
                    <Star size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      A 4.9/5 Trust Score from Students and Parents
                    </h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      Our credibility speaks through our results. With a
                      near-perfect rating, FuelBrain is trusted by hundreds for
                      delivering quality, reliability, and results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="font-semibold text-slate-700">
                  Let's turn your goals into achievements.
                </span>
                <Link
                  to="/contact"
                  className="bg-[#F4A623] hover:bg-[#E0941E] text-white px-6 py-3 rounded-full font-bold shadow-lg transition-colors whitespace-nowrap"
                >
                  Start Your Learning Journey Now &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Lead Capture / Contact Form Section */}
      <section className="w-full bg-[#F8F9FA]/0 pt-12 md:pt-16 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-[36px] md:text-[48px] font-black tracking-tight text-[#111827] mb-2">
              Consult with <span className="text-[#F5A623]">Our Team</span> of
              Experts!
            </h2>
            <p className="text-base md:text-[17px] text-[#6B7280] font-medium tracking-wide">
              Send us a quick message, and we'll get back to you promptly with
              the assistance you need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-[1000px] mx-auto">
            {/* Left Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-end relative lg:order-1 order-2 mt-4 lg:mt-0"
            >
              <div className="absolute top-1/2 left-1/2 lg:left-[20%] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] bg-gradient-to-tr from-pink-50/50 to-orange-50/50 rounded-full blur-[60px] lg:blur-[80px] -z-10"></div>
              <img
                src={ChildWithBookFemale2}
                alt="Student holding book smiling"
                className="w-[320px] sm:w-[400px] md:w-[450px] lg:w-[480px] xl:w-[500px] object-contain block bottom-0 z-10"
                style={{
                  filter: "drop-shadow(0px -10px 30px rgba(0,0,0,0.1))",
                }}
              />
            </motion.div>

            {/* Right Form Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 sm:p-10 mb-0 lg:mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 self-center lg:order-2 order-1"
            >
              <div className="text-center mb-6">
                <h3 className="text-[20px] font-bold text-[#F5A623] mb-1">
                  Need help?
                </h3>
                <h4 className="text-[24px] font-bold text-slate-900">
                  Let's connect now!
                </h4>
              </div>

              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-[10px] sm:rounded-[12px] border border-slate-200/80 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-[10px] sm:rounded-[12px] border border-slate-200/80 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-[10px] sm:rounded-[12px] border border-slate-200/80 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors"
                  required
                />
                <textarea
                  placeholder="Your Message*"
                  rows="3"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-[10px] sm:rounded-[12px] border border-slate-200/80 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors resize-none"
                  required
                />
                <div className="text-center pt-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#F5A623] hover:bg-[#E0941E] text-white font-bold py-3 sm:py-3.5 px-10 rounded-full transition-colors shadow-[0_10px_20px_rgba(245,166,35,0.25)] text-[16px]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
