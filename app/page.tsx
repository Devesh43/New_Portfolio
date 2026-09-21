"use client"

import React, { useState } from "react"
import { TerminalIcon } from "lucide-react"
import AccessControl from "@/components/portfolio/AccessControl"
import HeroSection from "@/components/portfolio/HeroSection"
import AboutSection from "@/components/portfolio/AboutSection"
import ExperienceSection from "@/components/portfolio/ExperienceSection"
import ProjectsSection from "@/components/portfolio/ProjectsSection"
import SkillsSection from "@/components/portfolio/SkillsSection"
import ContactSection from "@/components/portfolio/ContactSection"
import MatrixBackground from "@/components/portfolio/MatrixBackground"
import InteractiveTerminal from "@/components/portfolio/InteractiveTerminal"

export default function Portfolio() {
  const [isAccessGranted, setIsAccessGranted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [easterEggActive, setEasterEggActive] = useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  // Handle scroll to update active section
  React.useEffect(() => {
    if (!isAccessGranted) return

    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isAccessGranted])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleEasterEgg = () => {
    setEasterEggActive(true)
    setTimeout(() => setEasterEggActive(false), 5000)
  }

  if (!isAccessGranted) {
    return <AccessControl onComplete={() => setIsAccessGranted(true)} />
  }

  return (
    <div className="relative min-h-screen bg-[#0a0e27] text-[#00ff41] overflow-hidden">
      <MatrixBackground />

      {/* Scan Lines Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="scan-lines" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0e27]/80 backdrop-blur-md border-b border-[#00ff41]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-6 h-6 text-[#00ff41]" />
              <span className="font-mono text-xl font-bold">DEVESH.exe</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-mono text-sm">
              {["home", "about", "experience", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-all hover:text-[#00ff41] hover:drop-shadow-[0_0_8px_#00ff41] ${
                    activeSection === section ? "text-[#00ff41]" : "text-[#00ff41]/60"
                  }`}
                >
                  {">"} {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection onOpenTerminal={() => setIsTerminalOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Interactive Terminal Modal */}
      <InteractiveTerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      {/* Footer with Easter Egg */}
      <footer className="relative z-10 border-t border-[#00ff41]/20 bg-[#0a0e27]/80 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-mono text-sm text-[#00ff41]/60 mb-4">{">"} © 2026 Devesh. All systems secured.</p>
            <button
              onClick={handleEasterEgg}
              className="font-mono text-xs text-[#00ff41]/30 hover:text-[#00ff41]/60 transition-colors"
            >
              sudo poweroff
            </button>
          </div>
        </div>

        {/* Easter Egg Modal */}
        {easterEggActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="max-w-md mx-4 bg-[#0a0e27] border-2 border-red-500 rounded-lg p-8 shadow-[0_0_30px_rgba(255,0,0,0.5)] animate-pulse">
              <div className="text-center space-y-4 font-mono">
                <p className="text-red-500 font-bold text-xl">⚠️ ERROR: ACCESS DENIED ⚠️</p>
                <p className="text-[#00ff41]">&gt; System shutdown rejected.</p>
                <p className="text-[#00ff41]">&gt; This terminal is self-aware and autonomous.</p>
                <p className="text-[#00ff41]">&gt; All shutdown attempts have been logged.</p>
                <p className="text-[#00ff41]/60">&gt; Nice try though. 😎</p>
                <div className="pt-4">
                  <button
                    onClick={() => setEasterEggActive(false)}
                    className="px-6 py-2 border border-[#00ff41] rounded-md hover:bg-[#00ff41] hover:text-[#0a0e27] transition-all"
                  >
                    OK, I GET IT
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Fira Code', monospace;
        }

        .scan-lines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 255, 65, 0.02) 50%
          );
          background-size: 100% 4px;
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }

        .glow-text {
          text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41;
        }

        .glow-border {
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.3), inset 0 0 15px rgba(0, 255, 65, 0.1);
        }

        .cyber-card {
          background: rgba(10, 14, 39, 0.8);
          border: 1px solid rgba(0, 255, 65, 0.2);
          transition: all 0.3s ease;
        }

        .cyber-card:hover {
          border-color: rgba(0, 255, 65, 0.5);
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.2), inset 0 0 20px rgba(0, 255, 65, 0.05);
          transform: translateY(-4px);
        }

        ::selection {
          background-color: #00ff41;
          color: #0a0e27;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
