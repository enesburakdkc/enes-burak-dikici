import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faWordpress } from "@fortawesome/free-brands-svg-icons"


function Skills() {

    return (
        <section id="skills" className="skills min-h-[100vh] max-h-[calc(100vh-6rem)] flex flex-col gap-12 justify-center font-light text-white">
            <div className="max-h-[calc(100vh-6rem)] flex flex-row gap-24 justify-between items-center font-light text-white">
                <div className="w-full max-h-[calc(100vh-6rem)] bg-black p-8 rounded-2xl">
                    <h2 className="text-4xl font-medium">Yetenekler</h2>
                    <br />
                    <ul className="flex flex-col gap-4">
                        <li><span className="font-semibold">Frontend:</span> HTML5, CSS3, Tailwind CSS, JavaScript ES6, React, Vue3</li>
                        <li><span className="font-semibold">Backend:</span> PHP, Node.js</li>
                        <li><span className="font-semibold">Database:</span> MySQL, MongoDB</li>
                    </ul>
                </div>

                <ul className="icons-temporal grid grid-cols-2 gap-20 text-black py-8 px-12 place-items-center">
                    <li><FontAwesomeIcon icon={faPhp} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faWordpress} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faHtml5} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faCss3Alt} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faJs} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faReact} size="2x" className="scale-150" /></li>
                </ul>
            </div>

            <ul className="icons hidden w-[100%] flex flex-row justify-evenly text-black">
                <li><FontAwesomeIcon icon={faPhp} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faWordpress} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faHtml5} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faCss3Alt} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faJs} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faReact} size="2x" className="scale-150" /></li>
            </ul>
        </section>
    )
}

export default Skills
