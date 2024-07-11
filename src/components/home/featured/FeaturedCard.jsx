import React from "react";
import { featured } from "../../data/Data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturedCard = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.4, transition: { duration: 0.3 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="content grid5 mtop"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {featured.map((item, index) => (
        <motion.div
          className="box"
          key={index}
          variants={itemVariants}
          whileHover="hover"
        >
          <img src={item.cover} alt="" />
          <h4>{item.name}</h4>
          <label>{item.total}</label>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturedCard;
