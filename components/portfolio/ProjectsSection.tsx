import { Github, Shield, Globe, FileText, Cpu, Database, TrendingUp, Lock } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "SiteMind",
      subtitle: "Website Intelligence through RAG",
      icon: Globe,
      tags: ["React", "FastAPI", "Playwright", "Trafilatura", "Qdrant", "Chroma", "Gemini"],
      description:
        "A website crawling and retrieval system that converts large websites into searchable knowledge bases for source-grounded conversational retrieval.",
      highlights: [
        "Deep website crawling & HTML parsing via Trafilatura & Playwright",
        "Vector indexing in Qdrant/Chroma with semantic search",
        "Source-grounded conversational Q&A powered by Gemini API",
      ],
      github: "https://github.com/Devesh43/Intel_Hub",
      statusLabel: null,
    },
    {
      title: "EvidenX",
      subtitle: "Android Messaging Forensics Toolkit",
      icon: Shield,
      tags: ["Python", "Flask", "PyWebView", "SQLite", "Android Forensics", "Cryptography"],
      description:
        "Digital-forensics tooling for extracting, processing and visualising artifacts from WhatsApp, Signal and Instagram datasets.",
      highlights: [
        "Cross-platform desktop suite with PyWebView & Flask",
        "Secure decryption (AES-GCM) & SHA-256 data integrity hashing",
        "SQLite database parsing & per-chat timeline visualization",
      ],
      github: "https://github.com/Devesh43/EvidenX-GUI-",
      statusLabel: null,
    },
    {
      title: "Multi-Document RAG",
      subtitle: "Contextual Document Intelligence",
      icon: FileText,
      tags: ["Node.js", "React", "RAG", "Embeddings", "Vector Databases", "LLMs"],
      description:
        "A document intelligence system allowing users to upload multiple documents and query them using retrieval-augmented generation and contextual reasoning.",
      highlights: [
        "Multi-document parsing and semantic text chunking",
        "Dense vector embedding storage & hybrid retrieval",
        "Context-aware synthesis across heterogeneous document sources",
      ],
      github: "https://github.com/Devesh43/Intel_Hub",
      statusLabel: null,
    },
    {
      title: "Galaxy Morphology Classifier",
      subtitle: "Deep Learning Transfer Learning System",
      icon: Cpu,
      tags: ["Python", "TensorFlow", "Computer Vision", "MobileNetV2", "Flask"],
      description:
        "Deep-learning based galaxy image classification system using transfer learning to classify astronomical image datasets.",
      highlights: [
        "Transfer learning architecture with MobileNetV2 & EfficientNetB0",
        "Achieved ~82% validation accuracy on morphological test sets",
        "Interactive Flask web interface for real-time model inference",
      ],
      github: "https://github.com/Devesh43/Galaxy-Zoo-morphology-classifier",
      statusLabel: null,
    },
    {
      title: "India Investment Grid Scraper",
      subtitle: "Infrastructure Data Pipeline",
      icon: Database,
      tags: ["Python", "Playwright", "BeautifulSoup", "Pandas", "Automation"],
      description:
        "Automated extraction pipeline for scraping and structuring infrastructure project records from complex dynamic web portals.",
      highlights: [
        "Headless browser automation for dynamic DOM rendering",
        "Extracted and cleaned 2,000+ structured project records",
        "Automated data verification and CSV/JSON export workflow",
      ],
      github: null,
      statusLabel: "Data Pipeline",
    },
    {
      title: "RepuLens",
      subtitle: "AI-Driven Brand Sentiment Platform",
      icon: TrendingUp,
      tags: ["Next.js", "Prisma", "NeonDB", "Gemini API", "ClerkAuth"],
      description:
        "Scalable sentiment analysis platform that fetches, stores, and tracks brand-related content in real-time using transformer classification.",
      highlights: [
        "Real-time brand sentiment tracking and Reddit data fetching",
        "Transformer-based sentiment classification & analytics",
        "Interactive dashboard with custom filtering and alerts",
      ],
      github: "https://github.com/Athaxv/RepuLens",
      statusLabel: null,
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">{">"} PROJECTS.dir</h2>
          <div className="h-1 w-24 bg-[#00ff41] shadow-[0_0_10px_#00ff41]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cyber-card p-6 rounded-lg group hover:scale-[1.02] transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Decryption Overlay on Hover */}
                <div className="absolute inset-0 bg-[#00ff41]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none">
                  <div className="absolute top-2 left-2 text-[10px] text-[#00ff41] font-mono animate-pulse">
                    &gt; Reading Project Metadata...
                  </div>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 border border-[#00ff41]/30 rounded-lg group-hover:border-[#00ff41] group-hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all bg-[#0a0e27]">
                    <project.icon className="w-6 h-6 text-[#00ff41]" />
                  </div>
                  {project.statusLabel && (
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-[#00ff41]/30 rounded text-[#00ff41]/60 bg-[#00ff41]/5">
                      {project.statusLabel}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#00ff41] mb-1 font-mono">{project.title}</h3>
                <p className="text-xs text-[#00ff41]/60 mb-3 font-mono">{project.subtitle}</p>

                <p className="text-[#00ff41]/80 text-sm leading-relaxed mb-4 font-mono">{project.description}</p>

                <div className="mb-4 font-mono">
                  <p className="text-xs text-[#00ff41]/60 mb-2 font-semibold">Key Architecture & Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#00ff41]/70">
                        <span className="text-[#00ff41] mt-0.5 flex-shrink-0">{">"}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 border border-[#00ff41]/20 rounded text-[#00ff41]/70 bg-[#0a0e27]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Button / Status */}
              <div className="pt-4 border-t border-[#00ff41]/20">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-[#00ff41]/40 rounded-md hover:border-[#00ff41] hover:bg-[#00ff41]/10 hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all group/btn font-mono text-sm text-[#00ff41]"
                  >
                    <Github className="w-4 h-4 text-[#00ff41] group-hover/btn:rotate-12 transition-transform" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-[#00ff41]/10 rounded-md bg-[#00ff41]/5 text-[#00ff41]/40 font-mono text-xs cursor-default">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Code Restricted</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
