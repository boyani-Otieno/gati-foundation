import React from 'react';
import './awards.css';

const CardsSection = () => {
  return (
    <section className="cards-section">
      <h2>WHY DO ALL THESE MATTER</h2>
      <div className="cards-container">
        <div className="card">
          <h3>FGM</h3>
          <p>According to Kenya Demographic and Health Survey (KDHS) 2022, 15 percent of girls and women
            aged 15 to 49 in kenya have undergone female genital mutilation (FGM). While this figure remains 
            high, progress has been made in reducing FGM cases over the years.
          </p>
        </div>
        <div className="card">
          <h3>HIV</h3>
          <p>According to the Kenya National AIDS and STI Control Program (NASCOP), an estimated 1.6 million people in kenya
            are living with HIV/AIDS, and 1.1 million children are orphans due to AIDS-related causes. While more than six percent
            of the population is infected with HIV, the epidemic has disproportionately affected certain regions and vulnerable groups.
          </p>
        </div>
        <div className="card">
          <h3>CLIMATE</h3>
          <p>Kenya and East Africa are increasingly experiencing the impacts of climate change, with more
            frequent and severe droughts disrupting ecosystems and livelihoods. These prolonged dry periods 
            strain the natural resources, prompting shifts in how communities and ecosystems adapt to the 
            changing environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
