import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './team.css';
import img from '../../../assets/images/customer/donate.jpg';
import im3 from '../../../assets/images/customer/mentor.jpg';
import im4 from '../../../assets/images/customer/future.jpg';
import { IoArrowForward } from "react-icons/io5";

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className='me'>
      <div data-aos="fade-right" className="about-column">
        <div className='about-img'>
          <img src={img} alt="about us" />
        </div>
      </div>

      <div data-aos="fade-left" className="about-column">
        <div className='about-content'>
          <h3>Donation Facilitation</h3>
          <p>We all have our strengths. I’ve perfected
          mine <br />so you can focus on yours. Get in touch
          to find <br />out how I can help.
          Because I'm experienced, reliable,
          and focused on results, I've had the
          privilege of working with a host of fantastic clients.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </p>
          <button>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            Donate Feminine hygiene products<IoArrowForward/></a></button>
        </div>
      </div>

      <div data-aos="fade-left" className="about-column">
        <div className='about-content'>
          <p><h3>Mentoring and Protecting</h3>
          My business is more than just a job.
          Each time I take on a new project,
          I make sure it aligns with my core
          set of values so I know I can deliver great results.
          My curiosity makes me love learning, and added with my
          perfectionism, I am able to come up with quality work.
          Because I'm experienced, reliable,
          and focused on results, I've had the
          privilege of working with a host of fantastic clients.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </p>
          <button>Learn More<IoArrowForward/></button>
        </div>
      </div>

      <div data-aos="fade-right" className="about-column">
        <div className='about-img'>
          <img src={im3} alt="about us" />
        </div>
      </div>

      <div data-aos="fade-right" className="about-column">
        <div className='about-img-prudence'>
          <img src={im4} alt="about us" />
        </div>
      </div>

      <div data-aos="fade-left" className="about-column">
        <div className='about-content'>
          <p>
          <h3>Changing the Future</h3>
          Because I'm experienced, reliable,
          and focused on results, I've had the
          privilege of working with a host of fantastic clients.
          Because I'm experienced, reliable,
          and focused on results, I've had the
          privilege of working with a host of fantastic clients.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </p>
          <button>Learn More<IoArrowForward/></button>
        </div>
      </div>
    </div>
  );
}

export default Team;
