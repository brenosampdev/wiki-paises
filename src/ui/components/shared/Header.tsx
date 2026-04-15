import { useState } from 'react'
import { NavLink, useLocation } from "react-router-dom"
import { ListIcon, XIcon } from "@phosphor-icons/react";

const continents = ['africa', 'americas', 'asia', 'europe', 'oceania']

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const [prevSearch, setPrevSearch] = useState(location.search)
    let Icon
    let menuVisibility
    
    
    if (location.search !== prevSearch) {
        setPrevSearch(location.search)
        setIsOpen(false)
    }
    
    if (isOpen) {
        Icon = XIcon
        menuVisibility = 'flex'
    } else {
        Icon = ListIcon
        menuVisibility = 'hidden sm:flex'
    }

    return(
        <>
        <nav className="flex flex-col sm:flex-row sm:justify-between justify-between items-center py-6 font-medium">
            <div className="flex justify-between items-center w-full">
                <h3 className="text-3xl font-serif">
                    <NavLink to="/">WikiPaíses</NavLink>
                </h3>

                <button
                    className="sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <Icon size={24} />
                </button>
            </div>
            <ul className={`flex flex-col sm:flex-row uppercase justify-end items-end w-full transition-all ease-in ${menuVisibility}`}>
                <div className='flex flex-col bg-white rounded-lg border border-gray-200 shadow-lg py-1 sm:flex-row sm:gap-5 sm:bg-transparent sm:border-none sm:shadow-none sm:py-0 sm:rounded-none'>
                    {continents.map((continent) => (
                        <li key={continent} className="w-full sm:w-auto">
                            <NavLink to={`/?region=${continent}`} className={'block py-2.5 px-4 text-sm hover:bg-gray-100 sm:hover:bg-transparent rounded-md mx-1 sm:mx-0 sm:rounded-none sm:py-1.5 sm:px-0 transition-colors border-b-2 border-transparent focus-within:border-amber-300'}>
                                {continent}
                            </NavLink>
                        </li>
                    ))}
                </div>
            </ul>
        </nav>

        </>
    )
}

export default Header