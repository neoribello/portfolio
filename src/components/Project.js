import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({description, title, github, stack, url, image, index}) => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <article data-aos="slide-up" className="project">
      <div className="project-container">
        <Image fluid={image.childImageSharp.fluid} className="project-img"/>
        <div className="project-info">
          <h3>{title}</h3>
          {/* <p className="project-desc">
            {description}
          </p> 
          <div className="project-stack">
            {stack.map((item)=> {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>*/}
          <div className="project-links">
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>

            <a href={url}>
              <FaShareSquare className="project-icon" />
            </a> 
          </div>
        </div>
      </div>
    </article>
  ) 
}

Project.propTypes = {
  title:PropTypes.string.isRequired,
  github:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired,
  stack:PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
