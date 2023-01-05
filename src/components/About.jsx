import profilepic from "../assets/womanwithpuzzle.png";

export default function About() {
  return (
    <div id="about">
      <div className="section-one">
        <div className="content">
          <h2>ABOUT ME</h2>
          <p>
            I am Sulekha, an IT engineer by education following my passion to
            get back to the field after a little adventure in the world of
            administration. I am very much motivated by frontend development.
            This is my website that I use to showcase the work I do. <br />I
            like to explore and bring together minimalistic design pieces
            together with a sense of responsibility and give them a signature
            touch. Scroll on, let me show you some of them.
          </p>
        </div>
      </div>
      <div className="section-two">
        <img className="frame-pic" src={profilepic} alt="A person" />
      </div>
    </div>
  );
}
