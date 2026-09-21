import type React from "react"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative text-[#00ff41]">{children}</span>
      <style>{`
        @keyframes glitch {
          0% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(0 0 65% 0);
            transform: translate(-2px, 2px);
          }
          40% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          60% {
            clip-path: inset(0 0 60% 0);
            transform: translate(2px, -2px);
          }
          80% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
        }

        .glitch-text {
          position: relative;
          animation: glitch 2s infinite;
        }
      `}</style>
    </div>
  )
}
