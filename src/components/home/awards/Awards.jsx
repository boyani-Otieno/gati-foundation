import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./awards.css";

const CardsSection = () => {
  const issues = [
    {
      title: "FGM & GBV",
      description:
        "While Kenya's national FGM prevalence among women aged 15–49 stands at 15% (KDHS 2022), the rate in the Kuria community remains as high as 84%. In Kuria East, girls aged 9–17 continue to face heightened risk during traditional cutting seasons."
    },
    {
      title: "Championing Education Access",
      description:
        "Many girls in marginalized communities face barriers to education because of poverty, early marriage, and harmful cultural practices. Education remains one of the strongest pathways to empowerment."
    },
    {
      title: "Livelihoods in Border Conflict",
      description:
        "The Migori–Narok boundary dispute continues to disrupt economic activity. Women who depend on small businesses and cross-border trade face reduced income opportunities and increased vulnerability."
    },
    {
      title: "Climate Change & Agriculture",
      description:
        "Recurring droughts and unpredictable weather patterns threaten food security. Women-headed households are often the hardest hit during climate shocks."
    },
    {
      title: "Partnerships for Community Change",
      description:
        "Lasting change requires collaboration. We work with local leaders, schools, healthcare providers, and community champions to build sustainable solutions."
    }
  ];

  return (
    <section className="impact-section">

      <div className="impact-header">
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
            <div className="impact-card">
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