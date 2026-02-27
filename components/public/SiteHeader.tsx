// Navigatiebalk voor de publieke zijde
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="border-b border-sage bg-paper">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl italic text-ink">
          Wandelroutes Nieuwerkerken
        </Link>
        <nav className="flex gap-6 text-sm font-body font-light text-ink-light">
          <Link href="/routes">Routes</Link>
          <Link href="/over">Over</Link>
        </nav>
      </div>
    </header>
  )
}
