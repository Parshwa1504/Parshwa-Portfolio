"use client"

import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t" style={{ backgroundColor: "#F5F2EB", borderColor: "rgba(26,26,46,0.08)" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left — credit text like Smit's */}
          <p className="text-gray-500 text-base">
            Designed &amp; Built by{" "}
            <span className="font-bold text-gray-900" style={{ color: "#0D9488" }}>
              Parshwa Gandhi
            </span>{" "}
            | 2026
          </p>

          {/* Right — social icons like Smit's */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Parshwa1504"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border-2 rounded-lg transition-all hover:border-teal-600 hover:text-teal-600"
              style={{ borderColor: "rgba(26,26,46,0.2)", color: "#4a4a5a" }}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gandhiparshwa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border-2 rounded-lg transition-all hover:border-teal-600 hover:text-teal-600"
              style={{ borderColor: "rgba(26,26,46,0.2)", color: "#4a4a5a" }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:pgandhi6@gmu.edu"
              className="flex items-center justify-center w-10 h-10 border-2 rounded-lg transition-all hover:border-teal-600 hover:text-teal-600"
              style={{ borderColor: "rgba(26,26,46,0.2)", color: "#4a4a5a" }}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
