import { useState, useEffect } from 'react'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  const navLinks = ['Home', 'Listings', "Let's Move", 'About Us']

  return (
    <>
      {/* Header Wrapper - z-[100] to stay above the overlay */}
      <nav className={`w-full fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled && !isOpen ? 'bg-white/95 backdrop-blur-md  border-stone-200' : 'bg-transparent'
      }`}> 
        <div className={`flex items-center justify-between max-w-[1800px] mx-auto px-6 md:px-12 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
          
          {/* Logo */}
          <div className="relative">
            <img 
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95" 
              alt="Logo" 
              className={`h-auto object-contain transition-all duration-500 origin-left ${
                isScrolled ? 'w-32' : 'w-40'
              } ${isOpen ? 'brightness-0 invert' : ''}`} 
            />
          </div>

          {/* Desktop Links (Hidden on mobile) */}
          <div className='hidden lg:flex gap-12 items-center uppercase tracking-[0.25em] font-light text-[10px] text-stone-900'>
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-stone-400 transition-colors">{item}</a>
            ))}
          </div>

          {/* Hamburger (Visible on mobile, hidden on lg) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-end w-10 h-10 group"
          >
            <span className={`block w-8 h-[1px] transition-all duration-500 ${
              isOpen ? 'rotate-45 translate-y-[1px] bg-white' : 'mb-2 bg-stone-900'
            }`} />
            <span className={`block w-5 h-[1px] transition-all duration-500 ${
              isOpen ? '-rotate-45 -translate-y-[0px] w-8 bg-white' : 'bg-stone-900'
            }`} />
          </button>
        </div>
      </nav>

      {/* FULLSCREEN OVERLAY - z-[90] */}
      <div className={`fixed inset-0 w-full h-screen bg-[#0a0a0a] z-[90] transition-transform duration-[1000ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col h-full justify-center items-center px-10">
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((item, i) => (
              <a 
                key={item} 
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className={`text-white text-5xl md:text-7xl font-serif italic tracking-tighter transition-all duration-700 delay-[200ms] ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Footer inside menu */}
          <div className="absolute bottom-12 flex flex-col items-center gap-4">
             <div className="w-12 h-[1px] bg-stone-800" />
             <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em]">Marci Metzger • 2026</p>
          </div>
        </div>
      </div>
    </>
  )
}