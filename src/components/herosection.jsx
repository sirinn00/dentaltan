import React from 'react';
import '../css/herosection.css';

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/hero.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-overlay">
        <h1>
          Bizim Önceliğimiz<br />
          Gülüşünüz
        </h1>
        <p className="hero-desc">
        DentAltan’da, her detayı sizin için düşündük.  
        Gülümsemenizi hak ettiği değere ulaştırmak için buradayız.
        </p>
        <button className="hero-btn">Hemen Randevu Alın</button>
      </div>
    </section>
  );
};

export default HeroSection;
