import React from "react"
import "./Home.css"
import About from "./About"
import Services from "./Services"

const Home = () =>{
    return(
        <>
        <section className="home">
          <About />
          <Services />
        </section>
        </>
    )
}
export default Home