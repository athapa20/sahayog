import './Contact.css';
import img6 from '../assets/img6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <>
      <a href="https://www.paypal.com/us/fundraiser/charity/5301004" className="floating-donate-button">
        🐾 Donate
      </a>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have questions, feedback, or want to collaborate, please get in touch.
          You can reach us via email at{' '}
          <a href="mailto:sahayogspcanepal@gmail.com">sahayogspcanepal@gmail.com</a> or connect with us on social media.
          Let's work together for a better future for animals.
        </p>

        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61565142598149"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/sahay0g/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            Instagram
          </a>
        </div>
        <br />
        <div className="img">
          <img src={img6} alt="dog" loading="lazy" />
        </div>
      </div>
    </>
  );
}
