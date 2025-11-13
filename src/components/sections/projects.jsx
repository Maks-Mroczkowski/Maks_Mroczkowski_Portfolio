import {RevealOnScroll} from "../RevealOnScroll"
export const Projects = () => {
    return (<section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Industrial Equipment Predictive Maintenance Platform</h3>
                    <p className="text-gray-400 mb-4">ML platform predicting equipment failures with 92% accuracy using XGBoost and Temporal Fusion Transformers, deployed on Kubernetes with real-time drift detection and automated retraining.</p>
                    <div className="flex flex-wrap gap-4">
                        {['Python', 'XGBoost', 'MLflow', 'Evidently AI', 'Kubernetes', 'FastAPI', 'FFT Analysis'].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <a href="https://github.com/Maks-Mroczkowski/Industrial-Equipment-Predictive-Maintenance-Platform.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">LLM-Powered Document Processing Agent</h3>
                    <p className="text-gray-400 mb-4">End-to-end document processing platform using LangChain and OpenAI GPT for intelligent extraction and analysis of invoices, contracts, and insurance claims with semantic search capabilities.</p>
                    <div className="flex flex-wrap gap-4">
                        {['FastAPI', 'React', 'PostgreSQL', 'LangChain', 'OpenAI GPT', 'HuggingFace', 'Celery', 'Redis', 'Docker', 'ChromaDB'].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <a href="https://github.com/Maks-Mroczkowski/LLM-Powered-Document-Processing-Agent.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Autonomous RL Trading Agent</h3>
                    <p className="text-gray-400 mb-4">JAX-based reinforcement learning agent for autonomous portfolio optimization with scalable AWS data pipelines and automated model retraining via CI/CD.</p>
                    <div className="flex flex-wrap gap-4">
                        {['JAX', 'Reinforcement Learning', 'AWS Kinesis', 'AWS Lambda', 'AWS S3', 'CloudWatch', 'CI/CD'].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <a href="https://github.com/Maks-Mroczkowski/Trading-RL-Agent.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,246,0,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Retrieval Augmented Generation System for Document QA</h3>
                    <p className="text-gray-400 mb-4">Full-stack RAG application enabling semantic search and question-answering over educational materials using LangChain, ChromaDB, and Groq's LLaMA API, tested by 40 university students.</p>
                    <div className="flex flex-wrap gap-4">
                        {['Flask', 'React', 'TypeScript', 'LangChain', 'ChromaDB', 'Groq LLaMA', 'RAG', 'Vector DB'].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <a href="https://github.com/Maks-Mroczkowski/UniGPT.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                    </div>
                </div>














            </div>

        </div>
        </RevealOnScroll>

    </section>
    
    );
};
