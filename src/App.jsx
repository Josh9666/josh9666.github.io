import React from 'react'
import './App.css'
import Navbar from "./components/custom/Navbar.jsx"
import Hero from "./components/sections/Hero.jsx"
import About from "./components/sections/About.jsx"
import Skills from "./components/sections/Skills.jsx"
import Qualifications from "./components/sections/Qualifications.jsx"
import Projects from "./components/sections/Projects.jsx"
import Contact from "./components/sections/Contact.jsx"
import Footer from "./components/Footer.jsx"
import { ThemeProvider } from './context/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <div className='min-h-screen bg-blue-50 dark:bg-gradient-to-r from-gray-900 to-gray-900 via-gray-800'>
        <Navbar />
        <main className="container mx-auto px-4">
          <Hero />
          <About />
          <Skills />
          <Qualifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
