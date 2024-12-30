import Logo from "../../../public/logo-enes.png"

function Header() {

    const categories = ["Home", "About", "Skills", "Projects", "Contact Me"]

    return (
        <header className="w-[75vw] h-24 fixed flex items-center justify-between font-semibold mx-auto left-[50%] -translate-x-1/2 bg-white">
            <a href="" className="h-[100%] transition-all hover:scale-105 hover:drop-shadow-lg"><img src={Logo} alt="Logo" className="h-[100%]" /></a>
            <ul className="flex flex-row gap-12">
                {categories.map(categorie => (
                    <li key={categorie} className="transition-all hover:scale-105 hover:drop-shadow-lg"><a href="">{categorie}</a></li>
                ))}
            </ul>
        </header>
    )
}

export default Header
