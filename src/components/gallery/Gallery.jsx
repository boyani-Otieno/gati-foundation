import React from "react";
import "./gallery.css";

const galleryItems = [

  {
    type: "image",
    src: "/images/smiles.jpeg",
  },

  {
    type: "image",
    src: "/images/noshame.jpeg",
  },

  {
    type: "video",
    src: "/images/vida.mp4",
  },

  {
    type: "image",
    src: "/images/full-team.jpeg",
  },

  {
    type: "image",
    src: "/images/wote.jpeg",
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
  {
    type: "image",
    src: "/images/partners.jpeg",
  },
   {
    type: "image",
    src: "/images/san.jpeg",
  },
  {
    type: "image",
    src: "/images/mentor2.jpeg",
  },
   {
    type: "image",
    src: "/images/boke-milly.jpeg",
  },
  {
    type: "image",
    src: "/images/pads.jpeg",
  },
  {
    type: "image",
    src: "/images/sisi-wote.jpeg",
  },
  {
    type: "image",
    src: "/images/pboke.jpeg",
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
                autoPlay
                muted
                loop
                playsInline
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