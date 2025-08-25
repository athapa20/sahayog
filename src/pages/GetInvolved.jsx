import './GetInvolved.css';
import img1 from '../assets/img3.jpg';
import img2 from '../assets/img4.jpg';
import img3 from '../assets/img5.jpg';
import img4 from '../assets/img7.jpg';

export default function GetInvolved() {
  return (
    <div className="get-involved-container">
      <h1 className="get-involved-title">Get Involved</h1>

      <p className="get-involved-text">
        Want to help?{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe6si5m90LR1ldR9xqxOhcnPS0Eb4bJHZn37t7OVAdl1pSGOA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a member
        </a>  🤝
        <br />
        Helping animals is more than a kind gesture, it’s a commitment to compassion, empathy, and justice. Every rescued dog, every treated injury, and every warm shelter we provide is a promise that their lives matter. Animals depend on us to be their voice, their advocates, and their protectors. By getting involved, you become part of a movement that brings hope, healing, and dignity to animals in need, one paw at a time.
      </p>

      <div className="gallery-section">
        <h2>Other Ways You Can Get Involved</h2>

        <div className="gallery-cards">
          <div className="gallery-card">
            <img src={img1} alt="Volunteer helping animals" loading="lazy" />
            <p className="gallery-caption">Become a team member</p>
          </div>

          <div className="gallery-card">
            <img src={img2} alt="Social media sharing" loading="lazy" />
            <p className="gallery-caption">Share Our Mission to the World</p>
          </div>

          <div className="gallery-card">
            <img src={img3} alt="Community fundraising event" loading="lazy" />
            <p className="gallery-caption">Support Through Fundraising</p>
          </div>

          <div className="gallery-card">
            <img src={img4} alt="Virtual Adoption" loading="lazy" />
            <p className="gallery-caption">Virtual Adoption</p>
          </div>
        </div>
      </div>
    </div>
  );
}
