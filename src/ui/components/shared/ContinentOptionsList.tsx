import DropdownFilterItem from "../home/DropdownFilterItem"
import { CONTINENTS } from "../home/hooks/useRegionFilter"

type ContinentOptionsListProps = {
  currentRegion: string | null
  onSelect: (region: string | null) => void
}

function ContinentOptionsList({ currentRegion, onSelect }: ContinentOptionsListProps) {
  return (
    <ul className="flex flex-col bg-white p-2 gap-2 rounded-sm divide-y divide-border-primary">
      <DropdownFilterItem
        label="All Continents"
        isSelected={currentRegion == null}
        onClick={() => onSelect(null)}
      />
      {CONTINENTS.map(continent => {
        const value = continent.toLowerCase()
        return (
          <DropdownFilterItem
            key={continent}
            label={continent}
            isSelected={currentRegion === value}
            onClick={() => onSelect(value)}
          />
        )
      })}
    </ul>
  )
}

export default ContinentOptionsList