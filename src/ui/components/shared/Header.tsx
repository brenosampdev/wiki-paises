import { NavLink } from "react-router-dom"

import ContinentFilter from "../home/ContinentFilter"
import MobileNav from "./MobileHeader"

function Header() {
    return (
        <nav className="flex flex-row justify-between items-center px-6 py-6 font-medium border-b border-b-border-primary">
            <h3 className="text-3xl font-serif">
                <NavLink to="/">WikiPaíses</NavLink>
            </h3>

            <div className="hidden md:block">
                <ContinentFilter variant="desktop" />
            </div>

            <div className="md:hidden">
                <MobileNav />
            </div>
        </nav>
    )
}

export default Header