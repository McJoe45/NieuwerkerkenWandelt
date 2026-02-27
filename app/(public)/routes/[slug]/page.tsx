// /routes/[slug] — detailpagina van één route
import type { Metadata } from 'next'

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `Route: ${params.slug}` }
}

export default async function RouteDetailPage({ params }: Props) {
  return (
    <main className="container mx-auto px-4 py-12">
      <p className="font-mono text-xs text-earth uppercase tracking-widest mb-2">Route</p>
      <h1 className="font-serif text-4xl font-light text-ink">{params.slug}</h1>
      {/* TODO: RouteMap, ElevationProfile, RouteStats, DownloadButton */}
    </main>
  )
}
