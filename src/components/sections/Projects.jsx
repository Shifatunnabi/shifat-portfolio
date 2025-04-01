import {GoArrowRight} from "react-icons/go";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* project-1  */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-2">Dummy Project-1</h3>
                            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis excepturi saepe pariatur quibusdam. Esse architecto accusamus consequatur.</p>

                            {/* tech stack used */}
                            <div>
                                {["React", "NodeJS", "MySQL", "AI"].map((tech, key) =>(
                                    <span key={key} className="mr-1 bg-blue-300/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech} 
                                    </span>
                                ))}
                            </div>

                            {/* navigate btn */}
                            <div className="flex justify-end">
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project<GoArrowRight className="inline-block mx-1"/></a>
                            </div>

                        </div>
                        {/* project-2  */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-2">Dummy Project-2</h3>
                            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis excepturi saepe pariatur quibusdam. Esse architecto accusamus consequatur.</p>

                            {/* tech stack used */}
                            <div>
                                {["React", "NodeJS", "MySQL", "AI"].map((tech, key) =>(
                                    <span key={key} className="mr-1 bg-blue-300/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech} 
                                    </span>
                                ))}
                            </div>

                            {/* navigate btn */}
                            <div className="flex justify-end">
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project<GoArrowRight className="inline-block mx-1"/></a>
                            </div>

                        </div>
                        {/* project-3  */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-2">Dummy Project-3</h3>
                            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis excepturi saepe pariatur quibusdam. Esse architecto accusamus consequatur.</p>

                            {/* tech stack used */}
                            <div>
                                {["React", "NodeJS", "MySQL", "AI"].map((tech, key) =>(
                                    <span key={key} className="mr-1 bg-blue-300/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech} 
                                    </span>
                                ))}
                            </div>

                            {/* navigate btn */}
                            <div className="flex justify-end">
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project<GoArrowRight className="inline-block mx-1"/></a>
                            </div>

                        </div>

                        {/* project-4 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-2">Dummy Project-4</h3>
                            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis excepturi saepe pariatur quibusdam. Esse architecto accusamus consequatur.</p>

                            {/* tech stack used */}
                            <div>
                                {["React", "NodeJS", "MySQL", "AI"].map((tech, key) =>(
                                    <span key={key} className="mr-1 bg-blue-300/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech} 
                                    </span>
                                ))}
                            </div>

                            {/* navigate btn */}
                            <div className="flex justify-end">
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project<GoArrowRight className="inline-block mx-1"/></a>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}