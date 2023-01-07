import shoppinglist from "../assets/shoppinglist.jpg";
import vegan from "../assets/vegan.jpg";
import packages from "../assets/packages.jpg";
import todo from "../assets/todo.jpg";
import bbq from "../assets/bbq.jpg";
import books from "../assets/books.jpg";
import netflix from "../assets/netflix.png";
import eikaproject from "../assets/eika.png";

const projectDetails = [
  {
    projectID: 1,
    projectName: "EIKA's Shopping List",
    projectDescription:
      "This is a shopping list app where users can add their favorite furnitures and track them as they buy them. This app uses:",
    projectCardImage: `${shoppinglist}`,
    imageCardDescription: "A person writing a todo list",
    projectImage: `${eikaproject}`,
    projectImageDescription: "The screenshot of Eika app running on website",
    technologiesUsed: [
      "ContextAPI",
      "LocalStorage",
      "Netlify",
      "React",
      "CSS",
      "UID",
    ],
    webAddress: "https://eika-shopping-wishlist.netlify.app/",
    gitAddress: "https://github.com/sulekhajamaluddin/shopping-list",
    status: "completed",
  },
  {
    projectID: 2,
    projectName: "Vegan Restaurant",
    projectCardImage: `${vegan}`,
    imageCardDescription: "Green leaves on a board",
    status: "comingSoon",
  },
  {
    projectID: 3,
    projectName: "Package Tracker",
    projectCardImage: `${packages}`,
    imageCardDescription: "A few packages looking scattered",
    status: "comingSoon",
  },
  {
    projectID: 4,
    projectName: "TTD- Todo List",
    projectCardImage: `${todo}`,
    imageCardDescription: "A blue book with the word Todo on the cover",
    status: "comingSoon",
  },
  {
    projectID: 5,
    projectName: "BBQ Restaurant",
    projectCardImage: `${bbq}`,
    imageCardDescription: "A plate with BBQ-ed chicken",
    status: "comingSoon",
  },
  {
    projectID: 6,
    projectName: "Learning Platform",
    projectCardImage: `${books}`,
    imageCardDescription: "A few books piled up",
    status: "comingSoon",
  },
  {
    projectID: 7,
    projectName: "Netflix Clone",
    projectCardImage: `${netflix}`,
    imageCardDescription: "The word Netflix",
    status: "comingSoon",
  },
];

export default projectDetails;
