// GPX-downloadknop met laad- en foutafhandeling
'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'

interface Props { routeId: string }

export default function DownloadButton({ routeId }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    setLoading(true)
    try {
      const res = await fetch(`/api/gpx/${routeId}`)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `route-${routeId}.gpx`
      a.click()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleDownload} disabled={loading}>
      {loading ? 'Downloaden…' : 'GPX downloaden'}
    </Button>
  )
}
