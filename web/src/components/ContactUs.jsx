 
import "./style.css"
import Footer from './footer/Footer'
import Header2 from './mainPage/Header2'
import img from "./images/slider/t.jpeg"
import Randevu from './Randevu'

const ContactUs = () => {
    return (
        <>
            <Header2 customImg={img} />
            <div className="contact">
            <h2 className='header'> İletişim Bilgilerimiz</h2>
                <div className="container inf">                    
                    <div className='location'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47966.70863611263!2d36.331314!3d41.
                    288861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877b0b27dad13%3A0xf327b47223bbdc14!2sSamsun%20Zay%C4%B1flama
                    %20%26%20Rezonans%20%7C%20Samsun%20Sigara%20B%C4%B1rakma%20%7C%20%C4%B0lkad%C4%B1m%20Rezonans!5e0!3m2!1str
                    !2str!4v1706343158786!5m2!1str!2str" width="600" height="450" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <section className='cont_inf'>
                        <div className="text">
                            <section className='bar'>
                                
                                <p className='tel'>
                                    <i class="fa fa-phone" />
                                    <b>Telefon: </b>
                                </p>
                                <p className='post'>
                                    <i class="fas fa-envelope"></i>
                                    <b> E-Posta: </b>
                                </p>
                                <p className='adr'>
                                    <i class="fa fa-map"></i>
                                    <b>Adres: </b>
                                </p>
                            </section>
                            <section className='par'>
                                <p className='tel'>+90 (555) 555 5555</p>
                                <p className='post'>bilgi@ilkadimrezonans.com</p> 
                                <p className='adr'>Kale Mah., 19 Mayıs Blv., 55070 İlkadım/Samsun</p>
                            </section>
                        </div>
                    </section>
                </div>
            </div>

            <Randevu />
            <Footer />
        </>
    )
}

export default ContactUs
