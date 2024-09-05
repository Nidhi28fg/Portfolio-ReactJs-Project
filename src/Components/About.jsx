import React from "react";
import "./About.css";
/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "light green and cream background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Greetings. I am Nidhi Singh Bhadoria. I am interested in the field of web development, and I am proficient in HTML, CSS, Tailwind, Javascript, and React.js. I am eager to collaborate on projects. Please feel free to contact me at teamguffonidhi28@gmail.com. I look forward to hearing from you.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
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

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
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
