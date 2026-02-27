// Converteert GeoJSON LineString naar GPX-formaat (XML string)
export function geojsonToGpx(geojson: GeoJSON.LineString, name: string): string {
  const points = geojson.coordinates
    .map(([lon, lat, ele]) =>
      `  <trkpt lat="${lat}" lon="${lon}">${ele != null ? `<ele>${ele}</ele>` : ''}</trkpt>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Wandelroutes Nieuwerkerken">
  <trk><name>${name}</name><trkseg>
${points}
  </trkseg></trk>
</gpx>`
}
