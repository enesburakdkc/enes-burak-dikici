import { useState, useEffect } from "react"
import Logo from "../../../public/logo-enes.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuClosing, setIsMenuClosing] = useState(true)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const categories = [
        { id: 'home', name: 'Ana Sayfa' },
        { id: 'about', name: 'Hakkımda' },
        { id: 'skills', name: 'Yetenekler' },
        { id: 'projects', name: 'Projeler' },
        { id: 'contact', name: 'İletişim' }]

    const toggleMenu = () => {
        isMenuOpen ? setTimeout(() => {setIsMenuOpen(false)}, 1200) : setIsMenuOpen(true)
        setIsMenuClosing(!isMenuClosing)
    }

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.navbar')) {
            setIsMenuClosing(true)
            setTimeout(() => {setIsMenuOpen(false)}, 1200)
        }
    }

    const  handleScroll = (id) => {
        const element = document.getElementById(id)
        if (element) {
            lastScrollY > element.offsetTop ? window.scrollTo({ top: element.offsetTop - 96, behavior: 'smooth' }) : window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
        }
    }

    const handleScrollVisibility = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 96) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollVisibility)
        return () => window.removeEventListener('scroll', handleScrollVisibility)
    }, [lastScrollY])

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => document.removeEventListener('click', handleOutsideClick)
    }, [])

    return (
        <nav className={`navbar w-[75vw] h-24 z-20 fixed flex items-center justify-between font-semibold mx-auto left-[50%] -translate-x-1/2 bg-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <a onClick={() => handleScroll('home')} className="cursor-pointer logo h-[100%] mt-3 transition-all hover:scale-105 hover:drop-shadow-lg"><img src={Logo} alt="Logo" className="h-[100%]" /></a>
            <ul className="desktopMenu flex flex-row gap-12">
                {categories.map(categorie => (
                    <li key={categorie.id} className="cursor-pointer transition-all hover:scale-105 hover:drop-shadow-lg">
                        <a onClick={() => handleScroll(categorie.id)}>{categorie.name}</a>
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
                        <li key={categorie.id} className={`cursor-pointer px-3 py-2 bg-black text-white text-center border border-white rounded-2xl ${isMenuClosing ? 'animate-slideOut opacity-1' : 'animate-slideIn opacity-0'}`} style={{ animationDelay: isMenuClosing ? `${0.8 - (index * 0.2)}s` : `${index * 0.2}s` }}>
                            <a onClick={() => handleScroll(categorie.id)}>{categorie.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Header
