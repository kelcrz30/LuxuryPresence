import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const properties = [
  { 
    id: 1, 
    title: "The Desert Oasis", 
    location: "Pahrump, Nevada",
    images: [
      "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/",
      "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/",
      "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/"
    ]
  },
  { 
    id: 2, 
    title: "Palawan", 
    location: "Philippines",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Kayangan_Lake%2C_Coron_-_Palawan.jpg",
      "https://www.travel-palawan.com/wp-content/uploads/2024/06/Big-Lagoon-Bacuit-Bay-El-Nido-Palawan-Philippines.jpg",
      "https://i0.wp.com/www.freetworoam.com/wp-content/uploads/2024/12/IMG_8528-scaled.jpeg?ssl=1"
    ]
  },
];

function PropertyGalleryItem({ property, setCursorVariant }) {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setImgIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setImgIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timerRef.current);
  }, [imgIndex]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -50) nextSlide();
    else if (x >= 50) prevSlide();
    dragX.set(0); 
    clearInterval(timerRef.current);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-24 lg:mb-[30vh] last:mb-0">
      {/* Image Container: Adjusted height for mobile */}
      <motion.div 
        initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
        onMouseEnter={() => setCursorVariant("dragging")}
        onMouseLeave={() => setCursorVariant("default")}
        className="relative h-[50vh] md:h-[60vh] lg:h-[75vh] w-full lg:w-[65%] overflow-hidden bg-gray-100 shadow-xl lg:shadow-2xl lg:cursor-none"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          onDragEnd={onDragEnd}
          className="h-full w-full touch-pan-y"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={property.images[imgIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full object-cover pointer-events-none"
            />
          </AnimatePresence>
        </motion.div>

        {/* Progress Bars: Smaller on mobile */}
        <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 flex gap-2 lg:gap-3 z-30">
          {property.images.map((_, i) => (
            <div key={i} className="h-[2px] w-8 lg:w-12 bg-white/20 relative overflow-hidden">
              {i === imgIndex && (
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-0 bg-white"
                />
              )}
              {i < imgIndex && <div className="absolute inset-0 bg-white" />}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Text Info: Responsive font sizes */}
      <div className="w-full lg:w-[35%] px-2 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] lg:tracking-[0.5em] text-gray-400 mb-3 lg:mb-4 block">
            {property.location}
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-6 lg:mb-8 leading-tight">
            {property.title}
          </h3>
          <button 
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
            className="flex items-center gap-4 text-[9px] lg:text-[10px] uppercase tracking-widest font-bold group"
          >
            Explore Residence <span className="transition-transform group-hover:translate-x-2">→</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default function HomeLuxuryGallery() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useSpring(mousePos.x, { stiffness: 800, damping: 50 });
  const cursorY = useSpring(mousePos.y, { stiffness: 800, damping: 50 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const variants = {
    default: { scale: 0, opacity: 0 },
    dragging: { scale: 1, opacity: 1 },
    button: { scale: 0.5, opacity: 0.8, backgroundColor: "rgba(0, 0, 0, 0.05)" }
  };

  return (
    <section className="bg-white py-12 lg:py-20 px-6 md:px-[8vw] select-none relative overflow-x-hidden">
      {/* Hidden custom cursor on mobile/touch devices via "hidden lg:flex" */}
      <motion.div 
        variants={variants}
        animate={cursorVariant}
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:flex h-20 w-20 items-center justify-center rounded-full backdrop-blur-md text-[10px] uppercase tracking-widest text-black shadow-2xl border border-gray-100"
      >
        {cursorVariant === "dragging" && "Drag"}
      </motion.div>

      <div className="mx-auto max-w-[1800px]">
        <header className="mb-16 lg:mb-32">
          <h2 className="text-5xl md:text-7xl lg:text-[10vw] font-serif font-light tracking-tighter text-gray-900 leading-[0.9]">
            The <br className="hidden md:block"/> Gallery
          </h2>
        </header>

        {properties.map((prop) => (
          <PropertyGalleryItem 
            key={prop.id} 
            property={prop} 
            setCursorVariant={setCursorVariant}
          />
        ))}
      </div>
    </section>
  );
}