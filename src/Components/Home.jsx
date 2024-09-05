/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import "./Home.css";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/woman-with-tablet.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="home-section">
      <div className="home-background">
        <img className="background-image" src={image} alt={imageAltText} />
        <div className="overlay"></div> {/* Add a dark overlay over the image */}
      </div>

      <div className="content">
        <h1 className="name">{name}</h1>
        <h2 className="title">{title}</h2>
      </div>

      <div className="arrow">
        <a href="#next-section">
          <img src={arrowSvg} alt="Scroll down" className="arrow-icon" />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
