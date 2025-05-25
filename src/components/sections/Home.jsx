import { RevealOnScroll } from "../RevealOnScroll";
import profilePhoto from "F:/Projects/Portfolio/src/assets/profile.jpg"
import githubIcon from "F:/Projects/Portfolio/src/assets/github.png"
import linkedinIcon from "F:/Projects/Portfolio/src/assets/linkedin.png"
import cvIcon from "F:/Projects/Portfolio/src/assets/cvv.png"

// import profilePhoto from "src/assets/profile.jpg"
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
            src={profilePhoto}
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

          <p className="text-gray-400 text-base text-justify md:text-lg mb-4 sm:mb-2 max-w-lg mx-auto md:mx-0">
            A CompSci student and fullstack developer. Passionate about building scalable, user-centric web applications and exploring intersection between software development, security, artificial intelligence and real-world problem solving. 
          </p>



         {/* <div className="flex flex-wrap items-center my-2 py-3 justify-center md:justify-start gap-2">
            <a
              href="https://github.com/Shifatunnabi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-transform duration-200 hover:scale-110"
            >
              <img src={githubIcon} alt="GitHub" className="w-10 h-10" />
            </a>

            <a
              href="https://www.linkedin.com/in/shifatunnabi-shifat/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 transition-transform duration-200 hover:scale-110"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
            </a>

            <a
              href="https://docs.google.com/document/d/1neRC-jTblDYJbWVMR0n5ei0g-injPEeh/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1  transition-transform duration-200 hover:scale-110"
            >
              <img src={cvIcon} alt="CV" className="w-10 h-10" />
            </a>

            <a 
              href="#contact" 
              className="ml-4 border border-blue-500/50 text-blue-500 py-2 px-5 md:py-3 md:px-6 rounded font-medium text-sm md:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div> */}

        <div className="flex flex-wrap items-center my-2 py-3 justify-center md:justify-start gap-3">
          <a
            href="https://github.com/Shifatunnabi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 transition-transform duration-200 hover:scale-110"
          >
            <img src={githubIcon} alt="GitHub" className="w-7 h-7 md:w-8 md:h-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/shifatunnabi-shifat/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 transition-transform duration-200 hover:scale-110"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 md:w-8 md:h-8" />
          </a>

          <a
            href="https://docs.google.com/document/d/1neRC-jTblDYJbWVMR0n5ei0g-injPEeh/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 transition-transform duration-200 hover:scale-110"
          >
            <img src={cvIcon} alt="CV" className="w-7 h-7 md:w-8 md:h-8" />
          </a>

          <a 
            href="#contact" 
            className="ml-2 border border-blue-500/50 text-blue-500 py-1.5 px-4 md:py-2 md:px-5 rounded font-medium text-xs md:text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>


        </div>       
  

      </section>
      </RevealOnScroll>
    );
};

  
  