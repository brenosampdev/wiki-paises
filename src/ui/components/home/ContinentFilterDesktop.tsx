import { Link } from "react-router-dom"
import type { ContinentVariantPropsType } from "./types/ContinentVariantPropsType"

function ContinentFilterDesktop({ to, label, isActive }: ContinentVariantPropsType) {
    return (
        <Link
            to={to}
            className={`transition-colors hover:text-amber-600 ${
                isActive 
                    ? "border-b-2 border-amber-500 pb-1" 
                    : "text-gray-500"
            }`}
        >
            {label}
        </Link>
    )
}

export default ContinentFilterDesktop