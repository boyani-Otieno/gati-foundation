import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./awards.css";

const CardsSection = () => {
  const issues = [
    {
      title: "Mitigating Female Genital Mutilation",
      description:
        "FGM remains widespread in Kuria, affecting an estimated 84% of girls and women"
    },
    {
      title: "Preventing Child, Early and Forced Marriage",
      description:
        "At 17.1 years, Migori County records one of Kenya's lowest median ages at first marriage, pushing many girls into adulthood before they can pursue their potential."
    },
    {
      title: "Reducing the Risk of Early and Teenage Pregnancy",
      description:
        "An estimated 22% of girls aged 15–19 in Migori County have begun childbearing, putting their education and future at risk."
    },
    {
      title: "Supporting Girls to Enrol and Stay in School",
      description:
        "Only 23%–35% of girls in Kuria transition to secondary school, limiting their future opportunities."
    },
    {
      title: "Combating Gender-Based Violence",
      description:
        "Poverty and economic dependence continue to heighten the risk of violence against women and girls."
    },
     {
      title: "Helping Widowed and Conflict-Affected Women Sustain and Rebuild Livelihoods",
      description:
        "Recurring conflict along the Gwitembe-Ang'ata Barikoi border fuels displacement, widens economic exclusion, and deepens poverty."
    },
     {
      title: "Supporting Women Facing Climate and Conflict-Driven Livelihood Losses",
      description:
        "Over 30% increase in climate-driven agricultural losses is deepening food insecurity among women-led households, who face greater pressure to secure their families' needs."
    }
  ];

  return (
    <section className="impact1-section">

      <div className="impact1-header">
        <span>OUR FOCUS AREAS</span>

        <h2>Why This Work Matters</h2>

        <p>
          The challenges facing women and girls are interconnected.
          Through advocacy, education, and community action, we address
          the root causes of inequality and create opportunities for change.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        className="impactSwiper"
      >
        {issues.map((issue, index) => (
          <SwiperSlide key={index}>
            <div className="impact1-card">
              <div className="card-accent"></div>

              <h3>{issue.title}</h3>

              <p>{issue.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardsSection;