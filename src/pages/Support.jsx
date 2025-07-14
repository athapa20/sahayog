import './Support.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img5 from '../assets/img5.jpg';

export default function Support() {
  return (
    <div className="donate-page">
      <h1>Support</h1>

      <p className="intro">
        Your generous donations enable us to continue supporting animals in need. Every contribution, no matter the size, makes a significant impact in providing food, shelter, medical care, and love to countless animals waiting for a second chance. Your kindness helps us rescue, rehabilitate, and find forever homes for those who cannot speak for themselves. Together, we can create a better future for these vulnerable creatures. Please explore the donation options below to join us in making a real difference—your support truly matters to every paw and whisker we care for.
      </p>

      <div className="donate-gallery">
        <div className="gallery-row">
          <img src={img1} alt="Rescued Dog 1" />
          <img src={img2} alt="Rescued Dog 2" />
          <img src={img5} alt="Rescued Dog 3" />
        </div>
      </div>

      <div className="donation-options">
        <div className="donation-card">
          <h2>Paypal</h2>
          <a
            href="https://www.paypal.com/us/fundraiser/charity/5301004"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Donate via Paypal
          </a>
        </div>

        <div className="donation-card">
          <h2>Debit/Credit Card</h2>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=TDYTYGA7XUJVA"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Donate with Card
          </a>
        </div>

        <div className="donation-card">
          <h2>Zelle</h2>
          <p>Email: sahayogspcanepal@gmail.com</p>
        </div>
      </div>

      <div className="campaigns">
        <h2>Our Campaigns</h2>
        <ul>
          <li><a href="#">Help SPCA Nepal to Spay Neuter Street Animals</a></li>
          <li><a href="#">Help SPCA Nepal Treat Dogs with Mange Disease</a></li>
          <li><a href="#">Help SPCA Nepal Treat Dogs with CTVT</a></li>
          <li><a href="#">Feed the Shelter Dogs in Kukur Tihar Celebration</a></li>
        </ul>
      </div>
    </div>
  );
}
