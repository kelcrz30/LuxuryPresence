import { motion } from 'framer-motion';

const StepItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className='grid grid-cols-1 md:grid-cols-12 items-center relative min-h-[400px]'>
      
      {/* --- Center Node (The Circle) --- */}
      <motion.div 
        initial={{ scale: 0 }} 
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 items-center justify-center z-10 font-mono text-sm shadow-sm"
      >
        {item.id}
      </motion.div>

      {/* --- Image Side --- */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`md:col-span-5 mb-8 md:mb-0 ${isEven ? 'md:order-1' : 'md:order-2 md:col-start-8'}`}
      >
        <div className="overflow-hidden rounded-sm bg-gray-100 shadow-xl">
<img 
  src={item.img} 
  className='w-full transition-all duration-1000 object-cover aspect-[4/3] 
             grayscale-0 md:grayscale md:hover:grayscale-0 md:hover:scale-105' 
  alt={item.title} 
/>
        </div>
      </motion.div>

      {/* --- Text Side --- */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`md:col-span-4 self-center ${isEven ? 'md:col-start-8 md:order-2' : 'md:col-start-1 md:order-1 md:text-right'}`}
      >
        <span className='text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-4'>
           {item.category || 'Process'}
        </span>
        <h4 className='text-3xl lg:text-4xl font-light mb-6 tracking-tight italic font-serif'>
          {item.title}
        </h4>
        <p className='text-gray-500 font-light leading-relaxed mb-8 text-sm lg:text-base'>
          {item.description}
        </p>
        <button className='text-[10px] uppercase tracking-widest border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all'>
          {item.cta}
        </button>
      </motion.div>
    </section>
  );
};

export default StepItem;