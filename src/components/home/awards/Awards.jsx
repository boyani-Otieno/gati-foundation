import React from 'react';
import './awards.css';

const CardsSection = () => {
  return (
    <section className="cards-section">
      <h2>WHY DO ALL THESE MATTER</h2>
      <div className="cards-container">
        <div className="card">
          <h3>FGM</h3>
          <p>According to the recently released Kenya Demographic & Health Survey (KDHS) data 
            for 2022, the prevalence of FGM is 15 percent in the country, meaning that 15 percent 
            of girls and women aged 15 to 49 have been circumcised. This is much too high. Yet, 
            progress is being made.</p>
        </div>
        <div className="card">
          <h3>HIV</h3>
          <p>In Kenya, it is estimated that there are 1.6 million people living with HIV/AIDS and 1.1 
            million children who are orphans due to AIDS. As a whole, more than six percent of the 
            population is infected with HIV, but the epidemic has hit specific regions and vulnerable 
            groups much more seriously.</p>
        </div>
        <div className="card">
          <h3>CLIMATE</h3>
          <p>Climate change in Kenya and across East Africa has led to more frequent droughts. These 
            have caused wild animals, such as lions and elephants, to wander further in search of water 
            and food. Lions have then come into conflict with humans when they kill sheep and goats in 
            the villages near the national parks.</p>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
