import {RevealOnScroll } from "../RevealOnScroll";
export const Experience = () => {
    return <section id="experience" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Experience
            </h2>



            <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4 flex justify-between ">
                        Data Science Intern 
                        <span className="ml-4 text-base font-normal text-gray-300 self-center">May - August 2025</span>

                    
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                        <li>
                            <strong>Purdue University </strong> 
                        </li>
                        <li>
                            Selected as 1 out of 300+ applicants as part of the Purdue SURF engineering programme.
                            
                        </li>

                        <li>
                             Improved an in-house nnU-Net PyTorch deep learning model, achieving a 12% boost in segmentation accuracy.
.
                             
                        </li>

                        <li>
                             Built Dockerized Jupyter pipelines linking PostgreSQL metadata with local MRI files to segment 180 pancreatic scans.
                        </li>

                        <li>
                             Accelerated GPU inference with CUDA, reducing segmentation time by 1.5x.
.
                        </li>
                    </ul>

                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4 flex justify-between">
                        Cancer & Cellular Biology Research
                        <span className="ml-4 text-base font-normal text-gray-300 self-center">January - March 2025</span>

                    </h3> 
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                        <li>
                            <strong> Imperial College London </strong> 
                        </li>
                        <li>
                            Under the guidance of Dr. Tweety Twang our team worked on characterising two unknown breast cancer cell lines then quantifying which one was the most resitant to "unfavourable growth conditions".
                        </li>

                        <li>
                            By subjecting the breast cancer cell lines to mechanical stress and nutrient starvation, we created unfavourable growth conditions and measured the proliferation rates of the two cells.
                        </li>

                        <li>
                            By creating a systematic way to measure breast cancer cell resilience, with an empthasis on mechanical stress and nutrient starvation, we believe that we can have an impact on improving drug screening and personalised treatment strategies.
                        </li>
                    </ul>


                    


                </div>
            </div>





            <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4 flex justify-between">
                        Cancer & Cellular Biology Research - Educational Video

                    </h3> 
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                             During our research, my colleague and I realised that cell subculture was made more complicated than it needed to be. We identified that the process itself could be simplified. 

                        </li>
                        
                        <li>
                            Me and Dameer spent some time creating an educational video outlining the key aspects of cell subculture in the hopes to simplify the daunting process and make it more accessible to aspiring researchers and scientists.
                        </li>
                        
                        <li>
                            But we were not satisfied with the video alone. This video would become the foundation for a later device that me and him would design – {" "}
                            <a href="#projects" className="font-bold text-blue-400 hover:underline">
                                Cellsys
                            </a>
                            <span className="ml-1">an automated cell subculture device aimed at reducing cell subculturing times by up to 10 minutes.</span>
                        </li>
                        
                    </ul>



                    <div className="mt-6 aspect-video">
                        <iframe className="w-full h-full rounded-lg" src="https://www.youtube-nocookie.com/embed/uc7PQBxrSM0" title="Cellular Biology Project" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                        allowFullScreen>
                        </iframe>
                    </div>


                </div>
            </div>








        </div>
        </RevealOnScroll>
    </section>
}