import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faWordpress } from "@fortawesome/free-brands-svg-icons"


function Skills() {

    return (
        <section id="skills" className="skills min-h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)] flex flex-col gap-12 justify-center items-center font-light text-white">
            <div className="max-h-[calc(100vh-6rem)] flex flex-row gap-12 justify-between items-center font-light text-white">
                <div className="max-max-h-[calc(100vh-6rem)] bg-black p-8 rounded-2xl">
                    <h2 className="text-4xl font-medium">Skills</h2>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat totam corrupti praesentium consequuntur? Sint dolor velit culpa commodi consectetur excepturi totam id tenetur omnis corporis. Maiores magni optio neque corrupti suscipit? Qui et vel earum voluptatem est. Eius, alias natus. Ipsa magni atque vel quasi quisquam fugit eum necessitatibus at quas voluptates, odit sit iure recusandae ipsum doloribus! Aspernatur voluptates molestias magnam, sint expedita quisquam atque facilis namodit reprehenderit porro itaque reprehenderit error!</p>
                </div>

                <ul className="icons-temporal grid grid-cols-2 gap-20 text-black py-8 px-12 place-items-center">
                    <li><FontAwesomeIcon icon={faHtml5} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faCss3Alt} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faJs} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faReact} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faPhp} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faWordpress} size="2x" className="scale-150" /></li>
                </ul>
            </div>

            <ul className="icons hidden w-[100%] flex flex-row justify-evenly text-black">
                <li><FontAwesomeIcon icon={faHtml5} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faCss3Alt} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faJs} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faReact} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faPhp} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faWordpress} size="2x" className="scale-150" /></li>
            </ul>
        </section>
    )
}

export default Skills
