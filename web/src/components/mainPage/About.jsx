import React from 'react'
import img from "../images/slider/3.jpg"

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
 
          <h1 className='header'>İlkadım Zayıflama & Rezonans</h1>
          <div className="text">
            <div className="parag">
              <p>
              Samsun'da sağlıklı kilo vermeniz için yola çıktık binlerce danışanımıza hizmet verdik ve yolumuza bu doğrultuda devam ediyoruz.</p>
              <br />
              {/* <p>
                Sağlıklı bir diyet, vücudun ihtiyaç duyduğu temel besinleri sağlamalı ve aynı zamanda kalori alımını
                dengelemelidir. Sebze, meyve, tam tahıl ve protein kaynakları gibi çeşitli besin gruplarını içeren bir
                diyet, vücudun enerji ihtiyacını karşılamaya yardımcı olabilir. Aynı zamanda, işlenmiş gıdalardan ve
                şekerli içeceklerden kaçınmak, sağlıklı kilo kaybının önemli bir parçasıdır.
              </p>
               */}
            </div>
            <div className="img">
              <img src={img} alt="" />
            </div>
          </div>
            {/* <div className="parag">
              <p>
                Sağlıklı bir diyet, vücudun ihtiyaç duyduğu temel besinleri sağlamalı ve aynı zamanda kalori alımını
                dengelemelidir. Sebze, meyve, tam tahıl ve protein kaynakları gibi çeşitli besin gruplarını içeren bir
                diyet, vücudun enerji ihtiyacını karşılamaya yardımcı olabilir. Aynı zamanda, işlenmiş gıdalardan ve
                şekerli içeceklerden kaçınmak, sağlıklı kilo kaybının önemli bir parçasıdır.<br/>
                
                Sağlıklı bir diyet, vücudun ihtiyaç duyduğu temel besinleri sağlamalı ve aynı zamanda kalori alımını
                dengelemelidir. Sebze, meyve, tam tahıl ve protein kaynakları gibi çeşitli besin gruplarını içeren bir
                diyet, vücudun enerji ihtiyacını karşılamaya yardımcı olabilir. Aynı zamanda, işlenmiş gıdalardan ve
                şekerli içeceklerden kaçınmak, sağlıklı kilo kaybının önemli bir parçasıdır.</p>
            </div> */}
        </div>
      </div>  
    </>
  )
}
export default About

