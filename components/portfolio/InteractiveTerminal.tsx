"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"

interface TerminalLine {
  content: string
  isCommand?: boolean
}

interface InteractiveTerminalProps {
  isOpen: boolean
  onClose: () => void
}

const INITIAL_LINES: TerminalLine[] = [
  { content: "> Welcome to Devesh's Cyber Terminal v2.6", isCommand: false },
  { content: "> All systems operational | Security level: SECURE", isCommand: false },
  { content: "Type 'help' to view available commands.", isCommand: false },
]

export default function InteractiveTerminal({ isOpen, onClose }: InteractiveTerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES)
  const [inputValue, setInputValue] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  const scrollToSection = (sectionId: string) => {
    onClose()
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase()

    if (trimmedCommand) {
      setCommandHistory((prev) => [...prev, trimmedCommand])
      setHistoryIndex(-1)
    }

    setLines((prev) => [...prev, { content: `> ${command}`, isCommand: true }])

    if (!trimmedCommand) {
      setInputValue("")
      return
    }

    switch (trimmedCommand) {
      case "help":
        setLines((prev) => [
          ...prev,
          { content: "Available Commands:", isCommand: false },
          { content: "  whoami      - Display user credentials & profile summary", isCommand: false },
          { content: "  experience  - View work experience (I4C, Special Cell, JPMorgan)", isCommand: false },
          { content: "  projects    - List active projects (SiteMind, EvidenX, etc.)", isCommand: false },
          { content: "  skills      - Display tech stack & skill categories", isCommand: false },
          { content: "  about       - Scroll to About section", isCommand: false },
          { content: "  contact     - Display contact channels", isCommand: false },
          { content: "  clear       - Clear terminal screen", isCommand: false },
          { content: "  sudo poweroff - Attempt system shutdown", isCommand: false },
        ])
        break

      case "whoami":
        setLines((prev) => [
          ...prev,
          { content: "USER: Devesh", isCommand: false },
          { content: "EDUCATION: B.Tech ECE, Maharaja Surajmal Institute of Technology (MSIT), New Delhi (CGPA: 8.46)", isCommand: false },
          { content: "ROLES: Software & Cybersecurity Intern @ I4C (MHA) | Cyber Forensics Intern @ Special Cell, Delhi Police", isCommand: false },
          { content: "FOCUS: Cybersecurity, Digital Forensics, Applied AI, RAG Systems, Software Engineering", isCommand: false },
        ])
        break

      case "about":
        scrollToSection("about")
        setLines((prev) => [...prev, { content: "Navigating to About section...", isCommand: false }])
        break

      case "experience":
        scrollToSection("experience")
        setLines((prev) => [
          ...prev,
          { content: "1. I4C - Ministry of Home Affairs (Software & Cybersecurity Intern)", isCommand: false },
          { content: "2. IFSO / NCFL - Special Cell, Delhi Police (Cyber Forensics Intern)", isCommand: false },
          { content: "3. JPMorgan Chase (Software Engineering Virtual Intern)", isCommand: false },
          { content: "Navigating to Experience section...", isCommand: false },
        ])
        break

      case "projects":
        scrollToSection("projects")
        setLines((prev) => [
          ...prev,
          { content: "Featured Systems & Tooling:", isCommand: false },
          { content: "  - SiteMind (Website Intelligence through RAG)", isCommand: false },
          { content: "  - EvidenX (Android Messaging Forensics Toolkit)", isCommand: false },
          { content: "  - Multi-Document RAG (Contextual Document Intelligence)", isCommand: false },
          { content: "  - Galaxy Morphology Classifier (Deep Learning Transfer Learning)", isCommand: false },
          { content: "  - India Investment Grid Scraper (Infrastructure Pipeline)", isCommand: false },
          { content: "  - RepuLens (AI Brand Sentiment Analysis)", isCommand: false },
          { content: "Navigating to Projects section...", isCommand: false },
        ])
        break

      case "skills":
        scrollToSection("skills")
        setLines((prev) => [
          ...prev,
          { content: "Skill Matrix:", isCommand: false },
          { content: "  Languages: Python, Java, JavaScript, SQL", isCommand: false },
          { content: "  Web/Backend: React, FastAPI, Node.js, Flask", isCommand: false },
          { content: "  AI/Data: RAG, Embeddings, Vector DBs, Gemini, TensorFlow", isCommand: false },
          { content: "  Cybersecurity: Forensics, Cybercrime Intel, SOC, Cloud Security", isCommand: false },
          { content: "  Tools: Linux, Docker, Git, Playwright, Qdrant, Chroma", isCommand: false },
          { content: "Navigating to Skills section...", isCommand: false },
        ])
        break

      case "contact":
        scrollToSection("contact")
        setLines((prev) => [
          ...prev,
          { content: "Email: rakeshdevesh43@gmail.com", isCommand: false },
          { content: "GitHub: https://github.com/Devesh43", isCommand: false },
          { content: "LinkedIn: https://linkedin.com/in/devesh2005", isCommand: false },
          { content: "Navigating to Contact section...", isCommand: false },
        ])
        break

      case "clear":
        setLines(INITIAL_LINES)
        break

      case "sudo poweroff":
        setLines((prev) => [
          ...prev,
          { content: "Permission denied. System is self-aware and autonomous.", isCommand: false },
          { content: "All shutdown attempts have been logged.", isCommand: false },
          { content: "Nice try though. 😎", isCommand: false },
        ])
        break

      default:
        setLines((prev) => [
          ...prev,
          { content: `Command not found: ${trimmedCommand}. Type 'help' for available commands.`, isCommand: false },
        ])
    }

    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInputValue("")
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl h-[80vh] cyber-card rounded-lg overflow-hidden border-2 border-[#00ff41] shadow-[0_0_40px_rgba(0,255,65,0.3)] flex flex-col">
        {/* Terminal Header */}
        <div className="bg-[#0a0e27] border-b border-[#00ff41]/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-[#00ff41] font-mono ml-2">devesh@cyber-terminal:~$</span>
          </div>
          <button onClick={onClose} className="text-[#00ff41] hover:text-[#00ff41]/70 transition-colors p-1" aria-label="Close terminal">
            <X size={20} />
          </button>
        </div>

        {/* Terminal Content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 bg-[#0a0e27]/90 font-mono text-xs md:text-sm">
          <div className="space-y-1.5">
            {lines.map((line, idx) => (
              <div key={idx} className="text-[#00ff41] flex gap-2">
                {line.isCommand ? (
                  <>
                    <span className="text-[#00ff41]/60">{">"}</span>
                    <span className="font-bold">{line.content}</span>
                  </>
                ) : (
                  <span className="text-[#00ff41]/80">{line.content}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Input */}
        <div className="bg-[#0a0e27] border-t border-[#00ff41]/30 px-4 py-3 flex items-center gap-2">
          <span className="text-[#00ff41] font-mono">{">"}</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' for commands..."
            autoFocus
            className="flex-1 bg-transparent font-mono text-[#00ff41] text-xs md:text-sm outline-none placeholder-[#00ff41]/30"
          />
          <span className="text-[#00ff41] animate-pulse font-mono">▋</span>
        </div>
      </div>
    </div>
  )
}
