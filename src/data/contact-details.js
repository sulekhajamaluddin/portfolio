import email from "../assets/email-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";

const contactDetails = [
  {
    contactID: 1,
    contactIcon: `${email}`,
    iconDescription: "The icon representing email",
    text: "sulu.lekha@gmail.com",
  },
  {
    contactID: 2,
    contactIcon: `${phone}`,
    iconDescription: "The icon representing phone",
    text: "+46 769726924",
  },
  {
    contactID: 3,
    contactIcon: `${location}`,
    iconDescription: "The icon representing location",
    text: "Stockholm, Sweden",
  },
];

export default contactDetails;
