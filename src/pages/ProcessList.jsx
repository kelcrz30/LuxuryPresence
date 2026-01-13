import React from 'react';
import { motion } from 'framer-motion';
import StepItem from '../components/StepItem';
import { DATA } from '../helpers/ListingsData';

const ProcessList = () => {
  return (
    <div className='bg-white py-24 px-6 relative overflow-hidden'>
      <div className='max-w-[1200px] mx-auto relative'>
        
        {/* --- THIS IS THE LINE --- */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-10 w-px border-l border-dashed border-gray-300 hidden md:block -translate-x-1/2 origin-top"
          style={{ zIndex: 0 }}
        />

        <div className='flex flex-col gap-32 md:gap-20 relative' style={{ zIndex: 10 }}>
          {DATA.map((item, index) => (
            <StepItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessList;