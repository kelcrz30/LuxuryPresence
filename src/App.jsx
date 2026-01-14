import React from 'react'
import { Header } from './pages/Header'
import { Hero } from './pages/Hero'
import About from './pages/About'
import ProcessList from './pages/ProcessList'
import SearchSection from './pages/SearchSection'
import Logo from './pages/Logo'
import PhotoGallery from './pages/PhotoGallery'
import Services from './pages/Services'
import ContactSection from './pages/ContactSection'
import LuxuryFooter from './pages/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <ProcessList/>
      <SearchSection/>
      <Logo/>
      <PhotoGallery/>
      
      <Services/>
      <ContactSection/>
      <LuxuryFooter/>
    </div>
  )
}

export default App