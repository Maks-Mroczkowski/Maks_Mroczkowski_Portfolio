import {RevealOnScroll } from "../RevealOnScroll";

export const Home =() => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className='text-5xl md:text-7xl font-bold mb-6  bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right'>Hi, I am Maks </h1>
            <h2 className='text-5xl md:text-5xl font-bold mb-6  leading-right'>Bioengineer @ Imperial College London </h2>




            <div className="flex justify-center space-x-4">

            <a
            href="CV.pdf" target="_blank" rel="noopener noreferrer" className= " flex items-center bg-gray-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" > 
            View My CV
            </a>

            <a
            href="https://github.com/Maks-Mroczkowski" target="_blank" rel="noopener noreferrer" className="flex items-center font-medium rounded bg-gray-800 space-x-2 px-6 py-3  text-white transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" > 
            <img src= "photos/github.png" alt ="Github" className="w-8 h-8" />
            <span>Github</span>
            </a>

            <a
             href="https://www.linkedin.com/in/maksymilian-mroczkowski-388434332/" target="_blank" rel="noopener noreferrer" className="flex items-center font-medium rounded bg-gray-800 space-x-2 px-6 py-3 text-white transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" >
            <img src="photos/Linkedin.png" alt="Linkedin" className="w-7 h-7 " />
            <span>Linkedin</span>
            </a>



            </div>


            

        </div>
        </RevealOnScroll>

    </section>
}