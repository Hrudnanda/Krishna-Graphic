
import React from 'react'
import Navbar from './Naviation/Navbar'
import Home from './Sections/Home'
import Service from './Sections/Service'
import Gallery from './Sections/Gallery'
import About from './Sections/About'
import Contact from './Sections/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Service/>
      <Gallery/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App