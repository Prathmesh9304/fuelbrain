import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { ChildWithBookFemale2 } from "../../assets";
import { sendContactMessage } from "../../services/api";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const inquiryOptions = [
  { value: "", label: "Select a Subject", disabled: true },
  { value: "course", label: "Course Inquiry" },
  { value: "issue", label: "Report an Issue" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactMessage(formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full bg-transparent font-sans text-slate-800 min-h-[calc(100vh-80px)]"
    >
      {/* Header Section */}
      <section className="w-full bg-white pt-8 md:pt-10 pb-8 md:pb-10 border-b border-slate-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-[#111827] mb-4">
            Consult with <span className="text-[#F5A623]">Our Team</span> of
            Experts!
          </h1>
          <p className="text-base md:text-[17px] text-[#4B5563] font-medium max-w-2xl mx-auto">
            Send us a quick message, and we'll get back to you promptly with the
            assistance you need.
          </p>
        </div>
      </section>

      {/* Form & Image Section */}
      <section className="w-full bg-transparent pt-6 md:pt-8 pb-0 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-[1250px] mx-auto items-stretch">
            {/* Student Image Section */}
            <div className="flex justify-center items-end relative lg:order-1 order-2 mt-4 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 lg:left-[20%] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] bg-gradient-to-tr from-pink-50/50 to-orange-50/50 rounded-full blur-[60px] lg:blur-[80px] -z-10"></div>
              <img
                src={ChildWithBookFemale2}
                alt="Student holding book"
                className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[420px] xl:w-[450px] object-contain block bottom-0 relative z-10"
                style={{
                  filter: "drop-shadow(0px -10px 40px rgba(0,0,0,0.12))",
                }}
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[2rem] shadow-[0_15px_45px_rgba(0,0,0,0.06)] p-5 sm:p-8 border border-slate-50 mb-0 self-center z-10 relative lg:order-2 order-1">
              <div className="text-center mb-6">
                <h2 className="text-[20px] font-bold text-[#F5A623] mb-1">
                  Need help?
                </h2>
                <h3 className="text-[24px] font-extrabold text-[#111827]">
                  Let's connect now!
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name*"
                      required
                      className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] border border-slate-200 focus:outline-[#F5A623] bg-slate-50 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email*"
                      required
                      className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] border border-slate-200 focus:outline-[#F5A623] bg-slate-50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number*"
                      required
                      className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] border border-slate-200 focus:outline-[#F5A623] bg-slate-50 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] border border-slate-200 focus:outline-[#F5A623] bg-slate-50 transition-colors appearance-none text-[#6B7280]"
                    >
                      {inquiryOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          disabled={option.disabled}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message*"
                    required
                    rows="2"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] border border-slate-200 focus:outline-[#F5A623] bg-slate-50 transition-colors resize-none mb-2"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#F5A623] hover:bg-[#E0941E] text-white px-10 py-2.5 sm:py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(245,166,35,0.25)] transition-all flex items-center justify-center gap-2 "
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Send Message <Mail size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info cards below */}
      <section className="w-full bg-white py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FFF4E5] text-[#F4A623] rounded-full flex items-center justify-center mb-4">
                <Phone size={28} />
              </div>
              <h4 className="font-bold text-[#1C1C1E] text-xl mb-2">Phone</h4>
              <p className="text-[#6B7280]">+91 77096 63121</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#E8F0FE] text-[#1A73E8] rounded-full flex items-center justify-center mb-4">
                <Mail size={28} />
              </div>
              <h4 className="font-bold text-[#1C1C1E] text-xl mb-2">Email</h4>
              <p className="text-[#6B7280]">fuelbrain111@gmail.com</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FFF9D6] text-[#FFD700] rounded-full flex items-center justify-center mb-4">
                <MapPin size={28} />
              </div>
              <h4 className="font-bold text-[#1C1C1E] text-xl mb-2">
                Location
              </h4>
              <p className="text-[#6B7280]">Mangaon, Maharashtra, 402103</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
