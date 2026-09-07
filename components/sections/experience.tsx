"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronDown } from "lucide-react"

const workExperience = [
  {
    title: "Analytics Engineer Intern",
    company: "Aorbis Inc.",
    location: "East Hartford, CT",
    period: "Jul 2025 - Sep 2025",
    bullets: [
      "Built a modular batch + streaming ingestion pipeline in Python for LLM-based email summarization using Mistral, supporting real-time unstructured data across multiple formats and saving the team a significant amount of time in their daily work.",
      "Cut average query latency by 50% across internal analytics and reporting pipelines by benchmarking GPU vs CPU deployment strategies improving throughput for downstream dashboards without increasing infrastructure cost.",
      "Lifted object detection accuracy by 20% (YOLO + Faster R-CNN) by introducing structured outputs, versioned datasets, and CI/CD-backed reproducibility turning experimental scripts into a pipeline any teammate could rerun.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Xcellence-IT",
    location: "Surat, India",
    period: "Dec 2023 - May 2024",
    bullets: [
      "Automated multi-source data ingestion and transformation in Python, reducing data errors by 30% and enabling real-time operational reporting that replaced manual data consolidation across departments.",
      "Built a real-time KPI monitoring dashboard using Streamlit and pandas, delivering instant visibility into key operational metrics and directly supporting data-driven decision making for business stakeholders across units.",
      "Engineered automated reporting pipelines in Python for trend analysis and KPI tracking, cutting manual reporting time by 40% and deployed on AWS (EC2, S3) for scalable, cross-departmental access to business insights.",
    ],
  },
]

const education = [
  {
    title: "Master of Science in Computer Science",
    school: "George Mason University",
    location: "Fairfax, VA",
    period: "Aug 2024 - May 2026",
    gpa: "GPA: 3.37/4.00",
    bullets: [
      "Relevant Coursework: Mathematical Foundations of CS, Computer Systems & Systems Programming, Theory/Application of Data Mining, Intro to Artificial Intelligence, Information Security Theory & Practice, User Interface Design & Development, Analysis of Algorithms I, Mining Mass Datasets (MapReduce), Software Engineering for WWW",
      "Currently taking: Computer Vision, Object-Oriented Software Specification & Construction",
    ],
  },
  {
    title: "Bachelor of Technology in Computer Engineering",
    school: "Pandit Deendayal Energy University",
    location: "Gandhinagar, India",
    period: "Aug 2020 - May 2024",
    gpa: "GPA: 8.81/10",
    bullets: [
      "Relevant Coursework: Data Structures, Database Management System, Applied Data Analysis and Machine Learning, Artificial Intelligence, Information Security, Cloud Computing, Data Mining, Internet of Things, Blockchain Technology, Digital Forensics, Information Retrieval, Computer Networks, Software Engineering",
      "Final Year Project: Comprehensive Project — Grade A+",
    ],
  },
]

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
  isExpanded: boolean
  onToggle: () => void
  index: number
  isInView: boolean
  type: "work" | "education"
  gpa?: string
}

function ExperienceCard({
  title,
  company,
  location,
  period,
  bullets,
  isExpanded,
  onToggle,
  index,
  isInView,
  type,
  gpa,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
        isExpanded ? "border-l-[5px]" : "border-l-[5px] border-l-transparent"
      }`}
      style={{ borderLeftColor: isExpanded ? "#0D9488" : "transparent" }}
    >
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 md:p-8 flex items-start gap-5 text-left hover:bg-gray-50 transition-colors"
      >
        {/* Icon - Larger */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "#0D9488" }}
        >
          {type === "work" ? (
            <Briefcase className="w-7 h-7 text-white" />
          ) : (
            <GraduationCap className="w-7 h-7 text-white" />
          )}
        </div>

        {/* Content - Stacked Layout */}
        <div className="flex-1 min-w-0">
          {/* Title on its own line */}
          <h4 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            {title}
          </h4>
          
          {/* Company on its own line */}
          <p 
            className="text-base md:text-lg font-semibold mt-2"
            style={{ color: "#0D9488" }}
          >
            {company}
          </p>
          
          {/* Location and Date on third line */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-sm md:text-base text-gray-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {period}
            </span>
            {gpa && (
              <span
                className="px-3 py-1 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: "#0D9488" }}
              >
                {gpa}
              </span>
            )}
          </div>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 mt-1 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <div className="border-t border-gray-100 pt-5 ml-[76px]">
            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4 text-base text-gray-600">
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#0D9488" }}
                  />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Track expanded state for each card
  const [expandedWork, setExpandedWork] = useState<number | null>(0) // First work card expanded by default
  const [expandedEdu, setExpandedEdu] = useState<number | null>(0) // First edu card expanded by default

  return (
    <section
      id="experience"
      className="py-20 md:py-32"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#0D9488" }} />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#0D9488" }}
            />
            <span
              className="text-sm font-medium tracking-wider uppercase"
              style={{ color: "#0D9488" }}
            >
              Experience & Education
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            My Professional Journey
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 text-lg mb-12 max-w-2xl">
            Built at the intersection of machine learning, data engineering, and trust & safety
          </p>

          {/* Work Experience Section - Full Width */}
          <div className="mb-14">
            {/* Subsection Header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#0D9488" }}
              >
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>

            {/* Work Cards - Full Width Stack */}
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <ExperienceCard
                  key={job.title}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  period={job.period}
                  bullets={job.bullets}
                  isExpanded={expandedWork === index}
                  onToggle={() =>
                    setExpandedWork(expandedWork === index ? null : index)
                  }
                  index={index}
                  isInView={isInView}
                  type="work"
                />
              ))}
            </div>
          </div>

          {/* Education Section - Full Width */}
          <div>
            {/* Subsection Header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#0D9488" }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            {/* Education Cards - Full Width Stack */}
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ExperienceCard
                  key={edu.title}
                  title={edu.title}
                  company={edu.school}
                  location={edu.location}
                  period={edu.period}
                  bullets={edu.bullets}
                  isExpanded={expandedEdu === index}
                  onToggle={() =>
                    setExpandedEdu(expandedEdu === index ? null : index)
                  }
                  index={index}
                  isInView={isInView}
                  type="education"
                  gpa={edu.gpa}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
