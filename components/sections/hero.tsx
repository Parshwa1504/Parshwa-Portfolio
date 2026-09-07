"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F5F2EB" }}
    >
      <div className="container mx-auto px-4 md:px-6 py-20 pt-32 relative z-10">
        {/* Two Column Layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* LEFT COLUMN - Text Content (55%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:w-[55%] text-center lg:text-left"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-sm border-2 rounded-full"
              style={{ borderColor: "#0D9488", color: "#0D9488" }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Hey there, welcome!</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight"
              style={{ color: "#1a1a2e" }}
            >
              I&apos;m Parshwa Gandhi. I Build Data Pipelines And Turn The Data Into Decisions.
            </motion.h1>

            {/* Decorative underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 w-32 mb-6 origin-left mx-auto lg:mx-0 rounded-full"
              style={{ backgroundColor: "#0D9488" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl mb-8 max-w-xl lg:max-w-none leading-relaxed"
              style={{ color: "#4a4a5a" }}
            >
              MS Computer Science candidate at George Mason University (May 2026). I build data pipelines with Python, SQL, Airflow, Snowflake, dbt and ship analytics dashboards in Tableau and Power BI that answer the business questions at the end of them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="text-white font-semibold px-8 py-6 text-base"
                style={{ backgroundColor: "#1a1a2e" }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent font-semibold px-8 py-6 text-base border-2"
                style={{ borderColor: "#1a1a2e", color: "#1a1a2e" }}
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/12pAqRpebwcYX0ldOxQnYshFTpdKdjA3Y/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Profile Photo (45%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-[45%] flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative sparkles - top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-8 -right-8 flex flex-col gap-2"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#0D9488"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-4">
                  <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#0D9488"/>
                </svg>
              </motion.div>

              {/* Decorative wavy lines - bottom right */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -right-10 hidden md:block"
              >
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                  <path d="M0 20C10 10 20 30 30 20C40 10 50 30 60 20C70 10 80 30 80 20" stroke="#0D9488" strokeWidth="2" fill="none"/>
                  <path d="M0 30C10 20 20 40 30 30C40 20 50 40 60 30C70 20 80 40 80 30" stroke="#0D9488" strokeWidth="2" fill="none"/>
                </svg>
              </motion.div>
              
              {/* Profile Photo Container - tall arch/rounded rectangle */}
              <div 
                className="relative w-64 h-80 md:w-80 md:h-[420px] overflow-hidden shadow-xl"
                style={{ 
                  borderRadius: "180px 180px 40px 40px",
                  border: "4px solid #0D9488"
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/Parshwa1504/Portfolio-Assets/main/Parshwa.jpg"
                  alt="Parshwa Gandhi"
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>

              {/* Rotating "Open to Opportunities" Badge */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 md:w-32 md:h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#F5F2EB" stroke="#0D9488" strokeWidth="2" />
                  <text className="text-[9px] font-bold uppercase tracking-[0.15em]" fill="#0D9488">
                    <textPath href="#circlePath" startOffset="0%">
                      OPEN TO OPPORTUNITIES 
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#0D9488" }}
                  >
                    <span className="text-white text-xl md:text-2xl">✦</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium" style={{ color: "#4a4a5a" }}>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5" style={{ color: "#0D9488" }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
