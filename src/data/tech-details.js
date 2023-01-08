import html from "../assets/html5.svg";
import css from "../assets/css3.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import bootstrap from "../assets/bootstrap.svg";
import sass from "../assets/sass.svg";
import figma from "../assets/figma.svg";
import react from "../assets/react.svg";
import git from "../assets/git.svg";
import postgresql from "../assets/postgresql.png";
import mongodb from "../assets/mongo.png";
import node from "../assets/node.jpg";

const techDetails = [
  {
    techID: 1,
    techName: "HTML-5",
    techIcon: `${html}`,
    iconDescription: "HTML-5 icon",
    use: "I use HTML-5 to develop the content structure of the websites. It is the outline of the picture!",
  },
  {
    techID: 2,
    techName: "CSS-3",
    techIcon: `${css}`,
    iconDescription: "CSS-3 icon",
    use: "I use CSS-3 to give the websites their own look and identity. It is the colours that fill the HTML outline.  ",
  },
  {
    techID: 3,
    techName: "JavaScript",
    techIcon: `${javascript}`,
    iconDescription: "JavaScript icon",
    use: "I use JavaScript to make the websites as interactive as possible and to give them a logical flow.",
  },
  {
    techID: 4,
    techName: "TypeScript",
    techIcon: `${typescript}`,
    iconDescription: "TypeScript icon",
    use: "I use TypeScript in more complex websites where the type of the values are important. TypeScript makes the project type-safe.",
  },
  {
    techID: 5,
    techName: "BootStrap",
    techIcon: `${bootstrap}`,
    iconDescription: "BootStrap icon",
    use: "I use BootStrap in projects where I need a little ready-made help with the CSS!! Bootstrap is an excellent library to use to make frontend developement faster and classy.",
  },
  {
    techID: 6,
    techName: "Sass",
    techIcon: `${sass}`,
    iconDescription: "Sass icon",
    use: "I have used Sass in complex projects where the CSS had to be more organised. Using Sass made selecting elements to style a lot more easier.",
  },
  {
    techID: 7,
    techName: "Figma",
    techIcon: `${figma}`,
    iconDescription: "Figma icon",
    use: "I use Figma to make the designs for the websites and also to create some of the elements that appear on the websites. The design for this portfolio was also done using Figma.",
  },
  {
    techID: 8,
    techName: "React",
    techIcon: `${react}`,
    iconDescription: "React icon",
    use: "I use React to make Reactive websites that are well modularised as components.",
  },
  {
    techID: 9,
    techName: "Git",
    techIcon: `${git}`,
    iconDescription: "Git icon",
    use: "I use Git and GitHub to manage the local and remote versions of my project progress. I feel at ease even if my laptop crashes, as long as my code is in GitHub!",
  },
  {
    techID: 10,
    techName: "NodeJS",
    techIcon: `${node}`,
    iconDescription: "Node icon",
    use: "I use Node js along with Express js to implement the server-side and REST APIs of fullstack projects.",
  },
  {
    techID: 11,
    techName: "MongoDB",
    techIcon: `${mongodb}`,
    iconDescription: "MongoDB icon",
    use: "I have used MongoDB in some projects to learn what-and-how of the No-SQL databases.",
  },
  {
    techID: 12,
    techName: "PostgreSQL",
    techIcon: `${postgresql}`,
    iconDescription: "PostgreSQL icon",
    use: "I have used PostgreSQL in projects that needed data to be well structured.",
  },
];

export default techDetails;
