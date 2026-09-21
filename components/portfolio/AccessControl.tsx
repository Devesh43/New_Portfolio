"use client"

import { useState, useEffect, useCallback } from "react"
import { FastForward } from "lucide-react"

export default function AccessControl({ onComplete }: { onComplete: () => void }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  const authLines = [
    "> Accessing mainframe...",
    "> Scanning security protocols...",
    "> Verifying credentials...",
    "> Authentication successful...",
    "> Negotiating access with Devesh's AI counterpart…",
    "> System online...",
  ]

  const handleSkip = useCallback(() => {
    if (!isDone) {
      setIsDone(true)
      setProgress(100)
      onComplete()
    }
  }, [isDone, onComplete])

  // Reduced motion & Safety timeout (3.5 seconds)
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      handleSkip()
      return
    }

    const safetyTimer = setTimeout(() => {
      handleSkip()
    }, 3500)

    return () => clearTimeout(safetyTimer)
  }, [handleSkip])

  // Keydown listener for Enter / Escape / Space to skip intro
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape" || e.key === " ") {
        e.preventDefault()
        handleSkip()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleSkip])

  // Typing effect - Fast & responsive (total ~2 to 2.5s)
  useEffect(() => {
    if (isDone) return

    if (currentLineIndex < authLines.length) {
      const currentLine = authLines[currentLineIndex]
      const timer = setTimeout(() => {
        if (displayedText.length < currentLine.length) {
          setDisplayedText(currentLine.slice(0, displayedText.length + 2))
        } else {
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1)
            setDisplayedText("")
          }, 120)
        }
      }, 15)

      return () => clearTimeout(timer)
    } else {
      setProgress(100)
      const finishTimer = setTimeout(() => {
        handleSkip()
      }, 300)
      return () => clearTimeout(finishTimer)
    }
  }, [displayedText, currentLineIndex, isDone, handleSkip, authLines])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 400)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (isDone) return
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 25 + 10
        return next >= 100 ? 100 : next
      })
    }, 200)
    return () => clearInterval(progressInterval)
  }, [isDone])

  return (
    <div className="fixed inset-0 bg-[#0a0e27] flex items-center justify-center z-50 overflow-hidden">
      {/* Background Matrix Grid */}
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

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        {/* Security Shield Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 border-2 border-[#00ff41] rounded-lg flex items-center justify-center animate-pulse">
              <div className="text-3xl">🔐</div>
            </div>
            <div className="absolute -inset-1 border border-[#00ff41]/30 rounded-lg" />
          </div>
        </div>

        {/* Terminal Window */}
        <div className="cyber-card rounded-lg overflow-hidden border-2 border-[#00ff41]/40 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          {/* Terminal Header */}
          <div className="bg-[#0a0e27] border-b border-[#00ff41]/20 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-[#00ff41]/60 ml-3 font-mono">security@auth:~$</span>
            </div>

            {/* Subtle Skip Intro Button */}
            <button
              onClick={handleSkip}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-[#00ff41]/40 rounded hover:border-[#00ff41] hover:bg-[#00ff41]/10 text-[#00ff41]/80 hover:text-[#00ff41] transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#00ff41]"
              title="Skip intro (Press Enter or Esc)"
              aria-label="Skip introduction animation"
            >
              <span>[ SKIP INTRO ]</span>
              <FastForward size={12} />
            </button>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 min-h-[260px] bg-[#0a0e27]/80 flex flex-col justify-between">
            <div className="space-y-2">
              {authLines.slice(0, currentLineIndex).map((line, index) => (
                <div key={index} className="font-mono text-xs md:text-sm text-[#00ff41]/80">
                  {line}
                </div>
              ))}
              {currentLineIndex < authLines.length && (
                <div className="font-mono text-xs md:text-sm text-[#00ff41]">
                  {displayedText}
                  {showCursor && <span className="animate-pulse">▋</span>}
                </div>
              )}
            </div>

            {/* Progress Bar & Footer */}
            <div className="mt-6 space-y-2">
              <div className="w-full bg-[#00ff41]/10 rounded-full h-2 overflow-hidden border border-[#00ff41]/20">
                <div
                  className="h-full bg-[#00ff41] shadow-[0_0_10px_#00ff41] transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-[#00ff41]/60">
                <span>CLASSIFIED SYSTEM - SECURE ACCESS</span>
                <span className="text-[#00ff41] font-bold">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
