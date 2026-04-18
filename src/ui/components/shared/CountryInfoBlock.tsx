// src/ui/components/shared/InfoBlock.tsx
import type { ReactNode } from "react"

type InfoBlockProps = {
  icon: ReactNode
  label: string
  value: string
}

function CountryInfoBlock({ icon, label, value }: InfoBlockProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-amber-600 mt-1">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wider text-yellow-500 font-semibold">
          {label}
        </span>
        <span className="text-stone-800 text-base">{value}</span>
      </div>
    </div>
  )
}

export default CountryInfoBlock