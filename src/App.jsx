
import React from 'react'
import Navbar from './Naviation/Navbar'
import Home from './Sections/Home'
import Service from './Sections/Service'
import Gallery from './Sections/Gallery'
import About from './Sections/About'
import Contact from './Sections/Contact'
import WhatsAppButton from './Sections/whatsapp'
import { FaWhatsapp } from 'react-icons/fa'
import Footer from './Sections/Footer'
import { Route, Routes } from 'react-router-dom'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/About' element={<About/>} />
<Route path='/' element={<Home/>} />
      </Routes>
      <Home/>
      <Service/>
      <Gallery/>
      <About/>
     
      <Footer/>
      <WhatsAppButton/>
      
    </div>
  )
}

export default App