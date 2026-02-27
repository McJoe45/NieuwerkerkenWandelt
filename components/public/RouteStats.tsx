// Pictogram + waarde-paren: afstand, duur, modder
interface Props {
  distanceKm: number
  durationMin?: number
  isMuddy: boolean
}

export default function RouteStats({ distanceKm, durationMin, isMuddy }: Props) {
  return (
    <dl className="flex gap-6 font-mono text-sm text-ink-light">
      <div><dt className="text-xs text-earth uppercase tracking-wider">Afstand</dt><dd>{distanceKm} km</dd></div>
      {durationMin && <div><dt className="text-xs text-earth uppercase tracking-wider">Duur</dt><dd>{durationMin} min</dd></div>}
      <div><dt className="text-xs text-earth uppercase tracking-wider">Terrein</dt><dd>{isMuddy ? 'Modderig' : 'Droog'}</dd></div>
    </dl>
  )
}
