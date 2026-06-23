import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Footer from './Components/Footer'
import Contacts from './Components/Contacts'

const Home = () => {
  return (
    <>

      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  )
}

export default App