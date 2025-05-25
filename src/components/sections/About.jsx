import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["HTML", "CSS", "React", "Figma", "TailwindCSS", "Bootstrap"]
    const backendSkills = ["Javascript", "Python", "NodeJS", "MySQL", "ExpressJS"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>
                

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] trasition-all">
                        <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transiton-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key)=>(
                                        <span key={key} className="bg-blue-300/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech} </span>
                                    ))}
                                </div>

                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transiton-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key)=>(
                                        <span key={key} className="bg-blue-300/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech} </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* education section */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul >
                                <li className="mb-4">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full align-middle mr-2"></span>
                                    BSc in Computer Science and Engineering 
                                    <p><strong className="text-blue-500"> - BRAC University (2022-Present)</strong></p>
                                    
                                </li>

                                
                                <li className="mb-4">
                                     <span className="inline-block w-2 h-2 bg-blue-500 rounded-full align-middle mr-2"></span>
                                    Higher Secondary School Certificate 
                                    <p><strong className="text-blue-500"> - Rajuk Uttara Model College (2019-2021)</strong></p>
                                </li>
                            </ul>


                        </div>
                        {/* work experience section */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                             <ul >
                                <li className="mb-4">
                                     <span className="inline-block w-2 h-2 bg-blue-500 rounded-full align-middle mr-2"></span>
                                    Frontend Developer Intern
                                    <p><strong className="text-blue-500"> - TechAByte Solutions (April 2024 - July 2024)</strong></p>
                                    
                                </li>

                                
                                <li className="mb-4">
                                     <span className="inline-block w-2 h-2 bg-blue-500 rounded-full align-middle mr-2"></span>
                                    Full Stack Web Developer Intern
                                    <p><strong className="text-blue-500"> - BayFi (December 2024 - Present)</strong></p>
                                </li>
                            </ul>      

                        </div>

                    </div>
                </div>

            </RevealOnScroll>
        </section>
    );
} 