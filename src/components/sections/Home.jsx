
// export const Home = () => {

//     return (

//         <section id="home" className="min-h-screen flex items-center justify-center relative">

//             <div className="text-center z-10 px-4">
//                 <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-transparent leading-right">Hi, I'm Shifatunnabi Shifat</h1>

//                 <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
//                     I'm a student and full stack developer who loves to craft creative and scalable applications. My goal is to build applications that primarily solves a problem also a delightful user experience....
//                 </p>

//                 <div className="justify-center flex space-x-4">
//                     <a href="#projects" 
//                     className="bg-blue-500 text-white py-3 px-6 rounded font-medium trasition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
//                         View Projects
//                     </a>

//                     <a href="#contact" 
//                     className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
//                         Contact Me
//                     </a>
//                 </div>
//             </div>

//         </section>
//     );
// }
//./src/assets/profile.jpg
//====================================================

import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
    return (
      <RevealOnScroll>
      <section 
        id="home" 
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 pt-20 md:pt-0 bg-black gap-6 md:gap-12"
      >


        {/* Left: Profile Image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end items-center">
          <img 
            src="./src/assets/profile.jpg" 
            alt="Shifatunnabi Shifat" 
            className="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full md:rounded-lg object-cover border-4 border-blue-500 lg:border-none md:border-none shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-7/12 flex flex-col justify-center text-center md:text-left px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-500">
            Hi, I'm 
          </h1> 
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Shifatunnabi Shifat
          </h1>

          <p className="text-gray-400 text-base md:text-lg mb-4 sm:mb-2 max-w-lg mx-auto md:mx-0">
            I'm a student and full stack developer who loves to craft creative and scalable applications. My goal is to build applications that primarily solve a problem while providing a delightful user experience.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a 
              href="#projects" 
              className="bg-blue-500 text-white py-2 px-5 md:py-3 md:px-6 rounded font-medium text-sm md:text-base transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
  
            <a 
              href="#contact" 
              className="border border-blue-500/50 text-blue-500 py-2 px-5 md:py-3 md:px-6 rounded font-medium text-sm md:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>       
  

      </section>
      </RevealOnScroll>
    );
};

  
  