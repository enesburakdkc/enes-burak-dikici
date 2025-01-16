
function About() {

    return (
        <section id="about" className="about min-h-[100vh] max-h-[calc(100vh-6rem)] flex flex-row justify-evenly items-center">
            <div className="max-h-[calc(100vh-6rem)] font-light bg-black text-white p-8 rounded-2xl">
                <h2 className="text-4xl font-medium">Hakkımda</h2>
                <br />
                <p>
                    React kütüphanesi üzerinde uzmanlaşan bir Frontend yazılım geliştiricisiyim.
                    Daha önce PHP ve MySQL ile gerçek projeler geliştirdim. Bir yıl boyunca bir
                    şirkette SEO & SEM Uzmanı ve Frontend Developer olarak çalıştım. Bu
                    süreçte yapay zeka API bağlantıları kullanarak SEO araçları geliştirdim ve
                    müşterilerimize özel WordPress web siteleri tasarladım.
                </p>
                <br />
                <p>
                    Şu anda Tailwind CSS, React, Node.js ve MongoDB gibi teknolojilerle Full-Stack yazılım
                    geliştirici olarak küçük bir start-up projesinde aktif olarak çalışıyorum.
                    Versiyon kontrol sistemleri için Git ve GitHub kullanıyorum.
                </p>
                <br />
                <p>
                    Kendimi geliştirebileceğim ve verimli çalışmalara imza atabileceğim takım
                    arkadaşları arıyorum. Projelerimi bir arada derlemek amacıyla React ile
                    kodladığım bu sitede projelerime göz atabilirsiniz.
                </p>
            </div>
        </section>
    )
}

export default About
