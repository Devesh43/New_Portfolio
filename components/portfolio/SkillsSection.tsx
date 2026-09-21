import { Code, Database, Shield, Server, Cpu, BookOpen } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Web / Backend",
      icon: Server,
      skills: ["React", "FastAPI", "Node.js", "Flask"],
    },
    {
      title: "AI / Data",
      icon: Cpu,
      skills: ["TensorFlow", "Pandas", "NumPy", "Gemini", "RAG", "Embeddings", "Vector Databases"],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        "Digital Forensics",
        "Android Forensics",
        "Cybercrime Intelligence",
        "Networking & Security Fundamentals",
        "SOC / Detection Engineering",
        "Cloud Security",
      ],
    },
    {
      title: "Tools / Infrastructure",
      icon: Database,
      skills: ["Linux", "Git / GitHub", "Docker", "Playwright", "Qdrant", "Chroma"],
    },
  ]

  const currentlyLearning = [
    {
      area: "Cybersecurity",
      topics: ["Networking & Security Fundamentals", "SOC / Detection Engineering", "Cloud Security", "Hands-on Security Labs"],
    },
    {
      area: "Software Engineering",
      topics: ["Java", "Data Structures & Algorithms"],
    },
    {
      area: "Applied AI",
      topics: ["RAG Systems", "LLM Applications", "Intelligent Automation"],
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">{">"} SKILLS.json</h2>
          <div className="h-1 w-24 bg-[#00ff41] shadow-[0_0_10px_#00ff41]" />
        </div>

        {/* Primary Skill Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="cyber-card p-6 rounded-lg group hover:border-[#00ff41]/50 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 border border-[#00ff41]/30 rounded-lg group-hover:border-[#00ff41] group-hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all bg-[#0a0e27]">
                  <category.icon className="w-5 h-5 text-[#00ff41]" />
                </div>
                <h3 className="text-lg font-bold text-[#00ff41] font-mono">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-mono border border-[#00ff41]/20 rounded-md text-[#00ff41]/80 hover:border-[#00ff41] hover:text-[#00ff41] hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all cursor-default bg-[#0a0e27]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="cyber-card p-6 md:p-8 rounded-lg border-2 border-[#00ff41]/30">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[#00ff41]" />
            <div>
              <h3 className="text-xl font-bold text-[#00ff41] font-mono">{">"} CURRENTLY_LEARNING.log</h3>
              <p className="text-xs text-[#00ff41]/60 font-mono">Active focus areas & skill deepening</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentlyLearning.map((item, idx) => (
              <div key={idx} className="p-4 border border-[#00ff41]/20 rounded-lg bg-[#0a0e27]/60">
                <h4 className="text-sm font-bold text-[#00ff41] mb-3 font-mono flex items-center gap-2">
                  <span className="text-[#00ff41]">{">"}</span> {item.area}
                </h4>
                <ul className="space-y-1.5 font-mono text-xs text-[#00ff41]/70">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Summary Footer */}
        <div className="mt-8 text-center font-mono text-xs text-[#00ff41]/60">
          {">"} Focus: Security Automation • Applied RAG • Forensic Tooling • Data Integrity
        </div>
      </div>
    </section>
  )
}
