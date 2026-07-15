import React from "react";
import { Link } from "react-router-dom";
import "./OurWork.css";

const Work = () => {
  return (
    <main className="workPage">

      {/*=================================
        HERO
      =================================*/}

      <section className="workHero">

        <div className="heroOverlay"></div>

        <div className="container heroContent">

          <span>OUR WORK</span>

          <h1>
            Every Conversation
            <br />
            Begins With Hope
          </h1>

          <p>
            Every girl's voice matters. Every story deserves to be heard.
            Through mentorship, dignity support and community engagement,
            we create opportunities for girls and young mothers, to discover their strength,
            build confidence and shape their future.
          </p>

          <div className="heroButtons">

            <a href="about" className="primaryBtn">
              Explore Our Journey
            </a>

            <Link to="/volunteer" className="secondaryBtn">
              Get Involved
            </Link>

          </div>

        </div>

      </section>

      {/*=================================
        STORY SECTIONS
      =================================*/}

      <section
        id="journey"
        className="storySection"
      >

        <div className="container">

          {/* 1 */}

          <div className="storyRow">

            <div className="storyImage">

              <img
                src="/images/gpresent.jpeg"
                alt="Girls sharing their stories"
              />

            </div>

            <div className="storyText">

              <span>01</span>

              <h2>Every Girl's Voice Matters</h2>

              <blockquote>
                "Every girl's voice matters. Every story deserves to be heard."
              </blockquote>

              <p>
                Every meaningful change begins by creating safe spaces
                where girls feel heard, respected and empowered to
                speak openly about their experiences, dreams and
                aspirations.
              </p>

            </div>

          </div>

          {/* 2 */}

          <div className="storyRow reverse">

            <div className="storyImage">

              <img
                src="/images/puru.jpeg"
                alt="Mentorship conversations"
              />

            </div>

            <div className="storyText">

              <span>02</span>

              <h2>Building Confidence Through Conversation</h2>

              <blockquote>
                "Engaging girls in honest conversations that build confidence and informed decision-making."
              </blockquote>

              <p>
                Through mentorship circles and open dialogue,
                girls gain the confidence to ask questions,
                support one another and make informed choices
                about their future.
              </p>

            </div>

          </div>

          {/* 3 */}

          <div className="storyRow">

            <div className="storyImage">

              <img
                src="/images/boke2.jpeg"
                alt="Girls speaking confidently"
              />

            </div>

            <div className="storyText">

              <span>03</span>

              <h2>Helping Every Voice Be Heard</h2>

              <blockquote>
                "A girl's voice is powerful. Our role is to help it be heard."
              </blockquote>

              <p>
                We believe leadership begins when girls realise
                their opinions matter and their dreams deserve
                to be pursued without fear or limitation.
              </p>

            </div>

          </div>

          {/* 4 */}

          <div className="storyRow reverse">

            <div className="storyImage">

              <img
                src="/images/all4.jpeg"
                alt="Foundation team"
              />

            </div>

            <div className="storyText">

              <span>04</span>

              <h2>Behind Every Conversation</h2>

              <blockquote>
                "Behind every meaningful conversation is a team committed to making it happen."
              </blockquote>

              <p>
                Every programme is made possible by volunteers,
                mentors, educators and community members working
                together to ensure every girl feels supported.
              </p>

            </div>

          </div>

          {/* 5 */}

          <div className="storyRow">

            <div className="storyImage">

              <img
                src="/images/jedawall.jpeg"
                alt="Mentorship circle"
              />

            </div>

            <div className="storyText">

              <span>05</span>

              <h2>One Circle. Endless Possibilities.</h2>

              <blockquote>
                "One circle. One conversation. Countless possibilities for every girl."
              </blockquote>

              <p>
                Every mentorship session becomes a place where
                confidence grows, friendships are formed and
                girls discover they are capable of achieving more
                than they imagined.
              </p>

            </div>

          </div>

          {/* 6 */}

          <div className="storyRow reverse">

            <div className="storyImage">

              <img
                src="/images/onwall.jpeg"
                alt="Dignity support"
              />

            </div>

            <div className="storyText">

              <span>06</span>

              <h2>When she is heard</h2>

              <blockquote>
                "Today she shared her voice. Tomorrow she will shape her Community."
              </blockquote>

              <p>
                When she is heard, she is unstoppable as she shares all her thoughts
                ambitions and dreams for a better future.
              </p>

            </div>

          </div>

          {/* 7 */}

           <div className="storyRow reverse">

            <div className="storyImage">

              <img
                src="/images/two.jpeg"
                alt="Dignity support"
              />

            </div>

            <div className="storyText">

              <span>06</span>

              <h2>Removing Barriers</h2>

              <blockquote>
                "Sometimes, the smallest resources remove the biggest barriers."
              </blockquote>

              <p>
                Access to dignity kits and educational support
                removes obstacles that prevent girls from fully
                participating in school and community life.
              </p>

            </div>

          </div>

          {/* 7 */}

          <div className="storyRow">

            <div className="storyImage">

              <img
                src="/images/all.jpeg"
                alt="Happy girls"
              />

            </div>

            <div className="storyText">

              <span>07</span>

              <h2>Confidence Restored</h2>

              <blockquote>
                "Behind every smile is a girl with one less barrier to overcome."
              </blockquote>

              <p>
                Every act of support reminds girls that they are
                valued, capable and never alone as they continue
                building brighter futures.
              </p>

            </div>

          </div>

          {/* 8 */}

          <div className="storyRow reverse">

            <div className="storyImage">

              <img
                src="/images/puru2.jpeg"
                alt="Supporting girls"
              />

            </div>

            <div className="storyText">

              <span>08</span>

              <h2>Investing In Tomorrow</h2>

              <blockquote>
                "Every hand extended is an invitation to believe in herself."
              </blockquote>

              <blockquote>
                "What we place in her hands today strengthens what she carries within tomorrow."
              </blockquote>

              <p>
                Every opportunity we provide today strengthens
                confidence, resilience and leadership that girls
                will carry into tomorrow's communities.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/*=================================
        CTA
      =================================*/}

      {/* <section className="workCTA">

        <div className="container">

          <span>JOIN THE JOURNEY</span>

          <h2>
            Today She Shared Her Voice.
            <br />
            Tomorrow She Will Shape Her Community.
          </h2>

          <p>
            Join us in creating opportunities that empower girls
            through mentorship, education, dignity support and
            community action.
          </p>

          <div className="heroButtons">

            <Link
              to="/donate"
              className="primaryBtn"
            >
              Support Our Work
            </Link>

            <Link
              to="/volunteer"
              className="secondaryBtn"
            >
              Volunteer With Us
            </Link>

          </div>

        </div>

      </section> */}

    </main>
  );
};

export default Work;