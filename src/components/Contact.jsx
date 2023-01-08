import contactDetails from "../data/contact-details";
import ContactItem from "./ContactItem";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const contactList = contactDetails.map((contact) => {
    const { contactID, contactIcon, iconDescription, text } = contact;
    return (
      <ContactItem
        key={contactID}
        iconSrc={contactIcon}
        altText={iconDescription}
        text={text}
      />
    );
  });
  return (
    <div id="footer">
      <div className="section-one">
        <div className="content">
          <h2>CONTACT</h2>
          <p>
            So, hope you liked this hueful portfolio and the projects showcased
            here. If so, here are some ways you could reach me.
          </p>
        </div>
        <div className="contact-holder">{contactList}</div>
      </div>
      <div className="section-two">
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
