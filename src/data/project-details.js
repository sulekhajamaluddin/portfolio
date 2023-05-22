import shoppinglist from "../assets/shoppinglist.jpg";
import vegan from "../assets/vegan.jpg";
import packages from "../assets/packages.jpg";
import todo from "../assets/todo.jpg";
import bbq from "../assets/bbq.jpg";
import bbqRestaurant from "../assets/bbq.png";
import books from "../assets/books.jpg";
import netflix from "../assets/netflix.png";
import eikaproject from "../assets/eika.png";
import beet from "../assets/beet.png";
import tracker from "../assets/tracker.png";
import tddTodo from "../assets/tdd-todo.png";
import mindful from "../assets/mindful.png";
import netflix_clone from "../assets/netflix-clone.png";

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
    projectName: "Beet Bowl",
    projectDescription:
      "This is an app for a Vegan Restaurant, where the users can view categories and also the menu for those categories. This app uses:",
    projectCardImage: `${vegan}`,
    imageCardDescription: "A few green leaves on a board",
    projectImage: `${beet}`,
    projectImageDescription: "The screenshot of Beet Bowl app running",
    technologiesUsed: [
      "ContextAPI",
      "Firebase",
      "React",
      "CSS",
      "React Calendar",
    ],
    webAddress: "https://beetbowl-vegan-restaurant.web.app/",
    gitAddress: "https://github.com/sulekhajamaluddin/vegan-restaurant",
    status: "completed",
  },
  {
    projectID: 3,
    projectName: "Insta Tracker",
    projectCardImage: `${packages}`,
    projectDescription:
      "This is an app for tracking insta packages. The user can view a list of his packages and also details about his packages including a map location. This app uses:",
    imageCardDescription: "A few packages looking scattered",
    projectImage: `${tracker}`,
    projectImageDescription: "The screenshot of Insta Tracker app running",
    technologiesUsed: [
      "Firebase",
      "React",
      "SCSS",
      "Google Maps",
      "Context API",
    ],
    webAddress: "https://insta-track-package.web.app/",
    gitAddress: "https://github.com/sulekhajamaluddin/package-tracker",
    status: "completed",
  },
  {
    projectID: 4,
    projectName: "TTD- Todo List",
    projectCardImage: `${todo}`,
    projectDescription:
      "This is a shopping list app where users can add their favorite furnitures and track them as they buy them.The main feature is that it has application level form validation and unit testing that ensures this.This app uses:",
    imageCardDescription: "A blue book with the word Todo on the cover",
    projectImage: `${tddTodo}`,
    projectImageDescription: "The screenshot of Insta Tracker app running",
    technologiesUsed: [
      "Firebase",
      "React",
      "SCSS",
      "Jest",
      "React Testing Library",
    ],
    webAddress: "https://todolist-108b4.web.app/",
    gitAddress: "https://github.com/sulekhajamaluddin/Todo-List",
    status: "completed",
  },
  {
    projectID: 5,
    projectName: "BBQ Restaurant",
    projectCardImage: `${bbq}`,
    projectDescription:
      "This is an app for a BBQ Restaurant, where the users can view categories and also the menu for those categories. This app uses:",
    imageCardDescription: "A plate with BBQ-ed chicken",
    projectImage: `${bbqRestaurant}`,
    projectImageDescription: "The screenshot of BBQ restaurant app running",
    technologiesUsed: ["ContextAPI", "Firebase", "Firestore", "React", "SCSS"],
    webAddress: "https://backyard-the-bbq-restaurant.web.app/",
    gitAddress:
      "https://github.com/sulekhajamaluddin/backyard-the-bbq-restaurant",
    status: "completed",
  },
  {
    projectID: 6,
    projectName: "Learning Platform",
    projectCardImage: `${books}`,
    projectDescription:
      "This is an app for a Learning Platform, where the students can view courses and enroll. The teacher can add courses. This app uses:",
    imageCardDescription: "A few books piled up",
    projectImage: `${mindful}`,
    projectImageDescription: "The screenshot of LMS app running",
    technologiesUsed: [
      "ContextAPI",
      "Reducers",
      "Firebase",
      "Firestore",
      "Authentication",
    ],
    webAddress: "https://mindful-application.web.app/",
    gitAddress: "https://github.com/sulekhajamaluddin/mindful-application",
    status: "completed",
  },
  {
    projectID: 7,
    projectName: "Netflix Clone",
    projectCardImage: `${netflix}`,
    projectDescription:
      "This is an app for a Learning Platform, where the students can view courses and enroll. The teacher can add courses. This app uses:",
    imageCardDescription: "The word Netflix",
    projectImage: `${netflix_clone}`,
    projectImageDescription: "The screenshot of Netflix app running",
    technologiesUsed: [
      "ContextAPI",
      "Reducers",
      "Firebase",
      "Firestore",
      "Authentication",
    ],
    webAddress: "https://sulekha-video-player.web.app/",
    gitAddress: "https://github.com/sulekhajamaluddin/netflix-clone-sj-2023",
    status: "completed",
  },
];

export default projectDetails;
