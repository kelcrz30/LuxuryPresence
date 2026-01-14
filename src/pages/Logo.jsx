import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function LogoMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const [moveDistance, setMoveDistance] = useState(0);

  const logos = useMemo(() => [
    { src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=h:100,cg:true,m", alt: "The Ridge Realty Group" },
    { src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true", alt: "Equal Housing Opportunity" },
    { src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true", alt: "Realtor" },
    { src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=h:100,cg:true,m", alt: "Chamber of Commerce" },
  ], []);

  // Use 4 sets of logos. This ensures that even on massive 4K screens, 
  // there is never a "blank" space at the end of the row.
  const loop = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        // We measure the total width and divide by the number of sets (4)
        // to get the exact distance of one full cycle.
        const totalWidth = containerRef.current.scrollWidth;
        setMoveDistance(totalWidth / 4);
      }
    };

    // Wait for images to load so measurement is accurate
    window.addEventListener("load", calculateWidth);
    calculateWidth();
    
    const resizeObserver = new ResizeObserver(calculateWidth);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => {
      window.removeEventListener("load", calculateWidth);
      resizeObserver.disconnect();
    };
  }, []);

  if (shouldReduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-12 py-10 bg-white">
        {logos.map((l, i) => (
          <img key={i} src={l.src} alt={l.alt} className="h-24 w-auto object-contain" />
        ))}
      </div>
    );
  }

  return (
    <section className=" w-full bg-white py-20">
      {/* Outer wrapper: must be overflow-hidden and relative */}
      <div className="relative w-full overflow-hidden">
        
        {/* Fades: These mask the "entry" and "exit" of logos for smoothness */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          ref={containerRef}
          className="flex w-max items-center gap-16 pr-16" // gap and padding must match for math
          animate={{
            x: moveDistance ? [0, -moveDistance] : 0,
          }}
          transition={{
            duration: 20, // Increase for slower, decrease for faster
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loop.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-25 w-auto flex-shrink-0 object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}