import React from "react";
import "./gallery.css";

const galleryItems = [

  {
    type: "image",
    src: "/images/smiles.jpeg",
  },

  {
    type: "image",
    src: "/images/full-team.jpeg",
  },

  {
    type: "video",
    src: "/images/vida.mp4",
  },

  {
    type: "image",
    src: "/images/two.jpeg",
  },

  {
    type: "image",
    src: "/images/three.jpeg",
  },

  {
    type: "video",
    src: "/images/vida2.mp4",
  },

  {
    type: "image",
    src: "/images/noshame.jpeg",
  },

  {
    type: "image",
    src: "/images/mentor.jpeg",
  },

];

const Gallery = () => {

  return (

    <section className="gallery-page">

      <div className="gallery-hero">

        <span className="gallery-subtitle">
          Our Impact In Pictures
        </span>

        <h1>
          Gallery
        </h1>

        <p>
          Every photograph tells a story of resilience,
          empowerment, and community transformation.
        </p>

      </div>


      <div className="masonry-grid">

        {galleryItems.map((item, index) => (

          <div className="gallery-card" key={index}>

            {item.type === "image" ? (

              <img
                src={item.src}
                alt="Foundation Activity"
              />

            ) : (

              <video
                controls
                preload="metadata"
              >
                <source src={item.src} />
              </video>

            )}

          </div>

        ))}

      </div>

    </section>

  );

};

export default Gallery;