import type { ReactNode } from 'react'

interface TerminalWindowProps {
  title: string
  children: ReactNode
  status?: string
  statusColor?: string
}

export function TerminalWindow({ title, children, status = 'ACTIVE', statusColor = 'var(--phosphor)' }: TerminalWindowProps) {
  return (
    <div className="terminal-border rounded-none" style={{ backgroundColor: 'var(--bg-panel)' }}>
      <div
        className="flex justify-between items-center px-3 py-1.5 text-xs border-b"
        style={{ backgroundColor: 'var(--bg-darker)', borderColor: 'var(--phosphor-faint)' }}
      >
        <span className="opacity-70">
          <span className="text-[var(--alert-red)]">[X]</span>
          <span className="text-[var(--warning-amber)]">[-]</span>
          <span className="text-[var(--phosphor)]">[+]</span>
          <span className="ml-2">── {title} ──</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: statusColor, boxShadow: `0 0 6px ${statusColor}` }}
          />
          <span style={{ color: statusColor }}>{status}</span>
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}
