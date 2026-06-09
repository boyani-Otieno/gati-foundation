import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './team.css';
import img from '../../../assets/images/customer/donate.jpg';
import im3 from '../../../assets/images/customer/mentor.jpeg';
import im4 from '../../../assets/images/customer/girl-child.jpeg';
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
          <p>Empowering Communities Together.
            Every contribution brings us closer to a future where every girl is protected, every widow is empowered, and every child is healthy. We ensure that your donations directly fund essential supplies, medical support, and community workshops in Kuria. By partnering with us, you are investing in sustainable, community-led change.
          </p>
          <button>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            Donate Feminine hygiene products<IoArrowForward/></a></button>
        </div>
      </div>

      <div data-aos="fade-left" className="about-column">
        <div className='about-content'>
          <p><h3>Mentoring and Protecting</h3>
            Guiding the Next Generation.
            Our core values drive us to step into the gaps where communities need us most. Through dedicated mentorship programs, we walk alongside young girls fleeing FGM and early marriages, giving them the emotional support, safety, and leadership tools they need to build a self-determined future.
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
          Breaking Cycles, Building Hope.
          True transformation happens when a community is enlightened and unified. By engaging local elders, training youth advocates, and collaborating with local healthcare providers, we are actively dismantling harmful traditions and replacing them with opportunities for growth, climate resilience, and economic independence.
          </p>
          <button>Learn More<IoArrowForward/></button>
        </div>
      </div>
    </div>
  );
}

export default Team;
