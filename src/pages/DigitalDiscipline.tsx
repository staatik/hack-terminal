import { useState } from 'react'
import { Link } from 'wouter'
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react'
import { TerminalWindow } from '../components/TerminalWindow'

const phases = [
  {
    id: 0,
    title: 'OPSEC FUNDAMENTALS',
    subtitle: 'What is Operational Security?',
    content: [
      {
        heading: 'WHAT IS OPSEC?',
        text: 'Operational Security (OPSEC) is the process of identifying, controlling, and protecting critical information that could be used by adversaries to compromise your operations, identity, or systems.',
      },
      {
        heading: 'THE OPSEC PROCESS',
        text: 'The five-step OPSEC process: 1) Identify critical information, 2) Analyze threats, 3) Analyze vulnerabilities, 4) Assess risk, 5) Apply countermeasures. This systematic approach ensures comprehensive security.',
      },
      {
        heading: 'DIGITAL OPSEC',
        text: 'In the digital realm, OPSEC extends to your online footprint — metadata, browsing habits, communication patterns, and device configurations. Every digital action leaves traces that can be analyzed.',
      },
    ],
    keyTerms: ['Critical Information', 'Threat Actor', 'Vulnerability', 'Countermeasure', 'Risk Assessment', 'Attack Surface'],
  },
  {
    id: 1,
    title: 'THREAT LANDSCAPE',
    subtitle: 'Understanding Modern Threats',
    content: [
      {
        heading: 'THREAT ACTORS',
        text: 'Adversaries range from script kiddies to nation-state APT groups. Understanding the capability, intent, and opportunity of different threat actors helps prioritize defensive measures.',
      },
      {
        heading: 'ATTACK VECTORS',
        text: 'Common vectors include phishing, supply chain attacks, zero-day exploits, social engineering, and insider threats. Each vector requires specific countermeasures and detection capabilities.',
      },
      {
        heading: 'RECONNAISSANCE',
        text: 'Attackers gather intelligence before striking. OSINT tools can reveal surprising amounts about targets — social media, DNS records, employee directories, and exposed services.',
      },
    ],
    keyTerms: ['APT', 'Phishing', 'Zero-Day', 'Social Engineering', 'Supply Chain', 'Insider Threat'],
  },
  {
    id: 2,
    title: 'SECURE PRACTICES',
    subtitle: 'Building Digital Hygiene',
    content: [
      {
        heading: 'PASSWORD MANAGEMENT',
        text: 'Use unique, complex passwords for every service. Deploy a password manager with a strong master passphrase. Enable hardware security keys for critical accounts. Never reuse credentials.',
      },
      {
        heading: 'ENCRYPTION',
        text: 'Encrypt data at rest and in transit. Use full-disk encryption on all devices. Communicate via end-to-end encrypted channels. Verify encryption certificates and key fingerprints.',
      },
      {
        heading: 'SECURE COMMUNICATIONS',
        text: 'Choose communication platforms with strong encryption, minimal metadata retention, and open-source auditable code. Verify identities through out-of-band channels before sharing sensitive data.',
      },
    ],
    keyTerms: ['2FA/MFA', 'E2E Encryption', 'VPN', 'Tor', 'PGP/GPG', 'Hardware Keys'],
  },
  {
    id: 3,
    title: 'OPERATIONAL DISCIPLINE',
    subtitle: 'Team Security & Event Protocols',
    content: [
      {
        heading: 'TEAM SECURITY',
        text: 'Establish clear security protocols within your team. Define roles, access levels, and communication channels. Use principle of least privilege — share only what each member needs to know.',
      },
      {
        heading: 'EVENT PROTOCOLS',
        text: 'At hackathons: use a dedicated device or VM, connect via VPN, avoid public WiFi without protection, don\'t leave devices unattended, and lock screens when stepping away.',
      },
      {
        heading: 'CODE SECURITY',
        text: 'Never commit secrets to repositories. Use environment variables for API keys. Scan dependencies for vulnerabilities. Review code for injection flaws before deployment.',
      },
    ],
    keyTerms: ['Least Privilege', 'Need-to-Know', 'Air Gap', 'Clean Desk', 'Compartmentalization', 'Secure Coding'],
  },
  {
    id: 4,
    title: 'INCIDENT RESPONSE',
    subtitle: 'Detection, Containment & Recovery',
    content: [
      {
        heading: 'DETECTION',
        text: 'Monitor for indicators of compromise (IOCs): unusual network traffic, unexpected processes, modified files, failed login attempts, and anomalous user behavior. Early detection minimizes damage.',
      },
      {
        heading: 'CONTAINMENT',
        text: 'When a breach is detected: isolate affected systems, preserve evidence, revoke compromised credentials, and assess the blast radius. Speed is critical — have playbooks ready before incidents occur.',
      },
      {
        heading: 'RECOVERY & LESSONS',
        text: 'Restore from clean backups, rotate all potentially compromised credentials, patch exploited vulnerabilities, and conduct a thorough post-mortem. Document lessons learned to improve future response.',
      },
    ],
    keyTerms: ['IOC', 'SIEM', 'Forensics', 'Chain of Custody', 'Post-Mortem', 'Playbook'],
  },
]

export default function DigitalDiscipline() {
  const [activePhase, setActivePhase] = useState(0)
  const phase = phases[activePhase]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="crt-scanlines" />
      <div className="crt-vignette" />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-1 text-sm mb-8 hover:text-[var(--phosphor)] transition-colors" style={{ color: 'var(--phosphor-dim)' }}>
          <ChevronLeft className="w-4 h-4" /> RETURN TO MAIN
        </Link>

        {/* Header */}
        <div className="red-accent-bar pt-4 mb-8">
          <h1 className="text-3xl mb-2 phosphor-glow" style={{ fontFamily: 'VT323' }}>
            DIGITAL DISCIPLINE
          </h1>
          <p className="text-sm opacity-60">
            Operational Security & Digital Hygiene for Hackathon Operatives
          </p>
        </div>

        {/* Phase Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePhase(p.id)}
              className="px-4 py-2 text-sm cursor-pointer transition-all"
              style={{
                fontFamily: 'VT323',
                fontSize: '1.1rem',
                border: '1px dashed',
                borderColor: activePhase === p.id ? 'var(--warning-amber)' : 'var(--phosphor-faint)',
                backgroundColor: activePhase === p.id ? 'rgba(255, 204, 0, 0.15)' : 'transparent',
                color: activePhase === p.id ? 'var(--warning-amber)' : 'var(--phosphor-dim)',
              }}
            >
              {String(p.id).padStart(2, '0')}
            </button>
          ))}
        </div>

        {/* Phase Content */}
        <TerminalWindow
          title={`PHASE ${String(phase.id).padStart(2, '0')} — ${phase.title}`}
          status="ACTIVE"
          statusColor="var(--alert-red)"
        >
          <h2 className="text-2xl mb-1" style={{ fontFamily: 'VT323' }}>
            {'> '}{phase.title}
          </h2>
          <p className="text-xs mb-6 opacity-50">{phase.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {phase.content.map((item, i) => (
              <div key={i} className="p-4 border" style={{ borderColor: 'rgba(255,0,0,0.2)', backgroundColor: 'rgba(255,0,0,0.02)' }}>
                <h3 className="text-sm mb-2 font-bold" style={{ fontFamily: 'VT323', fontSize: '1.1rem', color: 'var(--alert-red-bright)' }}>
                  {item.heading}
                </h3>
                <p className="text-xs opacity-70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Key Terms */}
          <div className="border-t pt-4" style={{ borderColor: 'var(--phosphor-faint)' }}>
            <h3 className="text-xs mb-2 opacity-50">KEY TERMS:</h3>
            <div className="flex flex-wrap gap-2">
              {phase.keyTerms.map((term) => (
                <span key={term} className="px-2 py-0.5 text-xs border" style={{ borderColor: 'rgba(255,0,0,0.3)', color: 'var(--alert-red-bright)' }}>
                  {term}
                </span>
              ))}
            </div>
          </div>
        </TerminalWindow>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
            disabled={activePhase === 0}
            className="flex items-center gap-1 text-sm px-4 py-2 border cursor-pointer transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: 'var(--phosphor-faint)', color: 'var(--phosphor-dim)', background: 'none' }}
          >
            <ArrowLeft className="w-4 h-4" /> PREVIOUS PHASE
          </button>
          <span className="text-sm opacity-50" style={{ fontFamily: 'VT323' }}>
            {activePhase + 1} / {phases.length}
          </span>
          <button
            onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
            disabled={activePhase === phases.length - 1}
            className="flex items-center gap-1 text-sm px-4 py-2 border cursor-pointer transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: 'var(--phosphor-faint)', color: 'var(--phosphor-dim)', background: 'none' }}
          >
            NEXT PHASE <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
