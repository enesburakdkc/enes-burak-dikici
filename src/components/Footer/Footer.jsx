import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    
    return (
        <footer className="footer bg-black text-white mt-20 py-8">
            <div className="footerContainer max-w-[65vw] mx-auto pl-[5vw]">

                {/* Footer Top Section */}
                <div className="footerTop flex flex-row justify-between items-start gap-8">

                    {/* Quic Access Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
                        <ul className="space-y-2">
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="#home">Ana Sayfa</a>
                            </li>
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="#about">Hakkımda</a>
                            </li>
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="#skills">Yetenekler</a>
                            </li>
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="#projects">Projeler</a>
                            </li>
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="#contact">İletişim</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information Section */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-4">İletişim</h3>
                        <ul className="space-y-2">
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="tel:+905379760543">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                    +90 537 976 0543
                                </a>
                            </li>
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="https://wa.me/905379760543" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                                    WhatsApp
                                </a>
                            </li>
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="https://www.linkedin.com/in/enes-burak-dikici-48589b254/">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" />
                                    LinkedIn
                                </a>
                            </li>
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="mailto:dikicienesburak@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                    dikicienesburak@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
                        <ul className="flex justify-center gap-4">
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="https://github.com/enesburakdkc" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </li>
                            <li className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105">
                                <a href="https://www.linkedin.com/in/enes-burak-dikici-48589b254/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer bottom section */}
                <div className="border-t border-white mt-8 pt-4 text-center text-sm">
                    <p>© 2025 Enes Burak Dikici. Tüm hakları saklıdır.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer