import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function Sidebar() {

    return (
        <aside className="aside w-[22.5vw] h-[calc(100vh-6rem)] fixed flex flex-col gap-8 justify-center items-center">
            <a href="https://github.com/enesburakdkc" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" className="transition-all cursor-pointer hover:scale-105 hover:drop-shadow-lg"/></a>
            <a href="https://www.linkedin.com/in/enes-burak-dikici-48589b254/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="transition-all cursor-pointer hover:scale-105 hover:drop-shadow-lg"/></a>
            <a href="mailto:dikicienesburak@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2x" className="transition-all cursor-pointer hover:scale-105 hover:drop-shadow-lg"/></a>
        </aside>
    )
}

export default Sidebar
