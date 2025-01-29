import Portre from "../../../assets/images/portre.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function Home() {

    return (
        <section id="home" className="home flex min-h-[100vh] items-center gap-20 justify-between">
            <div className="homeContent h-96 flex flex-col gap-8 justify-evenly items-start mt-5">
                <div className="flex flex-col gap-5">
                    <h1 className="name text-5xl font-semibold">Enes Burak Dikici</h1>
                    <h2 className="text-xl font-medium">Front-End Geliştirici</h2>
                    <p className="text-xl font-medium">React ve Vue gibi modern JavaScript kütüphaneleri üzerinde uzmanlaşan bir Frontend yazılım geliştiricisiyim.</p>
                </div>
                <a href="https://wa.me/905379760543" target="_blank" className="bg-black text-xl text-white p-5 rounded-xl drop-shadow-lg transition-all hover:scale-105">İletişim &nbsp;<FontAwesomeIcon icon={faLocationArrow} className="ml-3 scale-150" /></a>
                <div className="social flex flex-row gap-8 ml-4 hidden">
                    <a href="https://github.com/enesburakdkc" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" className="transition-all cursor-pointer hover:scale-105 hover:drop-shadow-lg" /></a>
                    <a href="https://www.linkedin.com/in/enes-burak-dikici-48589b254/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="transition-all cursor-pointer hover:scale-105 hover:drop-shadow-lg" /></a>
                    <a href="mailto:dikicienesburak@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2x" className="transition-all cursor-pointer hover:scale-105 hover:drop-shadow-lg" /></a>
                </div>
            </div>


            <img src={Portre} alt="Portre" className="portre min-w-96 h-96 object-cover rounded-[7rem] object-custom shadow-xl" />

        </section>
    )
}

export default Home
