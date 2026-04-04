"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, Linkedin, Github, ExternalLink, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pgandhi6@gmu.edu",
    href: "mailto:pgandhi6@gmu.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(917) 295-7252",
    href: "tel:+19172957252",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/gandhiparshwa",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Parshwa1504",
    href: "https://github.com/Parshwa1504",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("https://formspree.io/f/xnjoglob", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 md:py-32" style={{ backgroundColor: "#F5F2EB" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label — centered with lines on both sides like Smit's */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16" style={{ backgroundColor: "#0D9488" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#0D9488" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#0D9488" }}>
              Get In Touch
            </span>
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#0D9488" }} />
            <div className="h-px w-16" style={{ backgroundColor: "#0D9488" }} />
          </div>

          {/* Heading — centered like Smit's */}
          <div className="text-center mb-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Let&apos;s Work Together
            </h2>
          </div>
          <p className="text-center text-gray-500 text-xl mb-16 max-w-2xl mx-auto">
            I&apos;m always open to discussing Data Engineering, Data Analytics, and Software Engineering opportunities, collaborations, or just having a chat about data and tech.
          </p>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Feel free to reach out for opportunities, collaborations, or simply to connect. I&apos;m always excited to meet new people and explore new possibilities.
              </p>

              {/* Contact cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    {/* Icon box */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-teal-600"
                      style={{ backgroundColor: "#f0fdfb" }}
                    >
                      <item.icon
                        className="w-6 h-6 transition-colors group-hover:text-white"
                        style={{ color: "#0D9488" }}
                      />
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-0.5">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{item.value}</p>
                    </div>
                    {/* Arrow */}
                    <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-teal-600 transition-colors flex-shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Download Resume button like Smit's */}
              <a
                href="https://drive.google.com/file/d/1nllSI9vdyRSFHJ3RGFrHSLVC9RsAKNQn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1a1a2e" }}
              >
                Download Resume
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>

            {/* RIGHT — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email side by side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#0D9488" }}
                  >
                    {submitted ? (
                      "Message Sent! ✓"
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
