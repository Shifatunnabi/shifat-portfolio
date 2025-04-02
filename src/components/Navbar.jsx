import { useEffect } from "react";
import logo from "C:/Users/HP/OneDrive/Desktop/Portfolio/src/assets/logo.png";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/*logo */}
                    <a href="#home" className="flex items-center gap-1 font-mono text-xl font-bold text-white">
                        <img src={logo} alt="Logo" className="h-8 w-8 rounded-full object-cover border border-white/20 mx-2" />

                        nabi<span className="text-blue-700">.dev</span>
                    </a>

                    {/* hamburger for mobile menu*/}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=> setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    {/* desktop menu*/}
                    <div className="hidden md:flex items-center space-x-8">

                        <a href="#home" className="text-gray-300 hover:text-blue-800  transition-colors">Home</a>

                        <a href="#about" className="text-gray-300 hover:text-blue-800 transition-colors">About</a>

                        <a href="#projects" className="text-gray-300 hover:text-blue-800 transition-colors">Projects</a>

                        <a href="#contact" className="text-gray-300 hover:text-blue-800 transition-colors">Contact</a>

                    </div>

                </div>

            </div>
        </nav>
    );
}