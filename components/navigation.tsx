"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Linkedin, Github } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInHero, setIsInHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsInHero(window.scrollY < heroBottom - 100)
      }
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const accentColor = "#0D9488"
  const textColor = isInHero ? "#1a1a2e" : "#F5F2EB"
  const mutedColor = isInHero ? "#4a4a5a" : "#a0a0a0"
  const bgColor = isScrolled
    ? isInHero ? "rgba(245,242,235,0.95)" : "rgba(10,10,15,0.95)"
    : "transparent"

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: bgColor,
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        borderBottom: isScrolled ? `1px solid ${isInHero ? "rgba(26,26,46,0.08)" : "rgba(245,242,235,0.08)"}` : "none",
      }}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo — more stylish PG like Smit's SP */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home") }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-0.5 cursor-pointer"
          >
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl font-black text-lg border-2 relative"
              style={{ borderColor: accentColor, color: accentColor, fontFamily: "serif" }}
            >
              {/* Dot accent like Smit's logo */}
              <span>P</span>
              <div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white"
                style={{ backgroundColor: accentColor }}
              />
            </div>
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl font-black text-lg"
              style={{ backgroundColor: "#1a1a2e", color: "#F5F2EB", fontFamily: "serif" }}
            >
              G
            </div>
          </motion.a>

          {/* Desktop Nav — centered, larger font */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className="relative text-base font-medium transition-colors"
                  style={{ color: activeSection === item.href.slice(1) ? accentColor : mutedColor }}
                  onMouseEnter={(e) => { if (activeSection !== item.href.slice(1)) e.currentTarget.style.color = accentColor }}
                  onMouseLeave={(e) => { if (activeSection !== item.href.slice(1)) e.currentTarget.style.color = mutedColor }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: accentColor }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons — right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/gandhiparshwa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 border-2 rounded-xl transition-all"
              style={{ borderColor: isInHero ? "rgba(26,26,46,0.25)" : "rgba(245,242,235,0.25)", color: mutedColor }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.color = accentColor }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = isInHero ? "rgba(26,26,46,0.25)" : "rgba(245,242,235,0.25)"; e.currentTarget.style.color = mutedColor }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Parshwa1504"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 border-2 rounded-xl transition-all"
              style={{ borderColor: isInHero ? "rgba(26,26,46,0.25)" : "rgba(245,242,235,0.25)", color: mutedColor }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.color = accentColor }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = isInHero ? "rgba(26,26,46,0.25)" : "rgba(245,242,235,0.25)"; e.currentTarget.style.color = mutedColor }}
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: textColor }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 rounded-2xl p-4"
            style={{ backgroundColor: isInHero ? "#F5F2EB" : "#0a0a0f" }}
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    className="block py-2 text-base font-medium"
                    style={{ color: activeSection === item.href.slice(1) ? accentColor : mutedColor }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-4 pt-4 border-t" style={{ borderColor: isInHero ? "rgba(26,26,46,0.1)" : "rgba(245,242,235,0.1)" }}>
              <a href="https://www.linkedin.com/in/gandhiparshwa" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 border-2 rounded-xl"
                style={{ borderColor: accentColor, color: accentColor }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Parshwa1504" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 border-2 rounded-xl"
                style={{ borderColor: accentColor, color: accentColor }}>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
