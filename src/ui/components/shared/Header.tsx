import { useState } from "react";
import { NavLink } from "react-router-dom"


import ContinentFilter from "../home/ContinentFilter"

import { ListIcon, XIcon } from "@phosphor-icons/react";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return(
        <>
        <nav className="flex flex-row sm:flex-row sm:justify-between justify-between items-center py-6 font-medium">
            <h3 className="text-3xl font-serif">
                <NavLink to="/">WikiPaíses</NavLink>
            </h3>

            <div className="hidden md:block">
                <ContinentFilter variant="desktop" />
            </div>

            <button 
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
            >
                {isMenuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
            </button>

            {isMenuOpen && (
            <div className="absolute right-6 top-20 z-50 w-64 rounded-lg bg-white p-6 shadow-xl md:hidden">
                <ContinentFilter variant="mobile" closeMenu={() => setIsMenuOpen(false)} />
            </div>
            )}

        </nav>

        </>
    )
}

export default Header