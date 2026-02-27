import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility: combineer Tailwind-klassen zonder conflicten
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Bereken wandelduur op basis van afstand (4.5 km/h)
export function estimateDurationMin(distanceKm: number): number {
  return Math.round((distanceKm / 4.5) * 60)
}
