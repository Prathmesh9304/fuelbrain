import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { seoData } from "../../utils/seoData";

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
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export default function Services() {
  const courses = [
    {
      title: "Chess Mastery",
      level: "Beginner to Advanced",
      color: "blue",
      features: [
        "Opening principles & traps",
        "Middle game strategy & planning",
        "Endgame techniques",
        "Live tournament analysis",
      ],
    },
    {
      title: "Coding Fundamentals",
      level: "Ages 8-16",
      color: "orange",
      features: [
        "Block-based sequencing basics",
        "Introduction to Python & Scratch",
        "Logic and algorithmic thinking",
        "Web design fundamentals",
      ],
    },
    {
      title: "Vedic & Abacus Maths",
      level: "All Levels",
      color: "navy",
      features: [
        "Mental calculation speed-up",
        "Vedic Mathematics tricks",
        "Concentration enhancement",
        "Elimination of math anxiety",
      ],
    },
  ];

  const colorStyles = {
    blue: {
      header: "bg-[#5AA2E6] text-white",
      subtitle: "text-blue-50",
      button:
        "bg-[#5AA2E6] hover:bg-[#488AC7] text-white rounded-full font-bold shadow-[0_10px_20px_rgba(90,162,230,0.25)]",
    },
    orange: {
      header: "bg-[#F5A623] text-white",
      subtitle: "text-orange-50",
      button:
        "bg-[#F5A623] hover:bg-[#E0941E] text-white rounded-full font-bold shadow-[0_10px_20px_rgba(245,166,35,0.25)]",
    },
    navy: {
      header: "bg-[#111827] text-white",
      subtitle: "text-slate-300",
      button:
        "bg-[#111827] hover:bg-slate-800 text-white rounded-full font-bold shadow-[0_10px_20px_rgba(17,24,39,0.25)]",
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full bg-white font-sans text-slate-800"
    >
      <Helmet>
        <title>{seoData.services.title}</title>
        <meta name="description" content={seoData.services.description} />
        <meta name="keywords" content={seoData.services.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.services.url} />
        <meta property="og:title" content={seoData.services.title} />
        <meta
          property="og:description"
          content={seoData.services.description}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.services.url} />
        <meta property="twitter:title" content={seoData.services.title} />
        <meta
          property="twitter:description"
          content={seoData.services.description}
        />
      </Helmet>
      {/* Header Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16 md:pb-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-[#111827] mb-4">
          Our Services
        </h1>
        <p className="text-base md:text-[17px] font-medium text-[#4B5563] max-w-3xl mx-auto">
          Comprehensive curriculum designed to challenge, engage, and elevate
          your child's cognitive abilities.
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="w-full bg-[#F8F9FA] py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, i) => {
              const style = colorStyles[course.color];

              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex h-full"
                >
                  <div className="flex flex-col w-full bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className={`p-8 ${style.header}`}>
                      <span
                        className={`text-sm font-semibold uppercase tracking-wider mb-2 block ${style.subtitle}`}
                      >
                        {course.level}
                      </span>
                      <h3 className="text-3xl font-bold">{course.title}</h3>
                    </div>

                    {/* Content */}
                    <div className="flex-grow p-8 bg-white">
                      <ul className="space-y-5">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <CheckCircle2
                              className="text-[#1A73E8] shrink-0"
                              size={22}
                              strokeWidth={2}
                            />
                            <span className="text-[#1C1C1E] font-medium leading-tight pt-0.5">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="p-8 pt-0 bg-white mt-auto">
                      <Link
                        to="/contact"
                        className={`flex w-full justify-center items-center py-4 rounded-xl font-bold transition-colors ${style.button}`}
                      >
                        Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-white py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center bg-[#F8F9FA] rounded-[3rem] p-12 md:p-16 shadow-sm border border-slate-100"
          >
            <h2 className="text-[32px] lg:text-[40px] font-black text-[#111827] mb-6">
              Not sure which program to pick?
            </h2>
            <p className="text-[19px] text-[#4B5563] font-medium mb-8 max-w-2xl mx-auto">
              Book a free 1-on-1 demo session with our instructors to evaluate
              your child's needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#F5A623] hover:bg-[#E0941E] text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_10px_20px_rgba(245,166,35,0.25)] transition-all"
            >
              Book Your Free Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
