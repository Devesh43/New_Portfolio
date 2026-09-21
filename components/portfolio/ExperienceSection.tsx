import { Shield, Briefcase, Terminal } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software & Cybersecurity Intern",
      company: "Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs, Govt. of India",
      vertical: "JCCT Vertical",
      period: "July 2026 – September 2026",
      type: "Government Internship",
      icon: Terminal,
      description: [
        "Built an NCRP analytics dashboard for analysing cybercrime-related intelligence, reporting patterns, and suspect-number information.",
        "Developed SiteMind, a website intelligence/RAG system capable of crawling and indexing large websites for source-grounded conversational retrieval.",
        "Built a multi-document RAG system for querying and contextual reasoning across multiple uploaded documents.",
        "Developed an orchestration layer connecting multiple analytical tools through a unified interface.",
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "FastAPI", "Node.js", "Playwright", "Trafilatura", "Qdrant", "Chroma", "Gemini"],
    },
    {
      title: "Cyber Forensics Intern",
      company: "IFSO / NCFL — Special Cell, Delhi Police",
      vertical: "Cyber Crime Unit",
      period: "June 2025 – August 2025",
      type: "Government Internship",
      icon: Shield,
      description: [
        "Built digital-forensics tooling for analysing WhatsApp, Signal, and Instagram artifacts.",
        "Worked with Android forensic datasets and application databases to parse and structure digital evidence.",
        "Developed extraction/processing workflows and searchable per-chat forensic viewers with media analysis and export functionality.",
        "Utilized cryptographic and data-integrity techniques (SHA-256 integrity, AES decryption) on datasets extracted via professional mobile forensic tooling.",
        "This foundational forensic engineering work later evolved into the EvidenX toolkit.",
      ],
      technologies: ["Python", "Flask", "PyWebView", "SQLite", "Android Forensics", "Cryptography", "AES-GCM", "SHA-256"],
    },
    {
      title: "Software Engineering Virtual Intern",
      company: "JPMorgan Chase",
      vertical: "Forage Virtual Experience Program",
      period: "April 2024",
      type: "Virtual Experience / Forage Program",
      icon: Briefcase,
      description: [
        "Debugged and optimized front-end codebase, configuring a local Node.js environment for seamless dashboard rendering.",
        "Integrated JPMorgan's open-source Perspective library to visualize live trading data with custom logic.",
        "Delivered a real-time monitoring interface simulating trader-focused graph-based analytics.",
      ],
      technologies: ["Python", "React", "Perspective", "Node.js", "Financial Tech"],
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">{">"} WORK_EXPERIENCE.log</h2>
          <div className="h-1 w-24 bg-[#00ff41] shadow-[0_0_10px_#00ff41]" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="cyber-card p-6 md:p-8 rounded-lg group hover:border-[#00ff41]/60 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 border border-[#00ff41]/30 rounded-lg group-hover:border-[#00ff41] group-hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all bg-[#0a0e27]">
                    <exp.icon className="w-6 h-6 text-[#00ff41]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#00ff41] mb-1 font-mono">{exp.title}</h3>
                    <p className="text-[#00ff41]/90 font-semibold font-mono text-sm md:text-base">{exp.company}</p>
                    {exp.vertical && (
                      <p className="text-[#00ff41]/60 text-xs font-mono mt-0.5">{exp.vertical}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="text-xs text-[#00ff41]/70 font-mono px-3 py-1.5 border border-[#00ff41]/30 rounded-md bg-[#00ff41]/5">
                    {exp.period}
                  </span>
                  <span className="text-[11px] text-[#00ff41]/50 font-mono italic">
                    [{exp.type}]
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 font-mono text-sm">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#00ff41]/80">
                    <span className="text-[#00ff41] mt-0.5 flex-shrink-0">{">"}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#00ff41]/20">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 border border-[#00ff41]/20 rounded text-[#00ff41]/70 bg-[#0a0e27]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
