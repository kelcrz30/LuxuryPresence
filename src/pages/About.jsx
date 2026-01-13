import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="w-full bg-[#181818] text-white py-24 px-8 border-y border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Minimalist Circular Image */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
            <img 
              src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg:true" 
              alt="Marci Metzger" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Essential Content Only */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">
            Marci Metzger
          </h2>
          
          <p className="text-gray-300/70 uppercase tracking-[0.4em] italic text-[10px] md:text-xs">
            Realtor for nearly 3 decades
          </p>
          
          <div className="py-8">
            <div className="h-[1px] w-12 bg-white/30 mx-auto"></div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="tel:206-919-6886"
              className="text-white text-lg font-light tracking-[0.15em] hover:text-gray-400 transition-colors"
            >
              206.919.6886
            </a>
            
            <a 
              href="tel:206-919-6886"
              className="mt-4 px-12 py-3 border border-white/20 text-[10px] rounded-full uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;