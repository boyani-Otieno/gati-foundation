import React from 'react';
import './price.css';

const ExpertViews = () => {
  const articles = [
    {
      image: '/images/wembe.jpg', // Replace with your image path
      title: "Stop Female Genital Mutilation",
      description: 'Real change begins with dialogue. Read how our community-led awareness campaigns are changing mindsets among elders and safely guiding young Kuria girls through alternative rites of passage without the cut',
    },
    {
      image: '/images/smiles.jpeg', // Replace with your image path
      title: 'Protecting a Girl in Kuria, Kenya',
      description: 'Meet the brave young women redefining their futures. This story highlights our rescue and shelter initiatives, providing education and safe havens for girls seeking protection and a chance to learn.',
    },
    {
      image: '/images/smiles-2.jpeg', // Replace with your image path
      title: 'Empowering the Girl child',
      description: 'Education is the ultimate equalizer. Discover how our sanitary pad distribution drives and school sponsorship programs keep girls in the classroom, healthy, confident, and focused on their dreams.',
    },
  ];

  return (
    <div className="expert-views">
      {articles.map((article, index) => (
        <div className="article" key={index}>
          <img src={article.image} alt="article" className="article-image" />
          <h3 className="article-title">{article.title}</h3>
          <p className="article-description">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpertViews;
