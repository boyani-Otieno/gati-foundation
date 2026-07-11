import React, { useEffect, useRef, useState } from "react";
import "./OurImpact.css";

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

    let frame;
    let timer;

    const duration = 1800;
    const pause = 1500;

    const animate = () => {
      const startTime = performance.now();

      const update = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(eased * target));

        if (progress < 1) {
          frame = requestAnimationFrame(update);
        } else {
          setCount(target);

          timer = setTimeout(() => {
            setCount(0);
            animate();
          }, pause);
        }
      };

      frame = requestAnimationFrame(update);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [target, start]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Impact = () => {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

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

    <main className="impactPage">

      <section className="impactIntro" ref={sectionRef}>

        <div className="container">

          <span className="impactTag">
            OUR IMPACT
          </span>

          <h1>
            Creating Opportunities.
            <br />
            Restoring Dignity.
            <br />
            Strengthening Communities.
          </h1>

          <p>
            Every statistic represents a girl encouraged to remain
            in school, a family engaged through community dialogue,
            and a future made possible through collective action.
            While numbers tell part of the story, the real impact
            is found in lives transformed and communities choosing
            hope over harmful traditions.
          </p>

        </div>

      </section>

      <section className="impactStats">

        <div className="container">

          <div className="statsGrid">

            {stats.map((item, index) => (

              <div
                className="statCard"
                key={index}
              >

                <h2>

                  <Counter
                    target={item.number}
                    suffix={item.suffix}
                    start={visible}
                  />

                </h2>

                <p>
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="impactQuote">

        <div className="container">

          <blockquote>

            “Real change isn't measured only by numbers,
            but by every girl who discovers she has the
            freedom to dream and the opportunity to succeed.”

          </blockquote>

        </div>

      </section>

    </main>

  );

};

export default Impact;