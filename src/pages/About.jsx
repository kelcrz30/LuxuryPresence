import React from 'react';
import { motion } from 'framer-motion';

const AboutBanner = () => {
  return (
    <section className="w-full bg-[#181818] text-white py-12 md:py-20 border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* --- PROFILE COMPONENT --- */}
          <div className="flex items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 md:w-32 md:h-32 bg-neutral-900 overflow-hidden"
            >
              <img 
                src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg:true" 
                alt="Marci Metzger" 
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              />
            </motion.div>
            
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-serif tracking-tight">Marci Metzger</h2>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">The Ridge Realty Group</p>
            </div>
          </div>

          {/* --- CONTENT SLIVER --- */}
          <div className="hidden lg:block w-[1px] h-16 bg-white/10" />

          <div className="max-w-md">
            <p className="text-sm md:text-base font-light leading-relaxed text-white/50 text-center md:text-left">
              Established representation in Nevada for <span className="text-white">three decades.</span> Specializing in luxury acquisitions and high-value estates with total discretion.
            </p>
          </div>

          {/* --- ACTION SLIVER --- */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a href="tel:2069196886" className="text-xl font-light tracking-tighter hover:text-white/40 transition-all">
              206.919.6886
            </a>
            <a 
              href="#contact" 
              className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.5em] text-white/40 hover:text-white transition-all"
            >
              Contact 
              <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutBanner;