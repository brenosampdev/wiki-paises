import { NavLink } from "react-router-dom"

const CONTINENTS = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania'] as const

type ContinentFilterProps = {
    variant: "desktop" | "mobile"
    closeMenu?: () => void
}

function ContinentFilter({ variant, closeMenu }: ContinentFilterProps) {
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4">
        <span className="text-sm font-bold">Filtrar por Continente</span>
        <hr className="border-gray-100" />
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className="text-left text-sm uppercase font-medium"
        >
          Todos os Continentes
        </NavLink>
        <hr className="border-gray-100" />
        {CONTINENTS.map((continent) => (
          <NavLink
            key={continent}
            to={`/?region=${continent.toLowerCase()}`}
            onClick={closeMenu}
            className="text-left text-sm uppercase font-medium transition-colors"
          >
            {continent}
          </NavLink>
        ))}
      </div>
    )
  }

  // Desktop
  return (
    <ul className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
      {CONTINENTS.map((continent) => (
        <li key={continent}>
          <NavLink
            to={`/?region=${continent.toLowerCase()}`}
            className={({ isActive }) =>
              `transition-colors hover:text-amber-600 ${
                isActive ? "border-b-2 border-amber-500 pb-1" : "text-gray-500"
              }`
            }
          >
            {continent}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default ContinentFilter