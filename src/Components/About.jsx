import React from "react";
import "./About.css";
import image from "../images/motion-background.jpg";

const imageAltText = "light green and cream background";

const description =
  "Greetings. I am Nidhi Singh Bhadoria. I am interested in the field of web development, and I am proficient in HTML, CSS, Tailwind, Javascript, and React.js. I am eager to collaborate on projects. Please feel free to contact me at teamguffonidhi28@gmail.com. I look forward to hearing from you.";

const skillsList = [
  "React.Js",
  "Tailwind",
  "GitHub",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "React and Redux",
  "Typescript",
  "SEO",
  "Digital Marketing",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Front-end Developer experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="image-overlay"> </div><img className="background" src={image} alt={imageAltText} />
      <div/>
      <div className="about-content"
      >
        <h2>About Myself</h2>
        <p className="description">{description}</p>
        <hr />
        <ul className="skills-grid" >
          {skillsList.map((skill) => (
            <li key={skill} className="skill-item">{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
