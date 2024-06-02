import React from 'react'
import { Link } from 'react-router-dom'
import img from "../images/img/ista.jpg"
import img1 from "../images/img/gida2.jpg"
import img3 from "../images/img/bag3.jpg"

export const Services = () => {
    return (
        <>
        <div className="services container">
            <h1 className='header'>Hizmetlerimiz </h1>
            <div className="text parag">
                <div className="s_box">
                    <div className="s_row">
                        <img src={img} alt="" />
                        <h1>İştah Kapama </h1>
                        <p>
                            İştah kontrolünüzü sağlayabilirsiniz. Karbonhidrat içeren gıdalara karşı (ekmek, pasta, baklava, simit, börek,
                            tüm sütlü tatlılar, çikolata, hamur, unlu gıdalar) iştahınızı kesebilirsiniz. Yeme isteği hissetmeden rahat bir
                             şekilde kilo verebilirsiniz. 

                        </p>
                        <Link to="/hizmetlerimiz/istah-kapama">
                        <button className='button'>Devamını Oku</button>
                        </Link>
                    </div>
                    <div className="s_row">
                        <img src={img1} alt="" />
                        <h1>Gıda Silme </h1>
                        <p>
                        Rezonans terapisi, Samsun zayıflama hizmeti, bedenin biyoelektrik ve elektromanyetik alanlarını 
                        kullanarak vücudu dengelemeyi amaçlayan bir alternatif tıp yöntemidir. Bu terapinin bir uygulama
                         şekli, özellikle gıda düşkünlüğü ve iştah kontrolü ile ilgili sorunları ele almak için kullanılır.
                        </p>                        
                        <Link to="/hizmetlerimiz/gida-silme">
                        <button className='button'>Devamını Oku</button>
                        </Link>
                    </div>
                    <div className="s_row">
                        <img src={img3} alt="" />
                        <h1>Bağımlılık Terapisi </h1>
                        <p>
                        Kişinin maddenin elektromanyetik frekansı rezonans cihazı ile ters çevrilerek geri gönderilir.
                         Maddenin frekansları tamamen silinerek, kişideki tanınmışlık durumları ortadan kaldırılır. 
                         Bağımlılıkları ortadan kalkar.
                        </p>                        
                        <Link to="/hizmetlerimiz/bagimlilik-terapisi">
                        <button className='button'>Devamını Oku</button>
                        </Link>
                    </div>                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Services