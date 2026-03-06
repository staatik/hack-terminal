import { Link } from 'wouter'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="crt-scanlines" />
      <div className="crt-vignette" />
      <div className="text-center">
        <div className="text-6xl mb-4 phosphor-glow-bright" style={{ fontFamily: 'VT323' }}>404</div>
        <div className="text-xl mb-2" style={{ fontFamily: 'VT323', color: 'var(--alert-red)' }}>
          SECTOR NOT FOUND
        </div>
        <p className="text-sm opacity-60 mb-8">
          The requested resource does not exist in this classified filesystem.
        </p>
        <pre className="text-xs opacity-40 mb-8">{`
> ls /requested/path
  ERROR: Permission denied or path does not exist
> STATUS: 404 NOT FOUND
> RECOMMENDATION: Return to main terminal
        `}</pre>
        <Link href="/" className="inline-block px-6 py-2 border text-sm transition-all hover:shadow-[0_0_16px_rgba(0,255,65,0.3)]"
          style={{ borderColor: 'var(--phosphor)', color: 'var(--phosphor)', fontFamily: 'VT323', fontSize: '1.1rem' }}>
          {'[ > RETURN TO MAIN TERMINAL ]'}
        </Link>
      </div>
    </div>
  )
}
