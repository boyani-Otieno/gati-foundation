import React, { useEffect, useRef, useState } from "react";
import "./ImpactSection.css";

const stats = [
  {
    number: 190,
    suffix: "+",
    label: "Girls & Young Women Reached",
  },
  {
    number: 50,
    suffix: "+",
    label: "Mentorship Sessions Delivered",
  },
  {
    number: 5,
    suffix: "+",
    label: "Community Awareness Forums Conducted",
  },
  {
    number: 10,
    suffix: "+",
    label: "Schools Engaged",
  },
];

const Counter = ({ target, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrame;
    let timeout;

    const duration = 1800; // Count duration (ms)
    const pause = 1500; // Pause before restarting (ms)

    const animate = () => {
      const startTime = performance.now();

      const update = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        // Ease-out cubic animation
        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(eased * target));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        } else {
          setCount(target);

          timeout = setTimeout(() => {
            setCount(0);
            animate(); // Restart animation
          }, pause);
        }
      };

      animationFrame = requestAnimationFrame(update);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [target, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const ImpactSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start the looping animation only once
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [visible]);

  return (
    <section className="impact-section" ref={sectionRef}>
      <div className="impact-container">
        <div className="impact-header">
          <span className="impact-tag">OUR IMPACT</span>

          <h2>
            Creating Opportunities. Restoring Digninty.
            <br />
            Strengthening Communities
          </h2>

          <p>
            Through community-driven action, we are helping girls
            and young women living with the realities of ongoing conflict,
             harmful practices, and inequality restore dignity, expand opportunites, and 
             shape their own future.
          </p>
        </div>

        <div className="impact-grid">
          {stats.map((item, index) => (
            <div className="impact-card" key={index}>
              <h3>
                <Counter
                  target={item.number}
                  suffix={item.suffix}
                  start={visible}
                />
              </h3>

              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;