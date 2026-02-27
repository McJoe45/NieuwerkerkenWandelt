// Drag-and-drop GPX-upload, parset bestand en vult formuliervelden voor
'use client'

interface Props { onParsed: (data: { geojson: object; distanceKm: number }) => void }

export default function GpxUpload({ onParsed: _ }: Props) {
  return (
    <div className="border-2 border-dashed border-sage rounded-card p-8 text-center cursor-pointer hover:border-moss transition-colors">
      <p className="font-mono text-xs text-earth uppercase tracking-wider">
        Sleep GPX-bestand hiernaartoe of klik om te bladeren
      </p>
    </div>
  )
}
