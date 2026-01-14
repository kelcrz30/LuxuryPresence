import React from 'react';

const LuxuryFooter = () => {
  return (
    <footer className="bg-[#181818] border-1 border-gray-200/20 text-[#e5e5e5] pt-28 pb-10 px-8 md:px-16 font-sans">
      <div className="max-w-[1600px] mx-auto">
        
        {/* TOP SECTION: Statement */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-8xl font-light tracking-tight leading-[0.9] text-white">
              Curated <br /> 
              <span className="font-serif italic text-stone-500">Living Spaces.</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-6">
            <p className="text-stone-500 text-sm tracking-wide uppercase">Inquiries</p>
            <a 
              href="mailto:hello@marcimetzger.com" 
              className="text-2xl md:text-3xl font-light border-b border-stone-800 pb-2 hover:border-white transition-colors duration-500"
            >
              hello@marcimetzger.com
            </a>
          </div>
        </div>

        {/* MIDDLE SECTION: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 border-t border-stone-900 pt-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] text-stone-500 font-bold">Marci Metzger</h3>
            <p className="text-stone-400 font-light leading-relaxed">
              A bespoke approach to real estate, focusing on the architectural significance and soulful living of the Nevada desert.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-600 mb-2">Pages</span>
            {['Home', 'Listings', 'Lets Move', 'About us'].map((item) => (
              <a key={item} href="#" className="text-sm font-light hover:translate-x-1 transition-transform duration-300">
                {item}
              </a>
            ))}
          </div>

          {/* Office */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-600 mb-2">Office</span>
            <p className="text-sm font-light text-stone-400 leading-relaxed">
              123 Pahrump Valley Blvd<br />
              Suite 400, Nevada 89048<br />
              +1 702 555 0198
            </p>
          </div>

          {/* Socials - Custom SVGs */}
          <div className="flex flex-col gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-600">Follow</span>
            <div className="flex gap-5">
              {/* Instagram */}
              <a href="#" className="hover:opacity-50 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:opacity-50 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:opacity-50 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-stone-900">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
            © 2026 Marci Metzger Homes. All Rights Reserved.
          </p>
          
          <div className="flex gap-10">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-stone-600 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-stone-600 hover:text-white transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-3">
             <div className="w-8 h-[1px] bg-stone-800"></div>
             <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 italic">Pahrump Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;