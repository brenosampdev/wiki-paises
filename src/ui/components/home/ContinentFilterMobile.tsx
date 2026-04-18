import { Link } from "react-router-dom"
import type { ContinentVariantPropsType } from "./types/ContinentVariantPropsType"

function ContinentFilterMobile({ to, label, onClick }: ContinentVariantPropsType) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="text-left text-sm uppercase font-medium transition-colors"
        >
            {label}
        </Link>
    )
}

export default ContinentFilterMobile