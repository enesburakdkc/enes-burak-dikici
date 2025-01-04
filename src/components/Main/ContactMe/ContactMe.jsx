import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function ContactMe() {

    const email = "dikicienesburak@gmail.com"

    return (
        <section id="contact" className="contact projects min-h-[100vh] max-h-[calc(100vh-6rem)] flex flex-row justify-evenly items-center">
            <div className="w-full max-h-[calc(100vh-6rem)] font-light bg-black text-white p-8 box-border rounded-2xl">
                <h2 className="text-4xl font-medium">İletişim</h2>
                <br />
                <div className="formContainer flex flex-row gap-8 justify-between">
                    <form action={"https://formsubmit.co/" + email} method="POST" className="flex flex-col grow gap-4">
                        <label htmlFor="name" className="mb-[-0.5rem]">Ad Soyad:</label>
                        <input type="text" name="name" placeholder="Ad Soyad" required className="p-2 bg-white text-black rounded-md focus:ring focus:ring-gray-300 focus:outline-none focus:drop-shadow-[0_0_7px_rgba(255,255,255,1)] invalid:ring-red-500 invalid:text-red-500 transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)]" />
                        <label htmlFor="email" className="mb-[-0.5rem]">E-Posta:</label>
                        <input type="email" name="email" placeholder="ornek@gmail.com" required className="p-2 bg-white text-black rounded-md focus:ring focus:ring-gray-300 focus:outline-none focus:drop-shadow-[0_0_7px_rgba(255,255,255,1)] invalid:ring-red-500 invalid:text-red-500 transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)]" />
                        <label htmlFor="message" className="mb-[-0.5rem]">Mesaj:</label>
                        <textarea name="message" placeholder="Mesaj" required className="min-h-28 p-2 bg-white text-black rounded-md focus:ring focus:ring-gray-300 focus:outline-none focus:drop-shadow-[0_0_7px_rgba(255,255,255,1)] invalid:ring-red-500 invalid:text-red-500 transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)]" />
                        <button type="submit" className="p-2 mt-2 bg-white text-black rounded-md focus:ring focus:ring-gray-300 focus:outline-none focus:drop-shadow-[0_0_7px_rgba(255,255,255,1)] transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)]">Gönder</button>
                    </form>
                    <div className="contactSocial pt-8 flex grow-0 rounded-md ">
                        <ul className="flex flex-col justify-between">
                            <li><a href="tel:+905379760543" target="_blank"><FontAwesomeIcon icon={faPhone} size="2x" className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105" /></a></li>
                            <li><a href="https://wa.me/905379760543" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size="2x" className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105" /></a></li>
                            <li><a href="mailto:dikicienesburak@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2x" className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105" /></a></li>
                            <li><a href="https://www.linkedin.com/in/enes-burak-dikici-48589b254/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105" /></a></li>
                            <li><a href="https://github.com/enesburakdkc" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" className="transition-all hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] hover:scale-105" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
