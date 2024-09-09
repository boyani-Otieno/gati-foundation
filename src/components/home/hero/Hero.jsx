import React from "react";
import Heading from "../../common/Heading";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { IoArrowForward } from "react-icons/io5";
import "./hero.css";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className='hero'>
      <div className='container'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Heading
            title={
              <Typewriter
                words={['Join the cause']}
                loop={99}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            }
            subtitle='Make a difference, No matter how small.'
          />

          {/* Additional Information */}
          <div className="hero-info-section">
            <div className="hero-info">
              <h3>Contribute Time & Resources</h3>
              <p>
                Your time and resources can help make a lasting impact. 
                Volunteer, donate, or get involved in our initiatives to 
                create positive change. Join us as we Uplift, Protect, and Mentor 
                Communities in Kuria, Kenya
              </p>
              <a href="/contribute" className="hero-btn clear-btn1" target="_blank" rel="noreferrer">
                Get Invloved <IoArrowForward />
              </a>
            </div>

            <div className="hero-info">
              <h3>Spread Awareness</h3>
              <p>
               Underage Kuria girls after undergoing female circumcision (FGM)
               walk along Kehancha-Migori road in Kuria West. Despite the ban on 
               FGM, some communities still secretly carry out the practice.
              </p>
              <a href="https://www.standardmedia.co.ke/nyanza/article/2001438675/activists-from-kenya-tanzania-join-forces-to-fight-female-cut#google_vignette" 
              className="hero-btn clear-btn" target="_blank" rel="noreferrer">
                Read More <IoArrowForward />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
