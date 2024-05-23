import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='About The Event' title='Conference'/>
        <Programs/>
        <Title subtitle='Speakers' title='About The Speakers'/>
        <Testimonials/>
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        
        <Title subtitle='Register' title='Submit Your Paper'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App