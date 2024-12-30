import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function Sidebar() {

    return (
        <aside className="w-[22.5vw] h-[calc(100vh-6rem)] fixed flex flex-col gap-8 justify-center items-center">
            <a href=""><FontAwesomeIcon icon={faGithub} size="2x" className="transition-all hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg"/></a>
            <a href=""><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="transition-all hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg"/></a>
            <a href=""><FontAwesomeIcon icon={faEnvelope} size="2x" className="transition-all hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg"/></a>
        </aside>
    )
}

export default Sidebar
