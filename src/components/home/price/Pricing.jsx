import React from 'react';
import './price.css';

const ExpertViews = () => {
  const articles = [
    {
      image: '/images/wembe.jpg', // Replace with your image path
      title: "Stop Female Genital Mutilation",
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
      image: '/images/girl.jpg', // Replace with your image path
      title: 'Protecting a Girl in Sounthern Kenya',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
      image: '/images/girls.jpg', // Replace with your image path
      title: 'Empowering the Girl child',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
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
