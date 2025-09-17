import './Home.css';
import sahayogVideo from '../assets/video.mp4';

import { MdPets } from 'react-icons/md';
import { BsScissors } from 'react-icons/bs';
import { AiOutlineMedicineBox } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <a href="https://www.paypal.com/us/fundraiser/charity/5301004" className="floating-donate-button">
        🐾 Donate
      </a>
      <div className="home-container">
        <div className="welcome-heading">
          <h1>
            Welcome to Sahayog
          </h1>
        </div>

        {/* Video Section (Not background, not overlaid) */}
        <div className="video-wrapper">
          <video
            className="video"
            src={sahayogVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Main Content */}
        <div className="home-content">
          <p>
            We are a compassionate non-profit organization dedicated to transforming the lives of animals across Nepal. Our mission began with a deep commitment to support the efforts of{" "}
            <a href="https://www.spcanepal.org/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>SPCA Nepal</a>, and we have since expanded our vision to uplift other like-minded animal welfare organizations throughout the country.
            We have also collaborated with <a href="https://www.saharaanimalcare.org/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>Sahara Animal Care</a> to further advance our shared mission of improving animal welfare.
              <br /><br />
              From rescuing injured or abandoned animals on the streets to providing critical veterinary care, safe shelter, and long-term rehabilitation, we strive to give every animal a second chance at life. Our work also includes robust spay/neuter programs to control the stray population, educational outreach to promote kindness and responsible pet ownership, and adoption initiatives to place animals in loving homes.
              <br /><br />
              As a recognized 501(c)(3) tax-exempt organization, your generous donations are fully tax-deductible and directly fund these lifesaving programs. Whether you're here to volunteer, sponsor, adopt, or simply learn more, we invite you to explore our website and join us in building a more humane and compassionate Nepal for animals and the communities that care for them.
            </p>
        </div>


        {/* Lifesaving Goals */}
        <div className="goals">
          <h2> 2025 Numbers </h2>
          <div className="goals-grid">
            <div className="goal-item">
              <MdPets size={40} color="#f2de52" />
              <div className="goal-number">300+</div>
              <div className="goal-label">Rescue</div>
            </div>
            <div className="goal-item">
              <BsScissors size={40} color="#f2de52" />
              <div className="goal-number">700+</div>
              <div className="goal-label">Spay/Neuter</div>
            </div>
            <div className="goal-item">
              <AiOutlineMedicineBox size={40} color="#f2de52" />
              <div className="goal-number">1000+</div>
              <div className="goal-label">Treatment</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}