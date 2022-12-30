import email from "../assets/email-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";
import ContactItem from "./ContactItem";
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
            <ContactItem
              iconSrc={email}
              altText="The icon representing email"
              text="sulu.lekha@gmail.com"
            />
            <ContactItem
              iconSrc={phone}
              altText="The icon representing phone"
              text="+46 769726924"
            />
            <ContactItem
              iconSrc={location}
              altText="The icon representing location"
              text="Stockholm, Sweden"
            />
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
