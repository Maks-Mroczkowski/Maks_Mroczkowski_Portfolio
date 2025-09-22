import {RevealOnScroll} from "../RevealOnScroll"
export const Projects = () => {
    return (<section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all ">
                        <h3 className="text-xl font-bold mb-2">Cellsys </h3>
                        <p className="text-gray-400 mb-4">Automated cell subculture device aimed at reducing the barrier of entry to cell subculture.  </p>
                        <div className="flex flex-wrap gap-4">
                            {['C++','React','JavaScript','Python','CSS','HTML','Figma', 'Fritzing', 'Fusion360'].map((tech,key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition ">
                                    {tech}
                            
                            </span>
                        ))}



                    
                   


                    </div>

                    
                    <div className="mt-6 w-full relative" style={{paddingBottom:"56.25%"}}>
                        <iframe className="w-full h-full absolute top-0 left-0 rounded-lg" src="https://www.youtube.com/embed/FqcAenE3CJM" title="Cellsys YouTube Video"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                        
                        ></iframe>
                            
                    </div>

                    

                    <div className="flex justify-between items-center mt-4"> 
                        <a href="https://github.com/Maks-Mroczkowski/Automated-Cell-Culture.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>


                    </div>
                </div>




                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Medical Robotics </h3>
                    <p className="text-gray-400 mb-4"> Robotic surgery inspired arm capable of lifting ~150g and with a reach of ~500mm. </p>
                    <div className="flex flex-wrap gap-4">
                        {['C++','fritzing','3D-printing','Fusion360','laser cutting', 'Arduino'].map((tech,key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition ">
                                    {tech}

                        </span>
                        ))}
                    </div>


                    <div className="mt-6 w-full relative" style={{paddingBottom:"56.25%"}}>
                        <iframe className="w-full h-full absolute top-0 left-0 rounded-lg" src="https://www.youtube.com/embed/avTFx0c6N-I" title="Robot YouTube Video"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                        
                        ></iframe>
                            
                    </div>


                    <div className="flex justify-between items-center mt-4"> 
                        <a href=" https://github.com/Maks-Mroczkowski/Robotics_Project.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>


                    </div>
                </div>





                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Meningioma Tumour Classifier </h3>
                    <p className="text-gray-400 mb-4">Convolutional neuron network for the classification of meningioma tumours from MRI scans.  </p>
                    <div className="flex flex-wrap gap-4">
                        {['Python','Jupyter Notebook','TensorFlow','Keras','OpenCV','Matplotlib','NumPy','Pandas'].map((tech,key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition ">
                                    {tech}

                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center"> 
                        <a href="https://github.com/Maks-Mroczkowski/Image-Classifier.git"target="_blank" rel="noopener noreferrer"  className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>


                    </div>
                </div>






                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Linear Regression </h3>
                    <p className="text-gray-400 mb-4"> Collaborated with Imperial College London data Science Society on a linear regression algorhtim.</p>
                    <div className="flex flex-wrap gap-4">
                        {['Python','Jupyter Notebook','Scikit-learn','Pandas','SciPy','NumPy'].map((tech,key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition ">
                                    {tech}

                        </span>
                        ))}
                    </div>



                    <div className="flex justify-between items-center"> 
                        <a href="https://github.com/Maks-Mroczkowski/Linear_Regression_Machine_Learning.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>


                    </div>
                </div>














            </div>

        </div>
        </RevealOnScroll>

    </section>
    
    );
};
