import React from 'react'
import Header2 from './mainPage/Header2'
import About from './mainPage/About'
import Footer from './footer/Footer'
import Randevu from './Randevu'

const AboutPage = () => {
  return (
    <>
    <Header2 customHeader={"Hakkımızda"}/>
    <About/>
    <Randevu/>        
    <Footer/>
    </>
  )
}

export default AboutPage