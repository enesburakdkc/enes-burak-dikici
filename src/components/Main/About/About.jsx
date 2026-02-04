
function About() {

    return (
        <section id="about" className="about min-h-[100vh] max-h-[calc(100vh-6rem)] flex flex-row justify-evenly items-center">
            <div className="max-h-[calc(100vh-6rem)] font-light bg-black text-white p-8 rounded-2xl">
                <h2 className="text-4xl font-medium">Hakkımda</h2>
                <br />
                <p>
                    Modern <b>JavaScript</b> kütüphaneleri üzerinde uzmanlaşan <b>Full Stack</b> web yazılım geliştiricisiyim.
                </p>
                <br />
                <p>
                    <b>React</b>, <b>Next</b>, <b>Vue 3</b> ve <b>Nuxt 3</b> gibi teknolojilerle ön yüz geliştirme konularında
                    uzmanlığım bulunmakta olup, <b>Node.js</b> ve <b>MongoDB</b> gibi teknolojilerle de Full Stack
                    projelerde aktif olarak yer almaktayım. <b>REST API</b> ve <b>WebSocket (Socket.IO)</b>
                    mimarileriyle veri iletimi konusunda deneyim sahibiyim. Versiyon kontrol sistemi
                    olarak <b>Git</b> ve <b>GitHub</b> kullanıyorum. Geliştirici gözüyle mimari kararlar alabilmek adına
                    yapay zeka destekli analiz yöntemlerini etkin şekilde kullanıyorum. <b>Linux</b> tabanlı
                    sunucu tarafına hakimim.
                </p>
                <br />
                <p>
                    Aktif şekilde <b>freelancer</b> olarak hizmet verdiğim şirketler mevcut.
                </p>
                <br />
                <p>
                    <b>GençBizz Girişimcilik Programı</b> yarışması kapsamında ekibimle geliştirdiğimiz <b>start-up</b>
                    projemizle Türkiye genelinde final aşamasına kadar yükselebildik. Bu ve bunun gibi
                    projelerde <b>Yazılım Mimarı</b> ve <b>Full Stack Developer</b> olarak görev alıyor, sistemin teknik
                    mimarisini tasarlıyorum.
                </p>
            </div>
        </section>
    )
}

export default About
