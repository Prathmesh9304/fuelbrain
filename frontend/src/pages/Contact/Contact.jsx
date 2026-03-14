import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import toast from "react-hot-toast"
import { Button, Input, Textarea } from "../../components"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const inquiryOptions = [
  { value: "", label: "Select a Subject", disabled: true },
  { value: "course", label: "Course Inquiry" },
  { value: "issue", label: "Report an Issue" },
  { value: "other", label: "Other" }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", phone: "", inquiryType: "", message: "" })
    }, 1500)
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-6">Get in Touch</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Have questions or want to book a free demo? We'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-0 max-w-5xl mx-auto shadow-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white border border-slate-100">
        {/* Contact Info (Left Side) */}
        <div className="lg:col-span-2 bg-[#4285F4] p-6 md:p-10 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Decorative faint circles */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-white">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-white/20 p-3 rounded-full shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-1">Phone</h4>
                  <p className="text-blue-100 text-sm font-medium">+91 98765 43210</p>
                  <p className="text-blue-200 text-xs mt-0.5">Mon-Sat, 9AM-8PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-white/20 p-3 rounded-full shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-1">Email</h4>
                  <p className="text-blue-100 text-sm font-medium">info@fuelbrain.com</p>
                  <p className="text-blue-200 text-xs mt-0.5">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-white/20 p-3 rounded-full shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-1">Location</h4>
                  <p className="text-blue-100 text-sm font-medium">123 Education Hub,</p>
                  <p className="text-blue-100 text-sm font-medium">Learning City, BK 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <div className="lg:col-span-3 p-6 md:p-10 lg:p-12 bg-white">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required 
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
              <div className="relative">
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 transition-all appearance-none outline-none"
                >
                  {inquiryOptions.map(option => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91..." 
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="I'd like to book a demo for..." 
                required 
              />
            </div>
            
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
