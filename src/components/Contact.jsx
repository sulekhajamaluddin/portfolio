import email from "../assets/email-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

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
      <div className="footer__section-two">
        <div>
          <a
            href="https://github.com/sulekhajamaluddin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="network-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sulekha-jamaluddin-582665237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="network-icon" />
          </a>
        </div>
        <small>&copy; 2022.SulekhaJamaluddin</small>
      </div>
    </div>
  );
}
