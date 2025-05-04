import { useState } from 'react';
import Modal from '../Modal/Modal';

function Projects() {
    const [selectedMp4, setSelectedMp4] = useState(null);

    const categories = [
        {
            language: "Vue3 / Nuxt3", projects: [
                { name: "Weather App", url: "vue-tailwind-weather-app/", clickable: true },
                { name: "EduDiamond", url: "https://edudiamond.com/", clickable: true },
            ]
        },
        {
            language: "React / Next", projects: [
                { name: "Color Picker", url: "react-color-picker/", clickable: true },
                { name: "To Do List", url: "react-tailwind-to-do-list/", clickable: true },
                { name: "Portfolio", url: "/", clickable: true },
                { name: "Start-Up", url: "#", clickable: true, mp4: "loodo" },
            ]
        },
        {
            language: "JavaScript", projects: [
                { name: "Small Projects", url: "small-js-projects/", clickable: true },
                { name: "Calculator", url: "js-calculator/", clickable: true },
                { name: "Weather App", url: "js-weather-app/", clickable: true },
            ]
        },
        {
            language: "PHP", projects: [
                { name: "Comic Book", url: "ceviri-manga/", clickable: true },
            ]
        },
        {
            language: "WordPress", projects: [
                { name: "Staticex", url: "https://tepeseobeta.online/staticex/", clickable: true },
                { name: "Hotel", url: "https://tepeseobeta.online/zeugma/", clickable: true },
            ]
        },
    ]

    return (
        <section id="projects" className="projects w-full min-h-[100vh] max-h-[calc(100vh-6rem)] flex flex-row justify-evenly items-center">
            <div className="w-full max-h-[calc(100vh-6rem)] font-light ">
                <h2 className="text-4xl font-medium">Projeler</h2>
                <br />
                {categories.slice(0, 2).map((categorie) => {

                    return (
                        <div key={categorie.language} className="desktopProjects w-full flex flex-row gap-2 mt-4 font-normal">
                            <div className="h-36 flex flex-col gap-4 grow bg-black text-white p-4 rounded-2xl transition-all duration-700 hover:grow-[100]">
                                <div>
                                    {categorie.language}
                                </div>
                                <div className="h-36 flex flex-row gap-4 items-center justify-center grow bg-black text-white rounded-2xl bg-transparent transition-all duration-700 hover:grow-[100]">
                                    {categorie.projects.map((project) => {

                                        return (
                                            <a
                                                key={project.name}
                                                href={project.clickable ? project.url : undefined}
                                                target="_blank"
                                                onClick={(e) => {
                                                    if (project.mp4) {
                                                        e.preventDefault();
                                                        setSelectedMp4(project.mp4);
                                                    }
                                                }}
                                                className={`min-w-4 h-full flex items-center justify-center text-center grow bg-white text-black p-4 rounded-2xl transition-all duration-700 hover:grow-[100] ${!project.clickable ? 'cursor-not-allowed hover:bg-red-500' : 'cursor-pointer'}`}
                                            >
                                                {project.name}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className="desktopProjects w-full flex flex-row gap-4 mt-4 font-normal">

                    {categories.slice(2, 4).map((categorie) => {

                        return (
                            <div key={categorie.language} className="h-36 flex flex-col gap-4 grow bg-black text-white p-4 rounded-2xl transition-all duration-700 hover:grow-[100]">
                                <div>
                                    {categorie.language}
                                </div>
                                <div key={categorie.language} className="h-36 flex flex-row gap-4 items-center justify-center grow bg-black text-white rounded-2xl bg-transparent transition-all duration-700 hover:grow-[100]">
                                    {categorie.projects.map((project) => {

                                        return (
                                            <a
                                                key={project.name}
                                                href={project.clickable ? project.url : undefined}
                                                target="_blank"
                                                onClick={(e) => {
                                                    if (project.mp4) {
                                                        e.preventDefault();
                                                        setSelectedMp4(project.mp4);
                                                    }
                                                }}
                                                className={`min-w-4 h-full flex items-center justify-center text-center grow bg-white text-black p-4 rounded-2xl transition-all duration-700 hover:grow-[100] ${!project.clickable ? 'cursor-not-allowed hover:bg-red-500' : 'cursor-pointer'}`}
                                            >
                                                {project.name}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {categories.slice(4, 5).map((categorie) => {

                    return (
                        <div key={categorie.language} className="desktopProjects w-full flex flex-row gap-2 mt-4 font-normal">
                            <div className="h-36 flex flex-col gap-4 grow bg-black text-white p-4 rounded-2xl transition-all duration-700 hover:grow-[100]">
                                <div>
                                    {categorie.language}
                                </div>
                                <div className="h-36 flex flex-row gap-4 items-center justify-center grow bg-black text-white rounded-2xl bg-transparent transition-all duration-700 hover:grow-[100]">
                                    {categorie.projects.map((project) => {

                                        return (
                                            <a
                                                key={project.name}
                                                href={project.clickable ? project.url : undefined}
                                                target="_blank"
                                                onClick={(e) => {
                                                    if (project.mp4) {
                                                        e.preventDefault();
                                                        setSelectedMp4(project.mp4);
                                                    }
                                                }}
                                                className={`min-w-4 h-full flex items-center justify-center text-center grow bg-white text-black p-4 rounded-2xl transition-all duration-700 hover:grow-[100] ${!project.clickable ? 'cursor-not-allowed hover:bg-red-500' : 'cursor-pointer'}`}
                                            >
                                                {project.name}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* Mobile */}
                <div className="mobileProjects hidden w-full flex flex-col gap-4">
                    {categories.map((categorie) => {

                        return (

                            <div key={categorie.language} className="flex p-4 flex-col gap-2 bg-black rounded-2xl">
                                <p className="font-semibold text-white mb-2">{categorie.language}</p>

                                <div className="flex flex-row gap-2 flex-wrap">
                                    {categorie.projects.map((project) => {

                                        return (
                                            <a
                                                key={project.name}
                                                href={project.clickable ? project.url : undefined}
                                                target="_blank"
                                                onClick={(e) => {
                                                    if (project.mp4) {
                                                        e.preventDefault();
                                                        setSelectedMp4(project.mp4);
                                                    }
                                                }}
                                                className={`text-center bg-white text-black py-2 px-4 rounded-2xl grow transition-all cursor-pointer ${!project.clickable ? 'cursor-not-allowed hover:bg-red-500' : 'cursor-pointer'}`}
                                            >
                                                {project.name}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
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
