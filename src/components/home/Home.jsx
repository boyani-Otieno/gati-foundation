import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Location from "./location/Location";
import Price from "./price/Pricing";
import Recent from "./recent/Recent";
import Team from "./team/Team";

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
        <Featured />
      </div>
      <div data-aos="fade-left">
        <Recent />
      </div>
      <div data-aos="zoom-in">
        <Awards />
      </div>
      <div data-aos="fade-up">
        <Location />
      </div>
      <div data-aos="fade-right">
        <Team />
      </div>
      <div data-aos="fade-left">
        <Price />
      </div>
    </>
  );
};

export default Home;
