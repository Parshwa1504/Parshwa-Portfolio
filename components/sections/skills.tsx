"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    count: 7,
    color: "#ef4444",
    skills: ["Python", "SQL", "R", "JavaScript", "C", "Node.js", "Bash"],
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    count: 8,
    color: "#3b82f6",
    skills: ["Machine Learning", "Generative AI (LLMs)", "NLP", "Computer Vision", "Predictive Modeling", "Statistical Modeling", "Mistral", "GPT-4"],
  },
  {
    id: 3,
    title: "Data Engineering & Pipelines",
    count: 6,
    color: "#10b981",
    skills: ["ETL/ELT Pipeline Design", "Data Modeling", "Data Quality", "Batch & Streaming", "Data Cleaning", "Data Validation"],
  },
  {
    id: 4,
    title: "Orchestration & Transformation",
    count: 4,
    color: "#f59e0b",
    skills: ["Apache Airflow", "dbt", "Mage AI", "Talend"],
  },
  {
    id: 5,
    title: "Big Data & Streaming",
    count: 4,
    color: "#8b5cf6",
    skills: ["Apache Spark", "Apache Kafka", "Spark Streaming", "Parquet"],
  },
  {
    id: 6,
    title: "Databases & Warehouses",
    count: 8,
    color: "#ec4899",
    skills: ["Snowflake", "BigQuery", "Amazon Redshift", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    id: 7,
    title: "Cloud Platforms",
    count: 3,
    color: "#06b6d4",
    skills: ["AWS (S3, EC2, Lambda, RDS)", "GCP (BigQuery, Cloud Composer, Looker)", "Azure (Synapse, Data Factory)"],
  },
  {
    id: 8,
    title: "Data Visualization & BI",
    count: 7,
    color: "#f97316",
    skills: ["Tableau", "Microsoft Power BI", "Looker Studio", "Streamlit", "Excel (Pivot Tables, VBA)", "Matplotlib", "Seaborn"],
  },
  {
    id: 9,
    title: "Software Engineering & DevOps",
    count: 7,
    color: "#14b8a6",
    skills: ["REST APIs", "Microservices", "Docker", "Git", "CI/CD", "Linux/Unix", "System Design"],
  },
  {
    id: 10,
    title: "Libraries & Analytics",
    count: 5,
    color: "#a855f7",
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "OpenCV"],
  },
]

const toolsProficiency = [
  { name: "Python", level: 90, color: "#ef4444" },
  { name: "SQL / MySQL", level: 88, color: "#3b82f6" },
  { name: "Apache Spark", level: 78, color: "#f59e0b" },
  { name: "Tableau / Power BI", level: 82, color: "#10b981" },
  { name: "Snowflake / BigQuery", level: 80, color: "#8b5cf6" },
  { name: "Airflow / dbt", level: 75, color: "#ec4899" },
  { name: "AWS / GCP / Azure", level: 76, color: "#06b6d4" },
  { name: "Machine Learning / LLMs", level: 83, color: "#f97316" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20 md:py-32" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#0D9488" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#0D9488" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#0D9488" }}>
              Skills &amp; Expertise
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Professional Skillset
          </h2>
          <p className="text-gray-500 text-xl mb-16 max-w-2xl">
            A comprehensive toolkit spanning data engineering, machine learning, cloud platforms, and full-stack development.
          </p>

          {/* Skill Category Cards — full width stacked like Smit's LEFT column */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* LEFT col — skill accordion cards */}
            <div className="space-y-4">
              {skillCategories.slice(0, Math.ceil(skillCategories.length / 2)).map((cat, index) => {
                const isExpanded = expandedId === cat.id
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm"
                    style={{
                      border: isExpanded ? `2px solid ${cat.color}` : "2px solid transparent",
                      boxShadow: isExpanded ? `0 4px 20px ${cat.color}20` : "0 1px 4px rgba(0,0,0,0.06)",
                    }}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <p className="text-xl font-bold text-gray-900">{cat.title}</p>
                        <p className="text-base text-gray-400 mt-1">{cat.count} skills</p>
                      </div>
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 transition-transform duration-300"
                        style={{
                          backgroundColor: cat.color,
                          transform: isExpanded ? "scale(1.5)" : "scale(1)",
                          opacity: isExpanded ? 1 : 0.7,
                        }}
                      />
                    </button>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="px-8 pb-6"
                      >
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 rounded-full text-sm font-medium border"
                              style={{
                                backgroundColor: `${cat.color}12`,
                                color: cat.color,
                                borderColor: `${cat.color}35`,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* RIGHT col — remaining skill accordion cards */}
            <div className="space-y-4">
              {skillCategories.slice(Math.ceil(skillCategories.length / 2)).map((cat, index) => {
                const isExpanded = expandedId === cat.id
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm"
                    style={{
                      border: isExpanded ? `2px solid ${cat.color}` : "2px solid transparent",
                      boxShadow: isExpanded ? `0 4px 20px ${cat.color}20` : "0 1px 4px rgba(0,0,0,0.06)",
                    }}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <p className="text-xl font-bold text-gray-900">{cat.title}</p>
                        <p className="text-base text-gray-400 mt-1">{cat.count} skills</p>
                      </div>
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 transition-transform duration-300"
                        style={{
                          backgroundColor: cat.color,
                          transform: isExpanded ? "scale(1.5)" : "scale(1)",
                          opacity: isExpanded ? 1 : 0.7,
                        }}
                      />
                    </button>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="px-8 pb-6"
                      >
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 rounded-full text-sm font-medium border"
                              style={{
                                backgroundColor: `${cat.color}12`,
                                color: cat.color,
                                borderColor: `${cat.color}35`,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Tools & Technologies — FULL WIDTH CARD BELOW like Smit's */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Tools &amp; Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
              {toolsProficiency.map((tool, index) => {
                const radius = 44
                const circumference = 2 * Math.PI * radius
                const strokeDashoffset = circumference - (tool.level / 100) * circumference
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="relative w-28 h-28">
                      <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="8" />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="none"
                          stroke={tool.color}
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
                          transition={{ duration: 1.4, delay: 0.5 + index * 0.08, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold" style={{ color: tool.color }}>
                          {tool.level}%
                        </span>
                      </div>
                    </div>
                    <p className="text-base font-semibold text-gray-700 text-center leading-tight">
                      {tool.name}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
