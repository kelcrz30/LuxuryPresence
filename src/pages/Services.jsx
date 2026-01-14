import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Real Estate Done Right",
    subtitle: "Residential Brokerage & Advisory", 
    desc: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image: "//img1.wsimg.com/isteam/stock/12792/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
  },
  {
    id: "02",
    title: "Commercial & Residential",
    subtitle: "Multifamily & Asset Acquisition",
    desc: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    image: "//img1.wsimg.com/isteam/stock/43920/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
  },
  {
    id: "03",
    title: "Rely on Expertise",
    subtitle: "Capital Markets & Mortgage Liaison",
    desc: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    image: "//img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
  }
];

export default function EliteHeritageServices() {
  return (
    <section className="bg-[#181818] py-48 md:py-48 px-6 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Refined Header */}
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[10px] font-sans uppercase tracking-[0.6em] text-gray-500">Established Excellence</span>
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight italic">
              Our Expertise
            </h2>
          </motion.div>
          <div className="h-[80px] w-[1px] bg-gradient-to-b from-white/20 to-transparent mt-12"></div>
        </div>

        {/* Staggered Editorial Layout */}
        <div className="space-y-40 md:space-y-64">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              
              {/* Image with Floating Frame Effect */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full md:w-[55%] group"
              >
                <div className="relative aspect-[4/5] md:aspect-[16/11] overflow-hidden border border-white/5">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
                  />
                </div>
                {/* Decorative Element: Fine line offset */}
                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-24 h-24 border border-white/10 hidden md:block z-0`} />
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full md:w-[45%] space-y-8"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl font-serif italic text-gray-500">{service.id}</span>
                  <div className="h-[1px] w-12 bg-white/20"></div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-gray-400">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="text-4xl md:text-6xl font-serif font-light leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-md">
                  {service.desc}
                </p>

                <div className="pt-6">
                  <button className="relative overflow-hidden group py-3 px-8 border border-white/10 rounded-full hover:border-white transition-all duration-500">
                    <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold">Learn More</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                    <style jsx>{`
                      button:hover span { color: black; transition: color 0.5s; }
                    `}</style>
                  </button>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}