"use client"

import { useState, useEffect } from "react"
import { X, Minimize2, Maximize2 } from "lucide-react"

export default function FloatingTerminal() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const [commands, setCommands] = useState<string[]>([
    "$ ./check_portfolio.sh",
    "> Scanning for cybersecurity expertise...",
    "> Found: 5 major projects",
    "> Status: All systems operational ✓",
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessages = [
        "> System status: GREEN",
        "> Encryption: ACTIVE",
        "> Firewalls: OPERATIONAL",
        "> Backup: SYNCHRONIZED",
      ]
      setCommands((prev) => {
        const newCommands = [...prev]
        if (newCommands.length > 6) newCommands.shift()
        return [...newCommands, randomMessages[Math.floor(Math.random() * randomMessages.length)]]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-30 max-w-sm">
      {/* Terminal Window */}
      <div className="cyber-card rounded-lg overflow-hidden border-2 border-[#00ff41]/40 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
        {/* Header */}
        <div className="bg-[#0a0e27] border-b border-[#00ff41]/20 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-xs text-[#00ff41]/60 ml-2 font-mono">system@monitor</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-[#00ff41]/60 hover:text-[#00ff41] transition-colors"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-[#00ff41]/60 hover:text-[#00ff41] transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="p-4 bg-[#0a0e27]/50 max-h-64 overflow-y-auto font-mono text-xs">
            <div className="space-y-1">
              {commands.map((cmd, idx) => (
                <div key={idx} className="text-[#00ff41]/70 flex gap-2">
                  {cmd.startsWith("$") ? (
                    <>
                      <span className="text-[#00ff41]">{">"}</span>
                      <span>{cmd}</span>
                    </>
                  ) : (
                    <span>{cmd}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
