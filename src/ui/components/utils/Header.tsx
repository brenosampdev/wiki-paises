import { NavLink } from "react-router-dom"

function Header() {
    const continents = ['africa', 'americas', 'asia', 'europe', 'oceania']
    return(
        <>
        <nav className="flex flex-row justify-between items-center py-6 font-medium">
            <h3 className="text-3xl font-serif">
                <NavLink to='/'>WikiPaíses</NavLink>
            </h3>
            <ul className="flex flex-row gap-5 uppercase justify-center items-center">
                {continents.map((continent) => (
                    <li key={continent} className="py-1.5 border-b-2 border-transparent focus-within:border-amber-300 transition-all ease-in-out duration-400">
                        <NavLink to={`/?region=${continent}`}>{continent}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>

        </>
    )
}

export default Header