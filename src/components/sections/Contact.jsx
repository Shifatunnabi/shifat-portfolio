import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_serviceID,
        import.meta.env.VITE_templateID,
        e.target,
        import.meta.env.VITE_publicKey
      )
      .then((result) => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Opps!! Something went wrong. Please try again.");
      });
  };

  return (
    // <section
    //     id="contact"
    //     className="min-h-screen flex items-center justify-center py-20"
    // >
    //     <RevealOnScroll>
    //         <div className="py-4 w-150">
    //             <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-transparent text-center">Get in Touch</h2>

    //             <form className="space-y-6 " onSubmit={handleSubmit}>
    //                 <div className="relative">

    //                     <input
    //                         type="text"
    //                         id="name"
    //                         name="name"
    //                         required
    //                         value = {formData.name}
    //                         className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name.."
    //                         onChange={(e) =>{
    //                             setFormData({...formData, name:e.target.value})
    //                         }}
    //                     />

    //                 </div>

    //                 <div className="relative">

    //                     <input
    //                         type="email"
    //                         id="email"
    //                         name="email"
    //                         required
    //                         value = {formData.email}
    //                         className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@gmail.com"
    //                         onChange={(e) =>{
    //                             setFormData({...formData, email:e.target.value})
    //                         }}
    //                     />

    //                 </div>

    //                 <div className="relative">

    //                     <textarea
    //                         id="message"
    //                         name="message"
    //                         required
    //                         value = {formData.message}
    //                         rows={5}
    //                         className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message..."
    //                         onChange={(e) =>{
    //                             setFormData({...formData, message:e.target.value})
    //                         }}
    //                     />

    //                 </div>

    //                 <button
    //                     type="submit"
    //                     className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
    //                 >
    //                     {"<Commit/>"}
    //                 </button>
    //             </form>

    //         </div>
    //     </RevealOnScroll>

    // </section>
// ==============================================================
    <section 
    id="contact"
    className="min-h-screen flex items-center justify-center px-5 py-20">

        <RevealOnScroll>
            <div className="py-4 w-[90vw] md:w-150">  {/* Changed mobile width to 90vw */}
                <h2 className="text-3xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>

                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required 
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="Name.."
                            onChange={(e) => {
                                setFormData({...formData, name:e.target.value})
                            }}
                        />
                    </div>

                    <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required 
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="example@gmail.com"
                            onChange={(e) => {
                                setFormData({...formData, email:e.target.value})
                            }}
                        />
                    </div>

                    <div className="relative">
                        <textarea
                            id="message" 
                            name="message"
                            required 
                            value={formData.message}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="Your Message..."
                            onChange={(e) => {
                                setFormData({...formData, message:e.target.value})
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 md:py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    
                        {"<Commit/>"}
                    </button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
//================================================================
);

};
