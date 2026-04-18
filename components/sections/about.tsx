"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, MapPin, Briefcase, Star } from "lucide-react"

const stats = [
  { value: "3.37/4.0", label: "GPA at GMU", color: "#0D9488" },
  { value: "2", label: "Internships", color: "#C2703E" },
  { value: "19", label: "Projects", color: "#0D9488" },
  { value: "2", label: "Degrees", color: "#C2703E" },
]

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "MS Computer Science — George Mason University",
      "B.Tech Computer Engineering — PDEU",
    ],
  },
  {
    icon: Briefcase,
    title: "Focus",
    items: ["Data Analytics", "Data Engineering", "Machine Learning & LLMs"],
  },
  {
    icon: Star,
    title: "Interests",
    items: ["Travel", "Soccer", "Explore New Places"],
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      className="py-20 md:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5" style={{ backgroundColor: "#0D9488" }} />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#0D9488" }}
            />
            <span
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: "#0D9488" }}
            >
              About Me
            </span>
          </div>

          {/* Large Heading */}
          <div className="mb-12">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: "#1a1a2e" }}
            >
              Passionate about building
            </h2>
            <div className="relative inline-block mt-2">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{ color: "#0D9488" }}
              >
                scalable data solutions
              </h2>
              {/* Curved underline */}
              <svg
                className="absolute -bottom-3 left-0 w-full h-4"
                viewBox="0 0 400 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q200 0 400 15"
                  stroke="#0D9488"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm text-center"
              >
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm md:text-base"
                  style={{ color: "#4a4a5a" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid: Body Text + Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Body Text - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 space-y-6"
            >
            <p
  className="text-base md:text-lg leading-relaxed text-justify"
  style={{ color: "#4a4a5a" }}
>
  I&apos;m a graduate student in{" "}
  <strong style={{ color: "#1a1a2e" }}>
    Computer Science at George Mason University
  </strong>{" "}
  (MS, May 2026), with a background in{" "}
  <strong style={{ color: "#1a1a2e" }}>Computer Engineering</strong>.
  I sit in the overlap between{" "}
  <strong style={{ color: "#1a1a2e" }}>Data Analytics</strong> and{" "}
  <strong style={{ color: "#1a1a2e" }}>Data Engineering.</strong> I design
  end-to-end ETL/ELT pipelines using Python, SQL, Airflow, dbt, Snowflake,
  BigQuery, and Spark, and I ship the{" "}
  <strong style={{ color: "#1a1a2e" }}>Tableau and Power BI dashboards</strong>{" "}
  that turn those pipelines into real business decisions. I&apos;ve processed{" "}
  <strong style={{ color: "#1a1a2e" }}>10M+ records</strong> across AWS and GCP
  environments and delivered analytics work that quantified over{" "}
  <strong style={{ color: "#1a1a2e" }}>$500K in business insights</strong>.
</p>
<p
  className="text-base md:text-lg leading-relaxed text-justify"
  style={{ color: "#4a4a5a" }}
>
  I&apos;m the person who finds the{" "}
  <strong style={{ color: "#1a1a2e" }}>0.0003% edge case </strong>that breaks
  the pipeline and the person who can explain why it matters to a
  stakeholder who doesn&apos;t care about pipelines. Outside of work,
  I&apos;m usually watching{" "}
  <strong style={{ color: "#1a1a2e" }}>Real Madrid</strong> play ,
  exploring DC-area hiking trails, or {" "}
    <strong style={{ color: "#1a1a2e" }}>enjoying some good food</strong>.
</p>
            </motion.div>

            {/* Info Cards - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-sm"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: "rgba(13, 148, 136, 0.1)" }}
                  >
                    <card.icon className="w-5 h-5" style={{ color: "#0D9488" }} />
                  </div>
                  <h3
                    className="font-semibold text-sm mb-2"
                    style={{ color: "#0D9488" }}
                  >
                    {card.title}
                  </h3>
                  <ul className="space-y-1">
                    {card.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs md:text-sm flex items-start gap-2"
                        style={{ color: "#4a4a5a" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#0D9488" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
