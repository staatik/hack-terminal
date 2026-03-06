import { useState } from 'react'
import { Link } from 'wouter'
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react'
import { TerminalWindow } from '../components/TerminalWindow'

const phases = [
  {
    id: 0,
    title: 'AI FUNDAMENTALS',
    subtitle: 'Understanding Artificial Intelligence',
    content: [
      {
        heading: 'WHAT IS AI?',
        text: 'Artificial Intelligence refers to computer systems designed to perform tasks that typically require human intelligence — pattern recognition, decision-making, language understanding, and problem-solving.',
      },
      {
        heading: 'MACHINE LEARNING',
        text: 'ML is a subset of AI where systems learn from data rather than being explicitly programmed. Models identify patterns in training data and use them to make predictions on new inputs.',
      },
      {
        heading: 'DEEP LEARNING',
        text: 'Deep Learning uses neural networks with many layers to learn complex patterns. These architectures power modern breakthroughs in vision, language, and generative AI.',
      },
    ],
    keyTerms: ['Neural Network', 'Training Data', 'Inference', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
  },
  {
    id: 1,
    title: 'LLM BASICS',
    subtitle: 'How Large Language Models Work',
    content: [
      {
        heading: 'TRANSFORMER ARCHITECTURE',
        text: 'LLMs are built on the Transformer architecture, which uses self-attention mechanisms to process sequences of text. This allows the model to understand context and relationships between words across long passages.',
      },
      {
        heading: 'TRAINING PROCESS',
        text: 'LLMs are trained on massive text datasets using next-token prediction. The model learns to predict the most likely next word given all previous words, developing a deep understanding of language patterns.',
      },
      {
        heading: 'TOKENS & CONTEXT',
        text: 'Text is broken into tokens (words or subwords). Models have a context window — the maximum number of tokens they can process at once. Larger context windows enable processing longer documents.',
      },
    ],
    keyTerms: ['Transformer', 'Self-Attention', 'Token', 'Context Window', 'Pre-training', 'Fine-tuning'],
  },
  {
    id: 2,
    title: 'CAPABILITIES',
    subtitle: 'What LLMs Can Do',
    content: [
      {
        heading: 'TEXT GENERATION',
        text: 'LLMs can generate coherent, contextual text including articles, code, creative writing, summaries, and translations. Quality depends on the model size, training data, and prompting technique.',
      },
      {
        heading: 'REASONING & ANALYSIS',
        text: 'Modern LLMs demonstrate chain-of-thought reasoning, code analysis, mathematical problem-solving, and logical deduction. They can break complex problems into steps and work through them systematically.',
      },
      {
        heading: 'CLASSIFICATION & EXTRACTION',
        text: 'LLMs excel at categorizing text, extracting structured data from unstructured sources, sentiment analysis, and identifying named entities within documents.',
      },
    ],
    keyTerms: ['Prompt Engineering', 'Zero-Shot', 'Few-Shot', 'Chain-of-Thought', 'RAG', 'Function Calling'],
  },
  {
    id: 3,
    title: 'LIMITATIONS',
    subtitle: 'Understanding LLM Constraints',
    content: [
      {
        heading: 'HALLUCINATIONS',
        text: 'LLMs can generate plausible-sounding but factually incorrect information. They predict likely text sequences rather than retrieving verified facts, making fact-checking essential.',
      },
      {
        heading: 'BIAS & FAIRNESS',
        text: 'Training data contains societal biases that models can amplify. LLMs may produce biased outputs related to gender, race, culture, or other sensitive attributes without careful mitigation.',
      },
      {
        heading: 'KNOWLEDGE CUTOFF',
        text: 'LLMs have a training cutoff date and cannot access real-time information unless connected to external tools. They may provide outdated answers to questions about recent events.',
      },
    ],
    keyTerms: ['Hallucination', 'Bias', 'Knowledge Cutoff', 'Prompt Injection', 'Token Limit', 'Alignment'],
  },
  {
    id: 4,
    title: 'OPERATIONAL USE',
    subtitle: 'LLMs in Defense & Security',
    content: [
      {
        heading: 'THREAT INTELLIGENCE',
        text: 'LLMs can analyze threat reports, CVE databases, and security advisories to identify patterns, summarize risks, and generate actionable intelligence briefs for security teams.',
      },
      {
        heading: 'CODE SECURITY ANALYSIS',
        text: 'Models can review source code for vulnerabilities, suggest patches, explain exploit mechanisms, and assist in secure code development practices across multiple languages.',
      },
      {
        heading: 'INCIDENT RESPONSE',
        text: 'During security incidents, LLMs can help analyze logs, correlate events, draft communications, and suggest remediation steps based on known attack patterns and best practices.',
      },
    ],
    keyTerms: ['CTI', 'SIEM Integration', 'Automated Triage', 'Red Team Assist', 'Malware Analysis', 'SOAR'],
  },
]

export default function LLMEducation() {
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
            LLM FUNDAMENTALS
          </h1>
          <p className="text-sm opacity-60">
            Understanding Large Language Models for Operational Use
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
        <TerminalWindow title={`PHASE ${String(phase.id).padStart(2, '0')} — ${phase.title}`} status="ACTIVE">
          <h2 className="text-2xl mb-1" style={{ fontFamily: 'VT323' }}>
            {'> '}{phase.title}
          </h2>
          <p className="text-xs mb-6 opacity-50">{phase.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {phase.content.map((item, i) => (
              <div key={i} className="terminal-border p-4">
                <h3 className="text-sm mb-2 font-bold" style={{ fontFamily: 'VT323', fontSize: '1.1rem', color: 'var(--phosphor)' }}>
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
                <span key={term} className="px-2 py-0.5 text-xs border" style={{ borderColor: 'var(--phosphor-faint)', color: 'var(--phosphor-dim)' }}>
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
