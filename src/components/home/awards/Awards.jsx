import React from "react";
import "./awards.css";

const CardsSection = () => {

  const issues = [
    {
      title: "FGM",
      highlight: "15%",
      description:
        "According to the Kenya Demographic and Health Survey (KDHS) 2022, 15% of girls and women aged 15–49 in Kenya have undergone Female Genital Mutilation. Although progress has been made, many girls remain vulnerable to harmful cultural practices."
    },

    {
      title: "HIV",
      highlight: "1.6M",
      description:
        "According to NASCOP, approximately 1.6 million people in Kenya live with HIV/AIDS. The impact continues to affect vulnerable communities, especially women, children, and marginalized groups."
    },

    {
      title: "CLIMATE",
      highlight: "East Africa",
      description:
        "Climate change continues to increase droughts and environmental challenges across East Africa, affecting livelihoods, food security, and the ability of communities to thrive."
    }
  ];


  return (

    <section className="cards-section">


      <div className="cards-heading">

        <h2>
          Why This Work Matters
        </h2>

        <p>
          The Margaret Robi Foundation addresses some of the most pressing
          challenges affecting women, girls, and vulnerable communities.
          Through advocacy, empowerment, and sustainable solutions, we work
          toward a more equitable future.
        </p>

      </div>



      <div className="cards-container">


        {issues.map((issue, index) => (

          <div className="card" key={index}>


            <span className="card-number">
              {issue.highlight}
            </span>


            <h3>
              {issue.title}
            </h3>


            <p>
              {issue.description}
            </p>


          </div>

        ))}


      </div>


    </section>

  );
};


export default CardsSection;