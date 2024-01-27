import React from 'react'
import Header2 from './mainPage/Header2'
import img from "./images/slider/il.jpg"
import Footer from './footer/Footer'
import "./style.css"


export const Blog = () => {
    return (
        <>
            <Header2 customHeader={"Bizden Görüntüler"} />
            <div className="blog">
                <div className="container">
                    <h2 className='header'>Danışan Değerlendirmelerimiz</h2>
                    <img src={img} alt="" />
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Blog