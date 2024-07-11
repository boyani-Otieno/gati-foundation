import React from "react";
import { GiInspiration } from "react-icons/gi";
import Heading from "../../common/Heading";
import { motion } from "framer-motion";
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='hero'>
      <div className='container'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Heading title='Join the cause ' subtitle='Make a difference, No matter how small.' />

          <form className='flex'>
            <motion.div className='box' variants={textVariants}>
              <span>Serve</span>
              <input type='text' placeholder='Anywhere' />
            </motion.div>
            <motion.div className='box' variants={textVariants}>
              <span>Inspire</span>
              <input type='text' placeholder='Young ones' />
            </motion.div>
            <motion.div className='box' variants={textVariants}>
              <span>Teach</span>
              <input type='text' placeholder='Everyone' />
            </motion.div>
            <motion.div className='box' variants={textVariants}>
              <h4>Protect</h4>
            </motion.div>
            <motion.button className='btn1' variants={textVariants}>
              <GiInspiration />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
