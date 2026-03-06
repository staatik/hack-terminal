import { useState, useEffect, useCallback } from 'react'
import { Link } from 'wouter'
import { Shield, Cpu, Eye, Zap, Lock, Code, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { TerminalWindow } from '../components/TerminalWindow'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

/* ── Boot Sequence ── */
const bootMessages = [
  'BIOS v2.4.1 -- HACK//TERMINAL SYSTEMS INC.',
  'Initializing memory banks... [##########] 64MB OK',
  'Loading kernel modules... phosphor_k0 radar_k0 crypto_ka',
  'Mounting classified filesystem... /dev/sda1 on / OK',
  'Starting network daemon... eth0: 192.168.1.337 ONLINE',
  'Establishing secure uplink... [ENCRYPTED]',
  'Authentication server... [CONNECTED]',
  'Loading mission parameters... ######## DECRYPTING ...',
  '> AUTHORIZATION GRANTED -- WELCOME, OPERATIVE',
]

/* ── Tracks ── */
const tracks = [
  { icon: Shield, name: 'CYBER DEFENSE', desc: 'Build defensive systems to protect critical infrastructure from advanced persistent threats.' },
  { icon: Cpu, name: 'AI WARFARE', desc: 'Deploy machine learning models for threat detection, anomaly analysis, and predictive defense.' },
  { icon: Eye, name: 'OSINT', desc: 'Leverage open-source intelligence gathering and analysis for reconnaissance operations.' },
  { icon: Zap, name: 'CRITICAL INFRA', desc: 'Secure power grids, water systems, and communications networks against cyber attacks.' },
  { icon: Lock, name: 'CRYPTOGRAPHY', desc: 'Design and break encryption systems, secure communications protocols, and key management.' },
  { icon: Code, name: 'OPEN MISSION', desc: 'Freestyle track — bring your own security challenge and build innovative solutions.' },
]

/* ── Timeline ── */
const timeline = [
  { time: 'FRI 1800', label: 'DOORS OPEN', desc: 'Registration, badge collection, secure device check-in', phase: 'green' },
  { time: 'FRI 1900', label: 'MISSION BRIEFING', desc: 'Opening ceremony, keynote address, track announcements', phase: 'green' },
  { time: 'FRI 2000', label: 'HACK BEGINS', desc: 'Teams deploy to stations — 48-hour clock starts', phase: 'amber' },
  { time: 'SAT 0800', label: 'MORNING DEBRIEF', desc: 'Progress check-in, mentor office hours open', phase: 'green' },
  { time: 'SAT 1400', label: 'WORKSHOPS', desc: 'LLM training module, OPSEC digital discipline briefing', phase: 'green' },
  { time: 'SAT 2200', label: 'MIDNIGHT OPS', desc: 'Late-night snacks, energy drinks deployed', phase: 'amber' },
  { time: 'SUN 1200', label: 'CODE FREEZE', desc: 'All repositories locked — final commits accepted', phase: 'red' },
  { time: 'SUN 1400', label: 'DEMO DAY', desc: 'Team presentations to panel of field operatives', phase: 'red' },
  { time: 'SUN 1700', label: 'AWARDS CEREMONY', desc: 'Prize distribution, closing remarks, decommissioning', phase: 'red' },
]

/* ── Prizes ── */
const prizes = [
  { place: '1ST', amount: '$10,000', label: 'GRAND PRIZE' },
  { place: '2ND', amount: '$5,000', label: 'RUNNER UP' },
  { place: '3RD', amount: '$2,500', label: 'THIRD PLACE' },
  { place: 'TRACK', amount: '$500', label: 'BEST PER TRACK (x6)' },
  { place: 'SPECIAL', amount: '$1,000', label: 'MOST INNOVATIVE' },
]

/* ── Judges ── */
const judges = [
  { name: 'COL. REDACTED', title: 'Director of Cyber Operations', clearance: 'TOP SECRET//SCI' },
  { name: 'DR. CLASSIFIED', title: 'AI Research Division Lead', clearance: 'SECRET//NOFORN' },
  { name: 'CMDR. OBSCURED', title: 'Chief Cryptography Officer', clearance: 'TOP SECRET' },
  { name: 'AGENT UNKNOWN', title: 'OSINT Division Analyst', clearance: 'SECRET' },
]

/* ── FAQ ── */
const faqItems = [
  { q: 'WHO CAN PARTICIPATE?', a: 'All operatives with valid identification. Students, professionals, and independent researchers welcome. Teams of 1-4 members.' },
  { q: 'WHAT SHOULD I BRING?', a: 'Laptop, charger, government-issued ID. All equipment will be security-screened on entry. No external storage devices permitted in secure zones.' },
  { q: 'IS THERE A COST?', a: 'Negative. This operation is fully funded. Food, drinks, and sleeping accommodations provided on-site.' },
  { q: 'WHAT ABOUT BEGINNERS?', a: 'All skill levels welcome. Mentors will be stationed at help desks throughout the event. Pre-mission training modules available on this site.' },
  { q: 'CAN I PARTICIPATE REMOTELY?', a: 'Negative. This is an on-site operation only. Physical presence required for security protocols and team coordination.' },
]

/* ── Section Wrapper ── */
function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  const { ref, isVisible } = useIntersectionObserver(0.05)
  return (
    <div ref={ref} id={id} className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  )
}

export default function Home() {
  /* ── Boot Sequence State ── */
  const [bootComplete, setBootComplete] = useState(false)
  const [bootLines, setBootLines] = useState<string[]>([])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < bootMessages.length) {
        setBootLines(prev => [...prev, bootMessages[i]])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setBootComplete(true), 800)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [])

  /* ── Countdown ── */
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const event = new Date('2026-04-18T18:00:00')
      const diff = Math.max(0, event.getTime() - now.getTime())
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  /* ── Clock ── */
  const [clock, setClock] = useState('')
  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString('en-US', { hour12: false }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  /* ── FAQ Accordion ── */
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  /* ── Registration ── */
  const [formData, setFormData] = useState({ callsign: '', email: '', track: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }, [])

  /* ── Boot Screen ── */
  if (!bootComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="max-w-2xl w-full">
          <div className="mb-4 text-xs opacity-50">HACK//TERMINAL BOOT SEQUENCE v2.4.1</div>
          {bootLines.map((line, i) => (
            <div key={i} className="text-sm mb-1" style={{ color: i === bootLines.length - 1 ? 'var(--phosphor)' : 'var(--phosphor-dim)' }}>
              {line}
              {i === bootLines.length - 1 && <span className="animate-blink ml-1">█</span>}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-dark)' }}>
      {/* CRT overlay */}
      <div className="crt-scanlines" />
      <div className="crt-vignette" />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b px-4 py-2 flex items-center justify-between text-xs"
        style={{ backgroundColor: 'rgba(0,13,0,0.95)', borderColor: 'var(--phosphor-faint)', backdropFilter: 'blur(8px)' }}>
        <Link href="/" className="font-bold text-base phosphor-glow" style={{ fontFamily: 'VT323' }}>
          HACK//TERMINAL
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-[var(--phosphor)] transition-colors">ABOUT</a>
          <a href="#tracks" className="hover:text-[var(--phosphor)] transition-colors">TRACKS</a>
          <a href="#timeline" className="hover:text-[var(--phosphor)] transition-colors">TIMELINE</a>
          <a href="#prizes" className="hover:text-[var(--phosphor)] transition-colors">PRIZES</a>
          <a href="#register" className="hover:text-[var(--phosphor)] transition-colors">REGISTER</a>
          <Link href="/llm-education" className="hover:text-[var(--alert-red-bright)] transition-colors" style={{ color: 'var(--alert-red)' }}>
            LLM TRAINING <ExternalLink className="inline w-3 h-3" />
          </Link>
          <Link href="/digital-discipline" className="hover:text-[var(--alert-red-bright)] transition-colors" style={{ color: 'var(--alert-red)' }}>
            DIGITAL DISCIPLINE <ExternalLink className="inline w-3 h-3" />
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-20 pb-8">

        {/* ── HERO ── */}
        <Section>
          <div className="text-center py-16">
            <div className="text-xs mb-4 opacity-50" style={{ color: 'var(--alert-red)' }}>
              ── CLASSIFIED // TOP SECRET // EYES ONLY ──
            </div>
            <pre className="text-[var(--phosphor)] phosphor-glow-bright text-xs sm:text-sm md:text-base leading-tight mb-8 overflow-x-auto" style={{ fontFamily: 'VT323' }}>{`
 ██╗  ██╗ █████╗  ██████╗██╗  ██╗
 ██║  ██║██╔══██╗██╔════╝██║ ██╔╝
 ███████║███████║██║     █████╔╝
 ██╔══██║██╔══██║██║     ██╔═██╗
 ██║  ██║██║  ██║╚██████╗██║  ██╗
 ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
 ╔╦╗╔═╗╦═╗╔╦╗╦╔╗╔╔═╗╦
  ║ ║╣ ╠╦╝║║║║║║║╠═╣║
  ╩ ╚═╝╩╚═╩ ╩╩╝╚╝╩ ╩╩═╝`}</pre>
            <p className="text-lg mb-8 opacity-80" style={{ fontFamily: 'VT323', fontSize: '1.5rem' }}>
              48-HOUR CYBERSECURITY HACKATHON
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-4 sm:gap-8 mb-8">
              {[
                { val: countdown.days, label: 'DAYS' },
                { val: countdown.hours, label: 'HRS' },
                { val: countdown.minutes, label: 'MIN' },
                { val: countdown.seconds, label: 'SEC' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl sm:text-5xl phosphor-glow-bright" style={{ fontFamily: 'VT323' }}>
                    {pad(val)}
                  </div>
                  <div className="text-xs mt-1 opacity-60">{label}</div>
                </div>
              ))}
            </div>

            <p className="text-xs opacity-50">EVENT DATE: APR 18-20, 2026 // LOCATION: [REDACTED]</p>
            <a href="#register"
              className="inline-block mt-6 px-8 py-3 border text-sm transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]"
              style={{ borderColor: 'var(--phosphor)', color: 'var(--phosphor)', fontFamily: 'VT323', fontSize: '1.2rem' }}>
              {'[ > REGISTER NOW ]'}
            </a>
          </div>
        </Section>

        {/* ── ABOUT ── */}
        <Section id="about">
          <TerminalWindow title="MISSION BRIEFING" status="DECRYPTED">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'VT323', color: 'var(--phosphor)' }}>
                  {'> ABOUT THE OPERATION'}
                </h2>
                <p className="text-sm leading-relaxed opacity-80 mb-4">
                  HACK//TERMINAL is a 48-hour cybersecurity hackathon that brings together the brightest
                  operatives in security, AI, and defense technology. Your mission: build tools, break
                  systems, and push the boundaries of what&apos;s possible in cyber defense.
                </p>
                <p className="text-sm leading-relaxed opacity-80">
                  Whether you&apos;re a seasoned security researcher or a first-time operative, you&apos;ll
                  find your place in one of six specialized mission tracks. Mentors, workshops, and
                  classified resources will be available throughout the operation.
                </p>
              </div>
              <div className="space-y-3">
                <div className="terminal-border p-3 text-center">
                  <div className="text-3xl phosphor-glow" style={{ fontFamily: 'VT323' }}>500+</div>
                  <div className="text-xs opacity-60">OPERATIVES</div>
                </div>
                <div className="terminal-border p-3 text-center">
                  <div className="text-3xl phosphor-glow" style={{ fontFamily: 'VT323' }}>$21.5K</div>
                  <div className="text-xs opacity-60">TOTAL PRIZES</div>
                </div>
                <div className="terminal-border p-3 text-center">
                  <div className="text-3xl phosphor-glow" style={{ fontFamily: 'VT323' }}>48 HRS</div>
                  <div className="text-xs opacity-60">MISSION DURATION</div>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </Section>

        {/* ── TRACKS ── */}
        <Section id="tracks">
          <h2 className="text-2xl mb-6 phosphor-glow" style={{ fontFamily: 'VT323' }}>
            ┌──[ MISSION TRACKS ]──┐
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track) => (
              <div key={track.name} className="terminal-border p-4 transition-all hover:shadow-[0_0_16px_rgba(0,255,65,0.15)] group">
                <div className="flex items-center gap-3 mb-3">
                  <track.icon className="w-5 h-5 text-[var(--phosphor)]" />
                  <h3 className="text-lg" style={{ fontFamily: 'VT323' }}>{track.name}</h3>
                </div>
                <p className="text-xs opacity-70 leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── TIMELINE ── */}
        <Section id="timeline">
          <TerminalWindow title="OPERATION TIMELINE" status="SCHEDULED">
            <h2 className="text-2xl mb-6" style={{ fontFamily: 'VT323' }}>{'> MISSION SCHEDULE'}</h2>
            <div className="space-y-2">
              {timeline.map((item, i) => {
                const phaseColor = item.phase === 'red' ? 'var(--alert-red)' : item.phase === 'amber' ? 'var(--warning-amber)' : 'var(--phosphor)'
                return (
                  <div key={i} className="flex gap-4 text-sm py-2 border-b" style={{ borderColor: 'var(--phosphor-faint)' }}>
                    <div className="w-24 shrink-0 font-bold" style={{ color: phaseColor, fontFamily: 'VT323', fontSize: '1.1rem' }}>
                      {item.time}
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: phaseColor }}>{item.label}</span>
                      <span className="ml-2 opacity-60">— {item.desc}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </TerminalWindow>
        </Section>

        {/* ── PRIZES ── */}
        <Section id="prizes">
          <h2 className="text-2xl mb-6 phosphor-glow" style={{ fontFamily: 'VT323' }}>
            ┌──[ PRIZE MANIFEST ]──┐
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {prizes.map((prize) => (
              <div key={prize.place} className="terminal-border p-4 text-center">
                <div className="text-xs opacity-50 mb-1">{prize.place} PLACE</div>
                <div className="text-3xl phosphor-glow-bright" style={{ fontFamily: 'VT323' }}>
                  {prize.amount}
                </div>
                <div className="text-xs mt-2 opacity-70">{prize.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── JUDGES ── */}
        <Section id="judges">
          <TerminalWindow title="FIELD OPERATIVES" status="CLASSIFIED" statusColor="var(--alert-red)">
            <h2 className="text-2xl mb-6" style={{ fontFamily: 'VT323' }}>{'> JUDGE PANEL'}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {judges.map((judge) => (
                <div key={judge.name} className="terminal-border p-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 border flex items-center justify-center text-xs opacity-40"
                    style={{ borderColor: 'var(--phosphor-faint)' }}>
                    [REDACTED]
                  </div>
                  <div className="text-sm font-bold" style={{ fontFamily: 'VT323', fontSize: '1.1rem' }}>
                    {judge.name}
                  </div>
                  <div className="text-xs opacity-60 mt-1">{judge.title}</div>
                  <div className="text-xs mt-2 px-2 py-0.5 inline-block border" style={{ color: 'var(--alert-red)', borderColor: 'var(--alert-red)', fontSize: '0.65rem' }}>
                    {judge.clearance}
                  </div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </Section>

        {/* ── FAQ ── */}
        <Section id="faq">
          <h2 className="text-2xl mb-6 phosphor-glow" style={{ fontFamily: 'VT323' }}>
            ┌──[ FREQUENTLY ASKED QUESTIONS ]──┐
          </h2>
          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <div key={i} className="terminal-border">
                <button
                  className="w-full text-left px-4 py-3 flex items-center justify-between text-sm cursor-pointer"
                  style={{ color: 'var(--phosphor)', background: 'none', border: 'none', borderRadius: 0 }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{ fontFamily: 'VT323', fontSize: '1.1rem' }}>{'> '}{item.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-3 text-xs opacity-70 leading-relaxed border-t" style={{ borderColor: 'var(--phosphor-faint)' }}>
                    <div className="pt-3">{item.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* ── REGISTRATION ── */}
        <Section id="register">
          <TerminalWindow title="OPERATIVE REGISTRATION" status={submitted ? 'CONFIRMED' : 'AWAITING INPUT'} statusColor={submitted ? 'var(--phosphor)' : 'var(--warning-amber)'}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-3xl mb-4 phosphor-glow-bright" style={{ fontFamily: 'VT323' }}>
                  REGISTRATION CONFIRMED
                </div>
                <p className="text-sm opacity-70">Your operative credentials have been processed.</p>
                <p className="text-sm opacity-70 mt-2">Standby for further instructions via secure comms.</p>
                <div className="mt-4 text-xs" style={{ color: 'var(--alert-red)' }}>
                  [CLASSIFIED] Do not share your operative status.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'VT323' }}>{'> ENLIST AS OPERATIVE'}</h2>
                <div>
                  <label className="block text-xs mb-1 opacity-70">OPERATIVE CALLSIGN</label>
                  <input
                    type="text"
                    required
                    value={formData.callsign}
                    onChange={(e) => setFormData(prev => ({ ...prev, callsign: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border outline-none focus:shadow-[0_0_12px_rgba(0,255,65,0.2)]"
                    style={{ backgroundColor: 'var(--bg-darker)', borderColor: 'var(--phosphor-faint)', color: 'var(--phosphor)' }}
                    placeholder="Enter callsign..."
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 opacity-70">SECURE COMMS (EMAIL)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border outline-none focus:shadow-[0_0_12px_rgba(0,255,65,0.2)]"
                    style={{ backgroundColor: 'var(--bg-darker)', borderColor: 'var(--phosphor-faint)', color: 'var(--phosphor)' }}
                    placeholder="operative@secure.mil"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 opacity-70">MISSION TRACK</label>
                  <select
                    required
                    value={formData.track}
                    onChange={(e) => setFormData(prev => ({ ...prev, track: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border outline-none cursor-pointer"
                    style={{ backgroundColor: 'var(--bg-darker)', borderColor: 'var(--phosphor-faint)', color: 'var(--phosphor)' }}
                  >
                    <option value="">-- SELECT TRACK --</option>
                    {tracks.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm border cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]"
                  style={{ backgroundColor: 'transparent', borderColor: 'var(--phosphor)', color: 'var(--phosphor)', fontFamily: 'VT323', fontSize: '1.2rem' }}
                >
                  {'[ > SUBMIT REGISTRATION ]'}
                </button>
              </form>
            )}
          </TerminalWindow>
        </Section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t text-xs py-3" style={{ borderColor: 'var(--phosphor-faint)', backgroundColor: 'var(--bg-darker)' }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span>
              <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ backgroundColor: 'var(--phosphor)', boxShadow: '0 0 6px var(--phosphor)' }} />
              SYS ONLINE
            </span>
            <span>
              <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ backgroundColor: 'var(--phosphor)', boxShadow: '0 0 6px var(--phosphor)' }} />
              NET SECURE
            </span>
            <span style={{ fontFamily: 'VT323' }}>{clock}</span>
          </div>
          <div className="overflow-hidden flex-1 ml-4 min-w-0">
            <div className="animate-marquee whitespace-nowrap opacity-40">
              ██ HACK//TERMINAL v2.4.1 ██ ALL SYSTEMS OPERATIONAL ██ UPLINK: ENCRYPTED ██ CLASSIFICATION: TOP SECRET ██ NEXT MISSION: APR 18 2026 ██ OPERATIVES REGISTERED: 347 ██ THREAT LEVEL: ELEVATED ██
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
