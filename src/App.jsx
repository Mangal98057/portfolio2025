import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import Project from './Pages/Project'
import Skills from './Pages/Skills'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path='/skills'element={<Skills/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/project'element={<Project/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
