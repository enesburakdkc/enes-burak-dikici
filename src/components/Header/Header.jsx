

function Header() {

    const categories = ["Home", "About", "Skills", "Projects", "Contact Me"]

    return (
        <header className="w-[75vw] h-24 flex m-auto items-center justify-between font-semibold">
            <img src="" alt="Logo" />
            <ul className="flex flex-row gap-12">
                {categories.map(categorie => (
                    <li key={categorie}><a href="">{categorie}</a></li>
                ))}
            </ul>
        </header>
    )
}

export default Header
