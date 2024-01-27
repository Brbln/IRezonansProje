import React from 'react'
import Header2 from '../mainPage/Header2'
import Footer from '../footer/Footer'

const MTemplate = ({template}) => {
  return (
    <>
    <Header2 customHeader={template}/>
    <Footer/>
    </>
  )
}

export default MTemplate