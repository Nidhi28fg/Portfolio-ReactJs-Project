import React from "react";

import "./Portfolio.css";


import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Koach Project - REST API",
    description:
      "In this project I Created a user dashboard that fetches and displayed user data from a REST API. The dashboard include basic user information and a list of user activities.",
    url: "https://github.com/Nidhi28fg/Koach",
  },
  {
    title: "Themeswitcher Project",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/Nidhi28fg/30-DAY-CHALLENGE-Javascript-and-React.Js-Projects/tree/main/DAY-18%20themeswitcher",
  },
  {
    title: "ReactRouter Project",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/Nidhi28fg/30-DAY-CHALLENGE-Javascript-and-React.Js-Projects/tree/main/day-16%20reactRouter",
  },
  {
    title: "30-DAY-CHALLENGE-Javascript-and-React.Js-Projects",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://github.com/Nidhi28fg/30-DAY-CHALLENGE-Javascript-and-React.Js-Projects/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-grid">
        <div className="image-container">
          <img className="portfolio-image" src={image} alt={imageAltText} />
        </div>
        <div className="project-list">
          {projectList.map((project) => (
            <div className="project-card" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">{project.title}</h3>
              </a>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
