import email from "../assets/email-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";

export default function Contact() {
  return (
    <div className="footer" id="footer">
      <div className="footer__section-one">
        <div className="footer__content">
          <h2>CONTACT</h2>
          <p>
            So, hope you liked this hueful portfolio and the projects showcased
            here. If so, here are some ways you could reach me.
          </p>
        </div>
        <div className="footer__contact-holder">
          <div className="footer__contact-list">
            <div className="contact-item">
              <img src={email} alt="The icon representing email" />
              <span>sulu.lekha@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src={phone} alt="The icon representing phone" />
              <span>+46 769726924</span>
            </div>
            <div className="contact-item">
              <img src={location} alt="The icon representing location" />
              <span>Stockholm, Sweden</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__section-two"></div>
    </div>
  );
}
