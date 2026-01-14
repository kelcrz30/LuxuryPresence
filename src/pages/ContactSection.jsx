import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp, FaInstagram, FaLinkedinIn, FaFacebookF, FaYelp } from "react-icons/fa";

export default function NoirRealEstateContact() {
  const reveal = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <section className="bg-[#181818] py-24 md:py-48 px-6 font-sans text-white selection:bg-white selection:text-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex items-center gap-4 mb-24">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            transition={{ duration: 1.2 }}
            className="h-[1px] bg-white/30" 
          />
          <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-stone-500">
           Call or Visit
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <motion.h2 {...reveal} className="text-6xl md:text-8xl font-serif leading-[0.95] mb-16 tracking-tighter">
              We're Here <br /> 
              <span className="italic font-light text-stone-500">to Help.</span>
            </motion.h2>

            <motion.div {...reveal} transition={{ delay: 0.2 }} className="space-y-20">
              <p className="text-white/40 max-w-xs leading-relaxed text-sm font-light uppercase tracking-wide">
                Ready to buy or sell? Let's discuss your real estate goals and find the perfect solution for you.
              </p>
              <div className="space-y-12 pt-12 border-t border-white/5">
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest text-stone-500 mb-4 font-bold">Principal</h4>
                  <p className="text-2xl font-serif tracking-tight">Marci Metzger</p>
                  <p className="text-[10px] text-stone-500 mt-2 uppercase tracking-[0.3em]">The Ridge Realty Group</p>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest text-stone-500 mb-2 font-bold">Inquiries</h4>
                  <a href="tel:2069196886" className="text-4xl font-light hover:text-white/60 transition-colors tracking-tighter">
                    206.919.6886
                  </a>
                </div>

                {/* SOCIALS */}
                <div className="pt-12 border-t border-white/5">
                  <h4 className="text-[9px] uppercase tracking-widest text-stone-500 mb-6 font-bold">Connect</h4>
                  <div className="flex items-center gap-6">
                    <a 
                      href="#" 
                      className="text-white/30 hover:text-white transition-colors duration-300 text-lg"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a 
                      href="#" 
                      className="text-white/30 hover:text-white transition-colors duration-300 text-lg"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a 
                      href="#" 
                      className="text-white/30 hover:text-white transition-colors duration-300 text-lg"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a 
                      href="https://www.yelp.com/search?find_desc=Real+Estate+Agents&find_loc=Pahrump%2C+NV" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white transition-colors duration-300 text-lg"
                      aria-label="Yelp"
                    >
                      <FaYelp />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (FORM) */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} className="relative p-1 border-t border-l border-white/10">
              <div className="space-y-16 p-8 md:p-12 bg-[#1c1c1c]/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="flex flex-col gap-4">
                    <label className="text-[8px] uppercase tracking-[0.4em] font-black text-stone-500">Identity</label>
                    <input type="text" className="bg-transparent border-b border-white/5 py-4 outline-none focus:border-white transition-all text-sm placeholder:text-white/10" placeholder="Full Name" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[8px] uppercase tracking-[0.4em] font-black text-stone-500">Communication</label>
                    <input type="email" className="bg-transparent border-b border-white/5 py-4 outline-none focus:border-white transition-all text-sm placeholder:text-white/10" placeholder="Email Address" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-[8px] uppercase tracking-[0.4em] font-black text-stone-500">Brief</label>
                  <textarea rows="3" className="bg-transparent border-b border-white/5 py-4 outline-none focus:border-white transition-all text-sm placeholder:text-white/10 resize-none" placeholder="Project Details" />
                </div>
                <div className="pt-10 flex flex-col md:flex-row items-center gap-12">
                  <button onClick={handleSubmit} className="w-full md:w-auto flex items-center justify-center gap-8 bg-white text-black px-16 py-6 hover:bg-[#222] hover:text-white transition-all group">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black">Submit</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-3 transition-transform duration-500" />
                  </button>
                  <a href="https://wa.me/12069196886" className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-stone-500 hover:text-white transition-all">
                    <FaWhatsapp className="text-lg" />
                    WhatsApp Direct
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- WORKING GOOGLE MAP --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-48 relative h-[500px] w-full border border-white/5 overflow-hidden"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.785644781608!2d-115.9868352!3d36.1472852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c65634568853b1%3A0xc397984f479707e!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ 
              border: 0, 
              filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2) grayscale(1)' 
            }} 
            allowFullScreen="" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-[#181818] pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 bg-[#1c1c1c] p-6 border border-white/10 hidden md:block">
             <p className="text-[8px] uppercase tracking-[0.3em] text-white/40 mb-2">Office</p>
             <p className="text-xs font-light text-white/80">3190 HW-160, Suite F<br/>Pahrump, NV 89048</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}