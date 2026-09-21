import { GraduationCap, Shield, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">{">"} ABOUT_ME.txt</h2>
          <div className="h-1 w-24 bg-[#00ff41] shadow-[0_0_10px_#00ff41]" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile with Photo */}
          <div className="cyber-card p-6 md:p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#00ff41]" />
              <h3 className="text-xl font-bold font-mono">Profile</h3>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6914c50d90e16cc6b57886cd/5ef878de6_WhatsAppImage2025-11-12at113210PM1.jpg"
                  alt="Devesh"
                  className="w-32 h-32 rounded-full border-4 border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.3)] object-cover"
                />
                <div className="absolute inset-0 rounded-full border-4 border-[#00ff41] animate-pulse opacity-50 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-4 text-[#00ff41]/80 text-sm md:text-base leading-relaxed font-mono">
              <p>
                I'm a final-year Electronics & Communication Engineering student at MSIT, New Delhi, interested in building systems at the intersection of cybersecurity, applied AI, data and software engineering.
              </p>
              <p>
                My work has included cybercrime intelligence and analytical tooling at I4C, Ministry of Home Affairs, and digital-forensics tooling at IFSO/NCFL, Special Cell, Delhi Police.
              </p>
              <p>
                I enjoy building systems that deal with security, messy real-world data, automation and intelligent retrieval.
              </p>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6">
            <div className="cyber-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-[#00ff41]" />
                <h3 className="text-xl font-bold font-mono">Education</h3>
              </div>
              <div className="font-mono">
                <p className="font-semibold text-[#00ff41] text-lg">Maharaja Surajmal Institute of Technology (MSIT)</p>
                <p className="text-xs text-[#00ff41]/60 mb-2">New Delhi • Sep 2023 – Jun 2027 (Final Year)</p>
                <p className="text-[#00ff41]/80 text-sm">B.Tech in Electronics and Communication Engineering</p>
                <div className="mt-3 inline-block px-3 py-1 border border-[#00ff41]/40 rounded bg-[#00ff41]/10 text-[#00ff41] font-bold text-sm">
                  CGPA: 8.46 / 10
                </div>
              </div>
            </div>

            <div className="cyber-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#00ff41]" />
                <h3 className="text-xl font-bold font-mono">Key Achievements</h3>
              </div>
              <ul className="space-y-3 text-[#00ff41]/80 font-mono text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] mt-0.5">{">"}</span>
                  <span>Selected – Stanford Code in Place 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] mt-0.5">{">"}</span>
                  <span>Finalist – Execute 4.0 Hackathon, DTU</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] mt-0.5">{">"}</span>
                  <span>Featured – DD News CyberAlert appearance (2026) for cybersecurity & I4C work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] mt-0.5">{">"}</span>
                  <span>Participant – IASC Asteroid Search Campaign</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff41] mt-0.5">{">"}</span>
                  <span>Former Leader & Member – IEEE MSIT Editorial Committee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
