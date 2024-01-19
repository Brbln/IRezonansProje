import React from 'react'
import "./Home.css"
import img from "../images/slider/3.jpg"
const ContactUs = () => {
    return (
        <>
            <div className="contact">
                <div className="nav">
                    <img className='img' src={img} alt="" />
                    <h2>İletişim</h2>
                </div>
                <div className="container">
                    <section className='location'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23983.35435481579!2d36.31071413476563!3d41.
                        2888609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877b0b27dad13%3A0xf327b47223bbdc14!2sSamsun%20Zay%C
                        4%B1flama%20%26%20Rezonans%20%7C%20Samsun%20Sigara%20B%C4%B1rakma%20%7C%20%C4%B0lkad%C4%B1m%20Rezonans!5e0!3m2!1str!2str
                        !4v1705688324629!5m2!1str!2str"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                    <section className='cont_inf'>
                        <h2> İletişim Bilgilerimiz</h2>
                        <p><i class="fa fa-map-marker-alt" />
                            <b> Adres: </b>
                            <div className="text">
                            Kale, Öğretmenevi karşısı, 19 Mayıs Blv. Yuvam Apt B Blok Kat:3, 55070 İlkadım/Samsun</div>
                        </p>

                        <p> <i class="fa fa-phone" /><b>Telefon: </b>
                            +90 (553) 987 9830</p>
                        <p>
                            <i class="fas fa-envelope"></i>
                            <b>E-Posta: </b>
                            info@gmail.com</p>
                    </section>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}

export default ContactUs