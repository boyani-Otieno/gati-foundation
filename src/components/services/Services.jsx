import React from "react";
import "./services.css";

const Service = () => {
  const cardColors = [
    '#c4a484', // Light pink
    '#2e5a88', // Light green
    '#ddddff', // Light blue
    '#ffffdd', // Light yellow
  ];
  const cardData = [
    {
      title: 'Health',
      icon: '🚑', // Ambulance emoji
      text: 'Per capita public spending for health in Kenya is less than $5. The WHO recommendation for low-income countries is $34 per capita.',
    },
    {
      title: 'Mothers',
      icon: '👩‍🍼', // Breastfeeding woman emoji
      text: 'Kenya has the second highest number of maternal deaths annually in the africa. The great majority of these deaths are preventable - these women do not have to die.',
    },
    {
      title: 'HIV',
      icon: '💧', // Droplet emoji
      text: 'Southern Nyanza kenya has the largest HIV-infected population in the kenya. It also has the third highest level of unmet need for anti-retroviral therapy in the world.',
    },
    {
      title: 'FGM',
      icon: '👥', // Group of people emoji
      text: '50,000 south nyanza kenyans, mostly women and girls are affected by fgm. And yet, most of these tragic deaths are preventable.',
    },
  ];
  return (
    <div className="geanco-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>The Need</h1>
          <p>
            Improving lives in Southern Kenya through education, healthcare, and more.
          </p>
        </div>
      </section>

      <section>
      <div className="cards-container">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card card-${index + 1}`}
          style={{ backgroundColor: cardColors[index % cardColors.length] }}
        >
          <div className="card-icon">{card.icon}</div>
          <h2 className="card-title">{card.title}</h2>
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>
      </section>
     

    </div>
  );
};

export default Service;
