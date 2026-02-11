import { useState } from 'react';
import Modal from '../Modal/Modal';

function Projects() {
    const [selectedMp4, setSelectedMp4] = useState(null);

    const categories = [
        {
            language: "WordPress", projects: [
                { name: "We Liva", url: "https://weliva.com.tr/", clickable: true },
                { name: "Corpy", url: "http://corpy.com.tr/", clickable: true },
                { name: "Staticex", url: "https://staticex.com.tr/", clickable: true },
                { name: "Hotel", url: "https://dessuiteshotel.com/", clickable: true },
                { name: "May Fair Estates", url: "https://mayfairestates.net/wp/", clickable: true },
            ]
        },
        {
            language: "Özel Yazılım", projects: [
                { name: "EduDiamond", url: "https://kurs.edudiamond.com/", clickable: true },
                { name: "Comic Book", url: "https://cevirimanga.great-site.net/", clickable: true },
                { name: "Weather App", url: "https://vue-tailwind-weather-app-five.vercel.app/", clickable: true },
                { name: "Rapkology", secondRow: "(Tasarım)", url: "https://rapkology-blond.vercel.app/", clickable: true },
                { name: "Sütlü Aş", secondRow: "(Tasarım)", url: "https://sutluas.com/", clickable: true },
                { name: "Belgrad Country", secondRow: "(Tasarım)", url: "https://belgradcountry.com/", clickable: true },
                { name: "Mayfair Estates", secondRow: "(Tasarım)", url: "https://mayfairestates.net/", clickable: true },
                { name: "Calculator", url: "https://js-calculator-roan-theta.vercel.app/", clickable: true },
                { name: "Loodo", url: "#", clickable: true, mp4: "loodo" },
                { name: "Diğerleri", url: "https://github.com/enesburakdkc", clickable: true },
            ]
        }
    ]

    return (
        <section id="projects" className="projects min-h-[100vh] max-h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-16">
            <div className="w-full max-w-7xl">
                <h2 className="text-4xl font-medium">Projeler</h2>

                <div className="flex flex-col gap-16 mt-12">
                    {categories.map((category) => (
                        <div key={category.language} className="w-full">
                            <h3 className="text-2xl font-medium mb-4 pl-2 border-l-4 border-black">{category.language}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {category.projects.map((project) => (
                                    <a
                                        key={project.name}
                                        href={project.clickable ? project.url : undefined}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => {
                                            if (project.mp4) {
                                                e.preventDefault();
                                                setSelectedMp4(project.mp4);
                                            }
                                        }}
                                        className={`
                                            group relative flex flex-col items-center justify-center 
                                            h-40 p-6 bg-neutral-900 rounded-2xl 
                                            transform transition-all duration-300 ease-out 
                                            hover:-translate-y-2 hover:shadow-2xl hover:bg-black
                                            ${!project.clickable ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                                        `}
                                    >
                                        <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <span className="text-white text-lg font-medium text-center z-10 group-hover:scale-105 transition-transform duration-300">
                                            {project.name}
                                        </span>
                                        {project.secondRow && (
                                            <span className="text-gray-400 text-sm mt-1 z-10 group-hover:text-white transition-colors duration-300">
                                                {project.secondRow}
                                            </span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                mp4={selectedMp4}
                onClose={() => setSelectedMp4(null)}
            />
        </section>
    )
}

export default Projects
