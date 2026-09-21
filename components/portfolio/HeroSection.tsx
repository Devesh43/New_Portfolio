"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Terminal } from "lucide-react"
import GlitchText from "./GlitchText"

interface HeroSectionProps {
  onOpenTerminal?: () => void
}

export default function HeroSection({ onOpenTerminal }: HeroSectionProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const lines = [
    "> Initializing Portfolio.exe",
    "> Loading cybersecurity & AI modules...",
    "> Establishing secure connection...",
    "> Access Granted...",
    "> Welcome to Devesh's Terminal",
  ]

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex]
      const timer = setTimeout(() => {
        if (displayedText.length < currentLine.length) {
          setDisplayedText(currentLine.slice(0, displayedText.length + 4))
        } else {
          setTimeout(() => {
            setCurrentLineIndex(currentLineIndex + 1)
            setDisplayedText("")
          }, 50)
        }
      }, 10)

      return () => clearTimeout(timer)
    } else if (!showContent) {
      setTimeout(() => setShowContent(true), 50)
    }
  }, [displayedText, currentLineIndex, showContent, lines])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 400)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Terminal Window */}
        <div className="cyber-card rounded-lg overflow-hidden border-2 border-[#00ff41]/30">
          {/* Terminal Header */}
          <div className="bg-[#0a0e27] border-b border-[#00ff41]/20 px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-xs text-[#00ff41]/60 ml-3 font-mono">root@devesh:~$</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-12 min-h-[380px]">
            <div className="space-y-1.5 mb-8">
              {lines.slice(0, currentLineIndex).map((line, index) => (
                <div key={index} className="font-mono text-xs md:text-sm text-[#00ff41]/80">
                  {line}
                </div>
              ))}
              {currentLineIndex < lines.length && (
                <div className="font-mono text-xs md:text-sm text-[#00ff41]">
                  {displayedText}
                  {showCursor && <span className="animate-pulse">▋</span>}
                </div>
              )}
            </div>

            {showContent && (
              <div className="animate-fade-in mt-8">
                <h1 className="text-4xl md:text-7xl font-bold mb-4">
                  <GlitchText className="glow-text">DEVESH</GlitchText>
                </h1>

                <p className="text-[#00ff41] font-mono text-lg md:text-xl font-semibold mb-6">
                  Cybersecurity • Applied AI • Software Engineering
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8 text-xs md:text-sm font-mono">
                  {["Cybersecurity", "Applied AI", "Digital Forensics", "Software Engineering", "SOC / Security", "RAG Systems"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1.5 border border-[#00ff41]/30 rounded-md hover:border-[#00ff41] hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all cursor-default text-[#00ff41]/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#00ff41]/80 text-sm md:text-base max-w-3xl mb-8 leading-relaxed font-mono">
                  Final-year Electronics & Communication Engineering student at MSIT, New Delhi | Cybersecurity & Software Intern @ I4C | Building secure systems, digital forensic tools, and intelligent retrieval pipelines.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="group flex items-center gap-2 px-6 py-3 border border-[#00ff41] rounded-md hover:bg-[#00ff41] hover:text-[#0a0e27] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
                  >
                    <span className="font-mono font-bold text-sm">EXPLORE PORTFOLIO</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenTerminal}
                    className="flex items-center gap-2 px-5 py-3 border border-[#00ff41]/40 rounded-md hover:border-[#00ff41] hover:bg-[#00ff41]/10 text-[#00ff41] transition-all font-mono text-sm"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>LAUNCH TERMINAL</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showContent && (
        <button
          onClick={onOpenTerminal}
          className="fixed bottom-8 right-8 z-30 w-12 h-12 rounded-full border-2 border-[#00ff41] flex items-center justify-center bg-[#0a0e27]/90 hover:bg-[#00ff41]/20 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all duration-300 group"
          title="Open interactive terminal"
          aria-label="Open interactive terminal"
        >
          <Terminal className="w-6 h-6 text-[#00ff41] group-hover:scale-110 transition-transform" />
        </button>
      )}
    </section>
  )
}
