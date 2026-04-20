import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
    return(
    <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-6 md:px-20 py-10 flex flex-row md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-serif italic text-stone-100">
                    WikiPaíses
                </h3>
                <p className="text-xs uppercase tracking-wider text-stone-500">
                ©2026 Desenvolvido por Breno Sampaio
                </p>
            </div>

            <div className="flex flex-col items-center gap-5">
                <a 
                    href="https://github.com/brenosampdev"
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-stone-300 hover:text-amber-500 transition-colors"
                    >
                    <GithubLogoIcon size={20} />
                    <span className="hidden sm:inline">GitHub</span>
                </a>


                <a 
                    href="https://linkedin.com/in/brenosampdev/"
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-stone-300 hover:text-amber-500 transition-colors"
                    >
                    <LinkedinLogoIcon size={20} />
                    <span className="hidden sm:inline">LinkedIn</span>
                </a>
            </div>
        </div>
    </footer>
    )
}

export default Footer