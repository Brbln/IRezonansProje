import React from "react"
import "./Home.css"
import Content from "./Content"
import Services from "./Services"

const Home = () =>{
    return(
        <>
        <section className="home">
          <Content />
          <Services />
        </section>
        </>
    )
}
export default Home