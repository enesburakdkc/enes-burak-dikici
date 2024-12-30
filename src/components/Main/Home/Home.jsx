import Portre from "../../../assets/images/portre.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function Home() {

    return (
        <div className="flex h-[100vh] items-center gap-20 justify-between">
            <div className="h-96 flex flex-col justify-evenly items-start">
                <div className="flex flex-col gap-5  font-light">
                    <h1 className="text-6xl font-semibold">Enes Burak Dikici</h1>
                    <h2 className="text-xl font-medium">Front-End Developer</h2>
                    <p className="text-xl font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur ipsum ab nobis possimus explicabo vel?</p>
                </div>
                <button className="bg-black text-xl text-white p-5 mt-8 rounded-xl drop-shadow-lg transition-all hover:scale-105">Contact Me &nbsp;<FontAwesomeIcon icon={faLocationArrow} style={{ scale: '1.5', marginLeft: '0.5rem' }} /></button>
            </div>

            <div className="">
                <img src={Portre} alt="Portre" className="min-w-96 h-96 object-cover rounded-[7rem] object-custom shadow-xl" />
            </div>
        </div>
    )
}

export default Home
