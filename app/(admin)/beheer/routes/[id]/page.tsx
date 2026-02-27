// /beheer/routes/[id] — route aanmaken (id="nieuw") of bewerken
interface Props { params: { id: string } }

export default function EditRoutePage({ params }: Props) {
  const isNew = params.id === 'nieuw'
  return (
    <div>
      <h1 className="font-serif text-3xl text-ink mb-6">
        {isNew ? 'Nieuwe route' : `Route bewerken — ${params.id}`}
      </h1>
      {/* TODO: <RouteForm /> */}
    </div>
  )
}
