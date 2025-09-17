import './About.css';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
// import team6 from '../assets/team6.jpg';

export default function About() {
  return (
    <>
      <a href="https://www.paypal.com/us/fundraiser/charity/5301004" className="floating-donate-button">
        🐾 Donate
      </a>
      <div className="about-page">
        <h1>About Us</h1>
        <p>
          Sahayog is a newly founded non-profit organization, driven by a passionate group of animal lovers living in the USA, united by our love for animals and our deep connection to Nepal.
          Our mission is to support and care for animals in Nepal by providing a safe haven for those in need and educating the community on the importance of animal welfare and environmental conservation. Although we are just beginning our journey, our vision is clear: to create a world where every animal is treated with respect and kindness. Join us as we work together to make a difference.
        </p>

        <h2>Our Team</h2>
        <div className="team-gallery">
          <div className="team-card">
            <img src={team1} alt="Team Member 1" />
            <h3>Dristi Ghimire Shrestha</h3>
            <p>President</p>
          </div>
          <div className="team-card">
            <img src={team2} alt="Team Member 2" />
            <h3>Ada Thapa</h3>
            <p>Vice President</p>
          </div>
          <div className="team-card">
            <img src={team3} alt="Team Member 3" />
            <h3>Anjela Manandhar</h3>
            <p>Secretary</p>
          </div>
          <div className="team-card">
            <img src={team4} alt="Team Member 4" />
            <h3>Monika Shah</h3>
            <p>Treasurer</p>
          </div>
          <div className="team-card">
            <img src={team5} alt="Team Member 5" />
            <h3>Aachal Thapa</h3>
            <p>Board Member</p>
          </div>
          {/* <div className="team-card">
          <img src={team6} alt="Team Member 6" />
          <h3>Prabin Subedi</h3>
          <p>Board Member</p>
        </div> */}
        </div>
      </div>
    </>
  );
}
