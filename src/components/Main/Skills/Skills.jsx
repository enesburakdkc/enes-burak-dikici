import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNode, faVuejs, faReact, faJs, faPhp, faWordpress } from "@fortawesome/free-brands-svg-icons"


function Skills() {

    return (
        <section id="skills" className="skills min-h-[100vh] max-h-[calc(100vh-6rem)] flex flex-col gap-12 justify-center font-light text-white">
            <div className="max-h-[calc(100vh-6rem)] flex flex-row gap-24 justify-between items-center font-light text-white">
                <div className="w-full max-h-[calc(100vh-6rem)] bg-black p-8 rounded-2xl">
                    <h2 className="text-4xl font-medium">Yetenekler</h2>
                    <br />
                    <ul className="flex flex-col gap-4">
                        <li><span className="font-semibold">Frontend:</span> React.js, Next +13 App, Vue 3, Nuxt 3, TypeScript, JavaScript ES6, Tailwind CSS, CSS3, HTML5</li>
                        <li><span className="font-semibold">Backend:</span> Node.js, PHP</li>
                        <li><span className="font-semibold">Database:</span> MongoDB, MySQL</li>
                        <li><span className="font-semibold">CMS:</span> WordPress, Ideasoft, TiciMax</li>
                        <li><span className="font-semibold">SEO & SEM:</span> Google Analytics, Search Console, Tag Manager, Merchant Center, Google Ads, Ahrefs, Screaming Frog</li>
                    </ul>
                </div>

                <ul className="icons-temporal grid grid-cols-2 gap-20 text-black py-8 px-12 place-items-center">
                    <li><FontAwesomeIcon icon={faNode} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faVuejs} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faReact} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faJs} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faPhp} size="2x" className="scale-150" /></li>
                    <li><FontAwesomeIcon icon={faWordpress} size="2x" className="scale-150" /></li>
                </ul>
            </div>

            <ul className="icons hidden w-[100%] flex flex-row justify-evenly text-black">
                <li><FontAwesomeIcon icon={faNode} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faVuejs} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faReact} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faJs} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faPhp} size="2x" className="scale-150" /></li>
                <li><FontAwesomeIcon icon={faWordpress} size="2x" className="scale-150" /></li>
            </ul>
        </section>
    )
}

export default Skills
