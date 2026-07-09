import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoSchoolOutline,
  IoLeafOutline,
  IoShieldCheckmarkOutline,
  IoPeopleOutline,
  IoHeartOutline,
} from "react-icons/io5";

import "./Featured.css";

const FocusSection = () => {
  const [active, setActive] = useState(0);

  const priorities = [
    {
      title: "Mitigating FGM & GBV",
      icon: <IoShieldCheckmarkOutline />,
      content:
        "FGM remains widespread in Kuria, affecting an estimated 84% of girls and women. Poverty and economic dependence continue to heighten the risk of violence against women and girls.",
    },
    {
      title: "Barriers to Education",
      icon: <IoSchoolOutline />,
      content:
        "Only 23%–35% of girls in Kuria transition to secondary school, limiting their future opportunities.",
    },
    {
      title: "Conflict, Widowhood & Economic Exclusion",
      icon: <IoHeartOutline />,
      content:
        "Recurring conflict along the Gwitembe-Ang'ata Barikoi border fuels displacement, widens economic exclusion, and deepens poverty.",
    },
    {
      title: "Climate and Change and Food Security",
      icon: <IoLeafOutline />,
      content:
        "Over 30% increase in climate-driven agricultural losses is deepening food insecurity among women-led households, who face greater pressure to secure their families' needs.",
    },
    {
      title: "Leadership and Community Action",
      icon: <IoPeopleOutline />,
      content:
        "We believe lasting change happens when communities lead it themselves. Through leadership development, mentorship, partnerships, and community forums, we strengthen local voices that champion equality, inclusion, and social transformation.",
    },
  ];

  return (
    <section className="focusSection">

      <div className="focusContainer">

        {/* LEFT SIDE */}

        <motion.div
          className="focusLeft"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="focusTag">
            OUR PRIORITIES
          </span>

          <h2>
            What We <br />
            Focus On
          </h2>

          <div className="goldLine"></div>

          <p>
            Every programme we deliver is designed to address the underlying
            challenges affecting girls, young women, and vulnerable households
            in Kuria. Through community partnerships, education, protection,
            and empowerment, we work towards creating lasting change that
            strengthens families and transforms futures.
          </p>

          <a href="/need" className="focusBtn">
            Learn More →
          </a>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="focusRight"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          {priorities.map((item, index) => (

            <div
              key={index}
              className={`accordionItem ${
                active === index ? "active" : ""
              }`}
            >

              <button
                className="accordionHeader"
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              >

                <div className="headerLeft">

                  <div className="iconCircle">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                </div>

                <span
                  className={`plus ${
                    active === index ? "rotate" : ""
                  }`}
                >
                  +
                </span>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    className="accordionContent"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: .35,
                    }}
                  >

                    <p>{item.content}</p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default FocusSection;