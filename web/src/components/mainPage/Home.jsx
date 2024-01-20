import React from "react"
import "./Home.css"
import About from "./About"
import Services from "./Services"
import Footer from "./Footer"

const Home = () =>{
    return(
        <>
        <section className="home">
          <About />
          <Services />
          <Footer/>
        </section>
        </>
    )
}
export default Home