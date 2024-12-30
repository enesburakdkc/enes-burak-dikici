import Logo from "../../../public/logo-enes.png"

function Header() {

    const categories = [
        {id: 'home', name: 'Home'},
        {id: 'about', name: 'About'},
        {id: 'skills', name: 'Skills'},
        {id: 'projects', name: 'Projects'},
        {id: 'contact', name: 'Contact Me'}]

    return (
        <header className="w-[75vw] h-24 z-50 fixed flex items-center justify-between font-semibold mx-auto left-[50%] -translate-x-1/2 bg-white">
            <a href="#home" className="h-[100%] transition-all hover:scale-105 hover:drop-shadow-lg"><img src={Logo} alt="Logo" className="h-[100%]" /></a>
            <ul className="flex flex-row gap-12">
                {categories.map(categorie => (
                    <li key={categorie.id} className="transition-all hover:scale-105 hover:drop-shadow-lg"><a href={"#" + categorie.id}>{categorie.name}</a></li>
                ))}
            </ul>
        </header>
    )
}

export default Header
