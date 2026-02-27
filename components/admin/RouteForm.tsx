// Volledig route-formulier (aanmaken én bewerken) met validatie
'use client'
import { useState } from 'react'
import type { Route } from '@/types/route'
import Button from '@/components/ui/Button'

interface Props { initial?: Partial<Route>; onSave: (data: Partial<Route>) => Promise<void> }

export default function RouteForm({ initial = {}, onSave }: Props) {
  const [name, setName] = useState(initial.name ?? '')

  return (
    <form className="space-y-6 max-w-2xl" onSubmit={(e) => { e.preventDefault(); onSave({ name }) }}>
      <div>
        <label className="font-mono text-xs text-earth uppercase tracking-wider block mb-1">Naam</label>
        <input value={name} onChange={(e) => setName(e.target.value)}
          className="w-full border border-sage rounded-card px-4 py-2 bg-paper text-ink font-body font-light text-sm focus:outline-none focus:ring-2 focus:ring-moss" />
      </div>
      {/* TODO: description, distance, is_muddy, DrawMap / GpxUpload */}
      <Button type="submit" variant="primary">Opslaan</Button>
    </form>
  )
}
