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

                            <h3 className="text-xl font-bold mb-6">FarmAid - A Digital Farming Companion</h3>
                            <p className="text-gray-400 mb-4">FarmAid is a multi-role agricultural platform connecting farmers, landowners, banks, and pesticide stores and agricultural instrument owners which works like a bridge between them</p>

                            {/* tech stack used */}
                            <div>
                                {["React", "NodeJS", "ExpressJS", "MySQL"].map((tech, key) =>(
                                    <span key={key} className="mr-1 bg-blue-300/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech} 
                                    </span>
                                ))}
                            </div>

                            {/* navigate btn */}
                            <div className="flex justify-end">
                                        <a href="https://github.com/Shifatunnabi/FarmAid" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project<GoArrowRight className="inline-block mx-1"/></a>
                            </div>

                        </div>
                        {/* project-2  */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-6">Thrive FE Landing Page</h3>
                            <p className="text-gray-400 mb-4">Built this creative and mobile responsive landing page during my first ever internship. Designed by Thrive figma designers</p>

                            {/* tech stack used */}
                            <div>
                                {["HTML", "CSS", "TailwindCSS"].map((tech, key) =>(
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


                        {/* project-4 */}
                     
                        
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}