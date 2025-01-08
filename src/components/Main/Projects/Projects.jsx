

function Projects() {

    const categories = [
        {
            language: "PHP", projects: [
                { name: "Comic Book", url: "ceviri-manga/" },
            ]
        },
        {
            language: "JavaScript", projects: [
                { name: "Small Projects", url: "small-js-projects/" },
                { name: "Calculator", url: "js-calculator/" },
                { name: "Weather App", url: "js-weather-app/" },
            ]
        },
        {
            language: "React", projects: [
                { name: "Counter", url: "#" },
                { name: "Color Picker", url: "#" },
                { name: "To Do List", url: "#" },
                { name: "Digital Clock", url: "#" },
                { name: "Portfolio", url: "/" },
            ]
        },
    ]

    return (
        <section id="projects" className="projects w-full min-h-[100vh] max-h-[calc(100vh-6rem)] flex flex-row justify-evenly items-center">
            <div className="w-full max-h-[calc(100vh-6rem)] font-light ">
                <h2 className="text-4xl font-medium">Projeler</h2>
                <br />
                <div className="desktopProjects w-full flex flex-row gap-4 font-normal">

                    {categories.slice(0, 2).map((categorie) => {

                        return (
                            <div key={categorie.language} className="h-44 flex flex-col gap-4 grow bg-black text-white p-4 rounded-2xl transition-all ease-in-out duration-700 hover:grow-[100]">
                                <div>
                                    {categorie.language}
                                </div>
                                <div key={categorie.language} className="h-44 flex flex-row gap-4 items-center justify-center grow bg-black text-white rounded-2xl bg-transparent transition-all ease-in-out duration-700 hover:grow-[100]">
                                    {categorie.projects.map((project) => {

                                        return (
                                            <a key={project.name} href={project.url} target="_blank" className="min-w-4 h-full flex items-center justify-center text-center grow bg-white text-black p-4 rounded-2xl transition-all ease-in-out duration-700 cursor-pointer hover:grow-[100]">
                                                {project.name}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="desktopProjects w-full flex flex-row gap-2 mt-4 font-normal">

                    {categories.slice(2, 3).map((categorie) => {

                        return (
                            <div key={categorie.language} className="h-44 flex flex-col gap-4 grow bg-black text-white p-4 rounded-2xl transition-all ease-in-out duration-700 hover:grow-[100]">
                                <div>
                                    {categorie.language}
                                </div>
                                <div key={categorie.language} className="h-44 flex flex-row gap-4 items-center justify-center grow bg-black text-white rounded-2xl bg-transparent transition-all ease-in-out duration-700 hover:grow-[100]">
                                    {categorie.projects.map((project) => {

                                        return (
                                            <a key={project.name} href={project.url} target="_blank" className="min-w-4 h-full flex items-center justify-center text-center grow bg-white text-black p-4 rounded-2xl transition-all ease-in-out duration-700 cursor-pointer hover:grow-[100]">
                                                {project.name}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile */}
                <div className="mobileProjects hidden w-full flex flex-col gap-4">
                    {categories.map((categorie) => {

                        return (

                            <div key={categorie.language} className="flex p-4 flex-col gap-2 bg-black rounded-2xl">
                                <p className="font-semibold text-white mb-2">{categorie.language}</p>

                                <div className="flex flex-row gap-2 flex-wrap">
                                    {categorie.projects.map((project) => {

                                        return (
                                            <a key={project.name} href={project.url} target="_blank" className="text-center bg-white text-black py-2 px-4 rounded-2xl grow transition-all cursor-pointer">
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
        </section>
    )
}

export default Projects
