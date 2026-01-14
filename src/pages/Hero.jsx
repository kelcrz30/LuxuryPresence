import { useState, useEffect, useRef } from 'react'

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100)

    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight
        const currentScroll = window.scrollY
        
        // Only apply parallax if we're still in or near the hero section
        if (currentScroll < heroBottom) {
          setScrollY(currentScroll)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
  return (
    <div ref={heroRef} className='min-h-screen bg-gray-50 pt-31 pb-8 px-2 md:px-8 relative'>

      <div 
        className={`relative h-[600px] md:h-[700px] rounded-[40px] overflow-hidden transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url('https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg')",
          backgroundPosition: `center ${25 + scrollY * 0.1}%`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='h-full flex items-center justify-start max-w-xs md:max-w-5xl px-4 lg:px-24'>
          <div className='text-left text-white max-w-2xl z-10'>
            <h1 className={`text-2xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              MARCI METZGER<br />
              THE RIDGE REALTY GROUP
            </h1>
            <h2 className={`text-lg md:text-3xl lg:text-4xl font-serif italic mb-20 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              PAHRUMP REALTOR
            </h2>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 bg-gray-50 p-4 pt-8 pr-8 rounded-tr-[50px] flex items-center justify-center transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
            <div className="absolute -top-[50px] left-0 w-[50px] h-[50px] bg-transparent rounded-full shadow-[-25px_25px_0_0_#f9fafb]"></div>
            <div className="absolute bottom-0 -right-[50px] w-[50px] h-[50px] bg-transparent rounded-full shadow-[-25px_25px_0_0_#f9fafb]"></div>
            <button className='bg-black cursor-pointer text-white px-8 py-5 rounded-full font-semibold hover:bg-gray-800 transition whitespace-nowrap text-sm lg:text- tracking-widest uppercase'>
              CALL NOW
            </button>
        </div>

        <div className={`absolute right-0 top-0 bottom-0 w-20 flex items-center justify-center transition-all duration-1000 delay-900 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}>
          <p 
            className='text-white/70 text-xs font-light tracking-[0.3em] uppercase'
            style={{ 
              writingMode: 'vertical-rl',
              textOrientation: 'mixed'
            }}
          >
            MARCI METZGER
          </p>
        </div>
      </div>
    </div>
  )
}