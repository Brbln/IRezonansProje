import React from 'react'
import Header2 from '../mainPage/Header2'
import "../mainPage/Home.css"
import Footer from '../footer/Footer'
import Randevu from '../Randevu'
import img from "../images/img/gida2.jpg"


const GidaSilme = ({ header }) => {
    return (
        <>
            <Header2 customHeader={header} customImg={img} />
            <div className="service container">
                <h1 className="h1head">{header} Nedir?</h1>
                <div className="parag">
                    <p> İştah kontrolünüzü sağlayabilirsiniz. Karbonhidrat içeren gıdalara karşı (ekmek, pasta, baklava,simit,börek, tüm sütlü tatlılar, çikolata, hamur, unlu gıdalar) iştahınızı kesebilirsiniz. 
                        Yeme isteği hissetmeden rahat bir şekilde kilo verebilirsiniz.</p>
                    {/* <p>Eğer yukarıdaki adımlar sorununuzu çözmezse, sorunun daha karmaşık olabileceğini ve
                        Microsoft Destek veya bilgisayarınızın üreticisi tarafından sunulan destek kaynaklarından yardım almanız önerilir.</p> */}

                    <h2 className='h2head'> {header} ile etkilenecek durumlar nelerdir?</h2>
                    {/* <p>Eğer yukarıdaki adımlar sorununuzu çözmezse, sorunun daha karmaşık olabileceğini ve daha fazla incelemenin
                        gerekebileceğini gösterir. Bu durumda, Microsoft Destek veya bilgisayarınızın üreticisi tarafından sunulan
                        destek kaynaklarından yardım almanız önerilir.Eğer yukarıdaki adımlar sorununuzu çözmezse, sorunun daha karmaşık
                        olabileceğini ve daha fazla incelemenin gerekebileceğini gösterir. Bu durumda,daha fazla incelemenin
                        gerekebileceğini gösterir. Bu durumda, Microsoft Destek veya bilgisayarınızın üreticisi tarafından sunulan
                        destek kaynaklarından yardım almanız önerilir.Eğer yukarıdaki adımlar sorununuzu çözmezse, sorunun daha karmaşık
                        olabileceğini ve daha fazla incelemenin gerekebileceğini gösterir. Bu durumda,
                        Microsoft Destek veya bilgisayarınızın üreticisi tarafından sunulan destek kaynaklarından yardım almanız önerilir.</p>
                    <p>Eğer yukarıdaki adımlar sorununuzu çözmezse, sorunun daha karmaşık olabileceğini ve daha fazla incelemenin
                        gerekebileceğini gösterir. Bu durumda, Microsoft Destek veya bilgisayarınızın üreticisi tarafından sunulan
                        destek kaynaklarından yardım almanız önerilir.Eğer yukarıdaki adımlar sorununuzu çözmezse, sorunun daha karmaşık
                        olabileceğini ve daha fazla incelemenin gerekebileceğini gösterir. Bu durumda,</p> */}
                </div>
            </div>
            <Randevu/>
            <Footer />
        </>
    )
}

export default GidaSilme