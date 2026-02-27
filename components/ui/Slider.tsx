'use client'

interface Props {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}

export default function Slider({ min, max, value, onChange }: Props) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-48 accent-moss cursor-pointer"
    />
  )
}
