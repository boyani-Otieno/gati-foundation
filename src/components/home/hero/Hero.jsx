import React from "react";
import Heading from "../../common/Heading";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { IoArrowForward } from "react-icons/io5";
import "./hero.css";
//import vida from "../../images/vida.mp4"; 

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
      {/* Background Video Element */}
      {/* <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        <source src={vida} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Dark Overlay to make sure white text is readable */}
      <div className="hero-overlay"></div>

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
            subtitle='Her Legacy. Their Future.'
          />

          {/* Additional Information */}
          <div className="hero-info-section">
            <div className="hero-info">
              <h3>Contribute Time & Resources</h3>
              <p>
                Your time, skills, and resources can help create lasting change in the lives of girls, women, and
                vulnerable families. Volunteer, partner with us, or support our programs as we work to empower
                communities through education, mentorship, dignity, and advocacy in Gwitembe, Kuria East,
                Kenya.
              </p>
              <a href="/contribute" className="hero-btn clear-btn1" target="_blank" rel="noreferrer">
                Get Involved <IoArrowForward />
              </a>
            </div>

            <div className="hero-info">
              <h3>Spread Awareness</h3>
              <p>
               Every conversation has the power to inspire change. Through education, advocacy, and
               community engagement, we amplify voices, challenge harmful norms, and promote a future
               where girls and young women can realize their full potential in Gwitembe, Kuria East, Kenya
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