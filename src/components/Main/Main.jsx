import Home from "./Home/Home"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"
import ContactMe from "./ContactMe/ContactMe"

function Main() {

    return (
        <main className="w-[65vw] flex flex-col pl-[5vw] m-auto">
            <Home />
            <About />
            <Skills />
            <Projects />
            <ContactMe />
        </main>
    )
}

export default Main
