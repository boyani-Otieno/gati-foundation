import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Awards from "./awards/Awards";
//import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
//import StorySection from "./story/StorySection";
//import Price from "./price/Pricing";
import Recent from "./recent/Recent";
import ImpactSection from "./Impact/ImpactSection";
import TestimonialsSection from "./testimonials/testimonials";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-right">
        <Awards />
        {/* <Featured /> */}
      </div>
      <div data-aos="fade-left">
        <Recent />
      </div>
      <div data-aos="zoom-in">
        {/* <Awards /> */}
      </div>
      <div data-aos="fade-up">
        {/* <StorySection /> */}
      </div>
      <div data-aos="fade-right">
        <ImpactSection />
      </div>
      <div data-aos="fade-left">
        <TestimonialsSection />
      </div>
      <div data-aos="fade-right">
        {/* <Price /> */}
      </div>
    </>
  );
};

export default Home;
