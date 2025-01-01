

function Projects() {

    const categories = [{ language: "PHP", projects: ["Comic Book"] },
    { language: "JavaScript", projects: ["Small Projects", "Calculator", "Weather App"] },
    { language: "React", projects: ["Counter", "Color Picker", "To Do List", "Digital Clock", "Portfolio"] }]

    return (
        <section id="projects" className="projects w-full min-h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)] flex flex-row justify-evenly items-center">
            <div className="w-full max-h-[calc(100vh-6rem)] font-light ">
                <h2 className="text-4xl font-medium">Projects</h2>
                <br />
                <div className="desktopProjects w-full flex flex-row gap-4 font-normal">

                    {categories.slice(0, 2).map((object) => {

                        return (
                            <div key={object.language} className="h-44 flex flex-col gap-4 grow bg-black text-white p-4 rounded-2xl transition-all ease-in-out duration-700 hover:grow-[100]">
                                <div>
                                    {object.language}
                                </div>
                                <div key={object.language} className="h-44 flex flex-row gap-4 items-center justify-center grow bg-black text-white rounded-2xl bg-transparent transition-all ease-in-out duration-700 hover:grow-[100]">
                                    {object.projects.map((item) => {

                                        return (
                                            <a key={item} href="#" className="min-w-4 h-full flex items-center justify-center text-center grow bg-white text-black p-4 rounded-2xl transition-all ease-in-out duration-700 cursor-pointer hover:grow-[100] hover:scale-105">
                                                {item}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="desktopProjects w-full flex flex-row gap-2 mt-4 font-normal">

                    {categories.slice(2, 3).map((object) => {

                        return (
                            <div key={object.language} className="h-44 flex flex-col gap-4 grow bg-black text-white p-4 rounded-2xl transition-all ease-in-out duration-700 hover:grow-[100]">
                                <div>
                                    {object.language}
                                </div>
                                <div key={object.language} className="h-44 flex flex-row gap-4 items-center justify-center grow bg-black text-white rounded-2xl bg-transparent transition-all ease-in-out duration-700 hover:grow-[100]">
                                    {object.projects.map((item) => {

                                        return (
                                            <a key={item} href="#" className="min-w-4 h-full flex items-center justify-center text-center grow bg-white text-black p-4 rounded-2xl transition-all ease-in-out duration-700 cursor-pointer hover:grow-[100] hover:scale-105">
                                                {item}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile */}
                <div className="mobileProjects hidden w-full flex flex-row flex-wrap gap-2">
                    {categories.map((object) => {

                        return (
                            object.projects.map((item) => {

                                return (
                                    <a key={item} className="text-center bg-black text-white p-4 rounded-2xl grow transition-all cursor-pointer hover:scale-105">
                                        {item}
                                    </a>
                                )
                            })
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
