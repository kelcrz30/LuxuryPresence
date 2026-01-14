import { useState, useEffect } from 'react'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`bg-gray-50 w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? ' border-gray-200 shadow-sm' : ''
    }`}> 
      <header className={`transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className='flex items-center justify-between mx-auto px-12'>
          
          <img 
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95" 
            alt="Logo" 
            className={`h-auto object-contain transition-all duration-300 ${
              isScrolled ? 'w-40' : 'w-44'
            }`} 
          />

          <nav className='flex items-center gap-12'>

            <div className='hidden lg:flex gap-10 items-center uppercase tracking-widest font-medium text-xs'>
              <a className='text-gray-900 hover:text-gray-500 transition-colors' href="">Home</a>
              <a className='text-gray-900 hover:text-gray-500 transition-colors' href="">Listings</a>
              <a className='text-gray-900 hover:text-gray-500 transition-colors' href="">Let's Move</a>
              <a className='text-gray-900 hover:text-gray-500 transition-colors' href="">About Us</a>
            </div>
          </nav>

        </div>
      </header>
    </div>
  )
}