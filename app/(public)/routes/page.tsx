// /routes — overzicht van alle gepubliceerde wandelroutes
export const dynamic = 'force-dynamic'

export default async function RoutesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-5xl font-light italic text-ink mb-8">Wandelroutes</h1>
      {/* TODO: <RouteFilters /> + <RouteList /> */}
    </main>
  )
}
