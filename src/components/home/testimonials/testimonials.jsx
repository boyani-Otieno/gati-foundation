import React from "react";
import "./testimonials.css";

const testimonials = [
  {
    quote:
      "Through Margaret Robi Foundation I discovered confidence in myself. The mentorship sessions inspired me to stay in school and dream beyond my circumstances.",
    name: "Sharon A.",
    role: "Student",
  },
  {
    quote:
      "The community forums opened meaningful conversations in our village. We now work together to protect and support girls in our community.",
    name: "John O.",
    role: "Community Leader",
  },
  {
    quote:
      "Margaret Robi Foundation's programs have transformed the way our school supports girls. The mentorship and awareness sessions continue to make a lasting impact.",
    name: "Millicent K.",
    role: "Teacher",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <span className="testimonials-tag">
            TESTIMONIALS
          </span>

          <h2>
            Voices of
            <br />
            Transformation
          </h2>

          <p>
            Every journey begins with someone believing in a girl's
            potential. These are the stories of lives touched through
            mentorship, education, and community action.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="quote-mark">“</div>

              <p className="testimonial-text">
                {item.quote}
              </p>

              <div className="testimonial-divider"></div>

              <h4>{item.name}</h4>

              <span>{item.role}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;