 
import "./Home.css"
import About from "./About"
import Services from "./Services"
import Footer from "../footer/Footer"

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