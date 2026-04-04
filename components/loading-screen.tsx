"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

// Fixed particle data to avoid Math.random() hydration mismatch
const PARTICLES = [
  { width: 3.1, height: 3.6, left: "71%", top: "22%", opacity: 0.33, duration: 3.2, delay: 0.5 },
  { width: 2.9, height: 1.5, left: "33%", top: "23%", opacity: 0.33, duration: 2.8, delay: 1.1 },
  { width: 1.6, height: 3.3, left: "7%", top: "41%", opacity: 0.19, duration: 3.6, delay: 0.2 },
  { width: 1.2, height: 2.7, left: "18%", top: "88%", opacity: 0.16, duration: 4.1, delay: 1.8 },
  { width: 2.4, height: 2.5, left: "34%", top: "49%", opacity: 0.30, duration: 2.5, delay: 0.8 },
  { width: 1.5, height: 3.4, left: "94%", top: "65%", opacity: 0.42, duration: 3.9, delay: 0.3 },
  { width: 1.8, height: 2.9, left: "6%", top: "42%", opacity: 0.25, duration: 2.2, delay: 1.5 },
  { width: 1.9, height: 2.9, left: "51%", top: "49%", opacity: 0.16, duration: 3.4, delay: 0.7 },
  { width: 3.6, height: 1.8, left: "67%", top: "64%", opacity: 0.10, duration: 2.9, delay: 1.3 },
  { width: 2.7, height: 1.2, left: "9%", top: "89%", opacity: 0.11, duration: 4.2, delay: 0.4 },
  { width: 2.1, height: 2.7, left: "29%", top: "74%", opacity: 0.42, duration: 3.1, delay: 1.9 },
  { width: 2.3, height: 2.4, left: "74%", top: "44%", opacity: 0.26, duration: 2.6, delay: 0.9 },
]

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showEnter, setShowEnter] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setShowEnter(true), 300)
          return 100
        }
        const increment = prev < 30 ? 3 : prev < 70 ? 1.2 : prev < 90 ? 0.8 : 2
        return Math.min(prev + increment, 100)
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  const handleEnter = () => {
    setIsExiting(true)
    setTimeout(() => onComplete(), 800)
  }

  const Corner = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
    const isTop = position.startsWith("t")
    const isLeft = position.endsWith("l")
    return (
      <div
        className="absolute w-10 h-10"
        style={{
          top: isTop ? 24 : "auto",
          bottom: !isTop ? 24 : "auto",
          left: isLeft ? 24 : "auto",
          right: !isLeft ? 24 : "auto",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d={
              position === "tl" ? "M40 2 H2 V40" :
              position === "tr" ? "M0 2 H38 V40" :
              position === "bl" ? "M40 38 H2 V0" :
              "M0 38 H38 V0"
            }
            stroke="#0D9488"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>
    )
  }

  if (isExiting) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* Corner brackets */}
      <Corner position="tl" />
      <Corner position="tr" />
      <Corner position="bl" />
      <Corner position="br" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, #0D9488, transparent)" }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(13,148,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-8">

        {/* Portfolio label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 0.5, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-xs font-semibold uppercase mb-6"
          style={{ color: "#0D9488", letterSpacing: "0.5em" }}
        >
          Portfolio
        </motion.p>

        {/* Name */}
        <div className="flex flex-wrap items-baseline justify-center gap-3 md:gap-5 mb-2 overflow-hidden">
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(40px, 10vw, 96px)", color: "#ffffff", fontFamily: "system-ui, sans-serif" }}
          >
            PARSHWA
          </motion.span>
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(40px, 10vw, 96px)", color: "#0D9488", fontFamily: "system-ui, sans-serif" }}
          >
            GANDHI
          </motion.span>
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-md"
        >
          <div
            className="w-full h-px mb-3 relative overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="absolute left-0 top-0 h-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #0D9488, #14b8a6)",
                boxShadow: "0 0 10px #0D9488",
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
              Loading
            </span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-3xl font-black tabular-nums" style={{ color: "#ffffff" }}>
                {Math.floor(progress)}
              </span>
              <span className="text-lg font-bold" style={{ color: "#0D9488" }}>%</span>
            </div>
          </div>
        </motion.div>

        {/* ENTER button */}
        <AnimatePresence>
          {showEnter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10"
            >
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-14 py-4 font-bold text-lg tracking-widest uppercase overflow-hidden group"
                style={{
                  color: "#0D9488",
                  border: "1px solid #0D9488",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  letterSpacing: "0.25em",
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(13,148,136,0.1)" }}
                />
                <span className="relative flex items-center gap-3">
                  ENTER
                  <span className="text-base" style={{ color: "#0D9488" }}>&gt;&gt;&gt;</span>
                </span>
              </motion.button>
              <p className="text-center mt-4 text-xs tracking-wider" style={{ color: "rgba(255,255,255,0.2)" }}>
                ✦ Best experienced on desktop ✦
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fixed particles — only render on client to avoid hydration mismatch */}
      {mounted && PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            backgroundColor: "#0D9488",
            left: p.left,
            top: p.top,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -20, 0], opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  )
}
