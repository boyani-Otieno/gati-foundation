import React from "react";
import { Link } from "react-router-dom";
import "./OurWork.css";

const Work = () => {
  return (
    <main className="workPage">

      {/* ===========================
          FEATURED DOCUMENTARY
      ============================ */}

      <section className="documentarySection">

        <div className="container">

          <div className="sectionHeading">

            <span>OUR WORK</span>

            <h2>
              Creating Lasting Change
              <br />
              Through Action
            </h2>

            <p>
              Every programme we implement is built around dignity,
              opportunity and community partnership. Watch our story
              and discover how lives are being transformed every day.
            </p>

          </div>

          <div className="documentaryWrapper">

            <div className="videoContainer">

              <div className="videoPlaceholder">

                <div className="playButton">
                  {/* <i className="fa fa-play"></i> */}
                </div>

                <h3>Our Foundation</h3>

                <p>
                  {/* Video Coming Soon */}
                </p>

              </div>

              {/* Future Video */}

              
              <video
                controls
                poster="/images/bokep.jpeg"
              >
                <source
                  src="/images/vida.mp4"
                  type="video/mp4"
                />
              </video>
             

            </div>

          </div>

        </div>

      </section>

      {/* ===========================
          OUR PROGRAMMES
      ============================ */}

      <section className="programmesSection">

        <div className="container">

          <div className="programmeRow">

            <div className="programmeImage">

              <img
                src="/images/mentor2.jpeg"
                alt="Girls Mentorship"
              />

            </div>

            <div className="programmeContent">

              <span>PROGRAMME ONE</span>

              <h3>Girls Mentorship</h3>

              <p>
                What we place in her hands today strengthens what she carries within tomorrow.
              </p>

            </div>

          </div>

          <div className="programmeRow reverse">

            <div className="programmeImage">

              <img
                src="/images/full-team.jpeg"
                alt="Education Support"
              />

            </div>

            <div className="programmeContent">

              <span>PROGRAMME TWO</span>

              <h3>Education Support</h3>

              <p>
                We believe education opens doors. Through school
                support initiatives and partnerships, we help girls
                remain in school and pursue brighter futures.
              </p>

            </div>

          </div>

          <div className="programmeRow">

            <div className="programmeImage">

              <img
                src="/images/full-team.jpeg"
                alt="Community Outreach"
              />

            </div>

            <div className="programmeContent">

              <span>PROGRAMME THREE</span>

              <h3>Community Outreach</h3>

              <p>
                Sustainable impact begins within communities.
                Together with schools, families and local leaders,
                we create environments where girls can thrive.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===========================
          IMPACT
      ============================ */}

      {/* <section className="impactSection">

        <div className="container">

          <div className="sectionHeading">

            <span>OUR IMPACT</span>

            <h2>Numbers That Tell A Story</h2>

          </div>

          <div className="impactGrid">

            <div className="impactCard">

              <h3>190+</h3>

              <p>Girls Mentored</p>

            </div>

            <div className="impactCard">

              <h3>120+</h3>

              <p>Community Workshops</p>

            </div>

            <div className="impactCard">

              <h3>35+</h3>

              <p>Schools Reached</p>

            </div>

            <div className="impactCard">

              <h3>10K+</h3>

              <p>Lives Impacted</p>

            </div>

          </div>

        </div>

      </section> */}

      {/* ===========================
          STORIES
      ============================ */}

      <section className="storiesSection">

        <div className="container">

          <div className="sectionHeading">

            <span>STORIES FROM THE FIELD</span>

            <h2>Moments That Inspire Hope</h2>

          </div>

          <div className="storiesGrid">

            <article className="storyCard">

              <img
                src="/images/full-team.jpeg"
                alt=""
              />

              <div className="storyContent">

                <h3>
                  Empowering Future Leaders
                </h3>

                <p>
                  Every mentorship session creates confidence,
                  purpose and opportunity.
                </p>

              </div>

            </article>

            <article className="storyCard">

              <img
                src="/images/full-team.jpeg"
                alt=""
              />

              <div className="storyContent">

                <h3>
                  Education Changes Lives
                </h3>

                <p>
                  Supporting girls to remain in school and dream
                  beyond their circumstances.
                </p>

              </div>

            </article>

            <article className="storyCard">

              <img
                src="/images/full-team.jpeg"
                alt=""
              />

              <div className="storyContent">

                <h3>
                  Communities Working Together
                </h3>

                <p>
                  Partnerships that strengthen families,
                  schools and communities.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* ===========================
          GALLERY
      ============================ */}

      {/* <section className="gallerySection">

        <div className="container">

          <div className="sectionHeading">

            <span>PHOTO HIGHLIGHTS</span>

            <h2>Our Journey In Pictures</h2>

          </div>

          <div className="galleryGrid">

            <img src="/images/gallery1.jpg" alt="" />
            <img src="/images/gallery2.jpg" alt="" />
            <img src="/images/gallery3.jpg" alt="" />
            <img src="/images/gallery4.jpg" alt="" />
            <img src="/images/gallery5.jpg" alt="" />
            <img src="/images/gallery6.jpg" alt="" />

          </div>

        </div>

      </section> */}

      {/* ===========================
          FOOTER LINK
      ============================ */}

      <section className="workFooter">

        <div className="container">

          <Link
            to="/contact"
            className="workButton"
          >
            Partner With Us
            <i className="fa fa-arrow-right"></i>
          </Link>

        </div>

      </section>

    </main>
  );};

export default Work;