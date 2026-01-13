import React from 'react'
import { Header } from './pages/Header'
import { Hero } from './pages/Hero'
import About from './pages/About'
import ProcessList from './pages/ProcessList'


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <ProcessList/>
    </div>
  )
}

export default App