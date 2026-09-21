import { Mail, Github, Linkedin, Send, Terminal } from "lucide-react"

export default function ContactSection() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "rakeshdevesh43@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rakeshdevesh43@gmail.com",
      color: "hover:text-red-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Devesh43",
      href: "https://github.com/Devesh43",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/devesh2005",
      href: "https://linkedin.com/in/devesh2005",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">{">"} CONTACT.sys</h2>
          <div className="h-1 w-24 bg-[#00ff41] shadow-[0_0_10px_#00ff41]" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="cyber-card p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-[#00ff41]" />
                <h3 className="text-2xl font-bold font-mono">Get In Touch</h3>
              </div>
              <p className="text-[#00ff41]/80 leading-relaxed mb-6 font-mono text-sm md:text-base">
                I'm always open to discussing new projects, technical collaborations, cybersecurity opportunities, or software engineering roles. Feel free to reach out via email or connect on LinkedIn/GitHub!
              </p>
              <div className="flex items-center gap-2 text-xs text-[#00ff41]/70 font-mono">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff41] animate-pulse" />
                <span>Status: Available for full-time opportunities & security research</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="cyber-card p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-mono">
                <Send className="w-5 h-5 text-[#00ff41]" />
                Direct Communication Channels
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 border border-[#00ff41]/20 rounded-lg hover:border-[#00ff41] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all group bg-[#0a0e27] ${link.color}`}
                  >
                    <link.icon className="w-5 h-5 text-[#00ff41] group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#00ff41]/60 font-mono">{link.label}</p>
                      <p className="text-sm text-[#00ff41] truncate font-mono font-semibold">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Terminal-style CTA */}
          <div className="cyber-card rounded-lg overflow-hidden flex flex-col justify-between border-2 border-[#00ff41]/30">
            {/* Terminal Header */}
            <div className="bg-[#0a0e27] border-b border-[#00ff41]/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-[#00ff41]/60 ml-3 font-mono">contact@devesh:~$</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 space-y-4 font-mono text-sm bg-[#0a0e27]/70 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-[#00ff41]/80">
                  <span className="text-[#00ff41]">{">"}</span> Initializing communication protocol...
                </div>
                <div className="text-[#00ff41]/80">
                  <span className="text-[#00ff41]">{">"}</span> Destination: rakeshdevesh43@gmail.com
                </div>
                <div className="text-[#00ff41]/80">
                  <span className="text-[#00ff41]">{">"}</span> Encryption handshake verified. Ready to transmit.
                </div>
              </div>

              <div className="border-t border-[#00ff41]/20 pt-4 my-4">
                <p className="text-[#00ff41] font-bold mb-3">$ ./connect.sh</p>
                <div className="space-y-2 text-[#00ff41]/70 text-xs">
                  <p>{">"} Primary contact options:</p>
                  <p className="pl-4">1. Email for formal inquiries & opportunities</p>
                  <p className="pl-4">2. LinkedIn for professional connection</p>
                  <p className="pl-4">3. GitHub for code reviews & open source</p>
                </div>
              </div>

              <div className="border-t border-[#00ff41]/20 pt-4">
                <div className="flex items-center justify-between text-xs text-[#00ff41]/70 mb-4">
                  <span>Response SLA: {"<"} 24 hours</span>
                  <span className="text-[#00ff41]">ONLINE</span>
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rakeshdevesh43@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 border border-[#00ff41] rounded-md hover:bg-[#00ff41] hover:text-[#0a0e27] transition-all duration-300 font-mono font-bold text-sm shadow-[0_0_15px_rgba(0,255,65,0.2)]"
                >
                  SEND EMAIL NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-[#00ff41]/60 font-mono text-xs">
            {">"} Portfolio Built with Next.js & Tailwind CSS | Designed for Cybersecurity & Intelligent Systems
          </p>
        </div>
      </div>
    </section>
  )
}
