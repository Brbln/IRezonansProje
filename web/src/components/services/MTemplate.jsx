import React from 'react'
import Header2 from '../mainPage/Header2'
import Footer from '../mainPage/Footer'

const MTemplate = ({template}) => {
  return (
    <>
    <Header2 customHeader={template}/>
    <Footer/>
    </>
  )
}

export default MTemplate