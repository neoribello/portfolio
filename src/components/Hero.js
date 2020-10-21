import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { FaCentercode } from "react-icons/fa"

const query =  graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
     },
    } = useStaticQuery(query)
 
  return  (
  <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>I'm Neil</h1>
          <h4>Front End Developer and Web Designer</h4>
          <Link to='/contact' className="btn">
            contact me
          </Link>
          <SocialLinks />
        </div>
      </article>
      {/* <Image fluid={fluid} className="hero-img" /> */}
    </div>
  </header>
  )
}

export default Hero
