import React from "react";
import Heading from "../../common/Heading";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
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
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            }
            subtitle='Make a difference, No matter how small.'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
