import { useState, useEffect } from "react";
import Logo from "../../../public/logo-enes.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuClosing, setIsMenuClosing] = useState(true)

    const categories = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact Me' }];

    const toggleMenu = () => {
        isMenuOpen ? setTimeout(() => {setIsMenuOpen(false)}, 1200) : setIsMenuOpen(true)
        setIsMenuClosing(!isMenuClosing)
    }

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.navbar')) {
            setIsMenuClosing(true)
            setTimeout(() => {setIsMenuOpen(false)}, 1200)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    return (
        <nav className="navbar w-[75vw] h-24 z-20 fixed flex items-center justify-between font-semibold mx-auto left-[50%] -translate-x-1/2 bg-white">
            <a href="#home" className="logo h-[100%] mt-3 transition-all hover:scale-105 hover:drop-shadow-lg"><img src={Logo} alt="Logo" className="h-[100%]" /></a>
            <ul className="desktopMenu flex flex-row gap-12">
                {categories.map(categorie => (
                    <li key={categorie.id} className="transition-all hover:scale-105 hover:drop-shadow-lg">
                        <a href={"#" + categorie.id}>{categorie.name}</a>
                    </li>
                ))}
            </ul>
            <div className="faBars hidden justify-end cursor-pointer transition-all hover:scale-105" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </div>

            {/* Hamburger Menu */}
            <div className={`right-4 top-28 z-50 ${isMenuOpen ? 'absolute' : 'hidden'}`}>
                <ul className="mobilMenu flex flex-col gap-4">
                    {categories.map((categorie, index) => (
                        <li key={categorie.id} className={`px-3 py-2 bg-black text-white text-center border border-white rounded-2xl ${isMenuClosing ? 'animate-slideOut opacity-1' : 'animate-slideIn opacity-0'}`} style={{ animationDelay: isMenuClosing ? `${0.8 - (index * 0.2)}s` : `${index * 0.2}s` }}>
                            <a href={"#" + categorie.id}>{categorie.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Header
