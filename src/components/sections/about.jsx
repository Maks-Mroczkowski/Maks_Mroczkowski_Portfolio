import {RevealOnScroll} from "../RevealOnScroll";
export const About = () => {

    const ProgrammingLanguages = ["Python", "JavaScript", "TypeScript", "C++", "SQL", "JAX"]
    const FrameWorksLibraries = ["React", "FastAPI", "Flask", "PyTorch", "TensorFlow", "XGBoost", "LangChain", "NumPy", "Pandas", "Scikit-Learn", "Keras", "TailwindCSS", "HTML", "Matplotlib", "OpenCV"]
    const Technologies = ['Git', 'GitHub', 'Docker', 'Jupyter Notebook', 'MLflow', 'Kubernetes', 'AWS Lambda', 'AWS Kinesis', 'AWS S3', 'CI/CD', 'PostgreSQL', 'ChromaDB', 'Redis', 'Celery', 'Evidently AI', 'CloudWatch', 'MinIO']


    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Get To Know A little About Me 
            </h2>

            <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] "  >
                <p className="text-gray-300 mb-6">
                    I am passionate about building and maintaining scalable software that improve peoples lives. I especially enjoy working on projects that aim to improve challenges in healthcare, big data, and finance. I have experience in data science, Fullstack and ML engineering. This summer I interned as a data scientist at Purdue University where I worked on optimising nnU-net based deep learning architecture and built data pipelines to extract morphological data from MRIs.    

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 ">Programming Languages </h3>
                        <div className="flex flex-wrap gap-2 ">
                            {ProgrammingLanguages.map((tech, key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>


                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 ">FrameWorks & Libraries </h3>
                        <div className="flex flex-wrap gap-2 ">
                            {FrameWorksLibraries.map((tech, key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 ">Technologies </h3>
                        <div className="flex flex-wrap gap-2 ">
                            {Technologies.map((tech, key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] ">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S. in Bioengineering  </strong> - Imperial College London (2023-2026)
                        </li>
                        <li>
                            <strong>Relevant Modules </strong> -  Probability, Statistics & Data Analysis , Object-oriented Programming in Python, Data Structures & Algorithms, Electronics, Linear Algebra, Partial differential Equations, Robotics, Multi-Variable Calculus, Computer Architecture
                        </li>
                    </ul>

                </div>
            </div>
        
        </div>
        </RevealOnScroll>
    </section>
}