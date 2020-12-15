import React, { useEffect } from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

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
    <div className="container">
  <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>I'm Neil</h1>
          <h4>Front End Developer and UI Developer</h4>
          <Link to='/contact' className="btn">
            contact me
          </Link>
          <SocialLinks />
        </div>
      </article>
      {/* <Image fluid={fluid} className="hero-img" /> */}
    </div>
  </header>
  </div>
  )
}

export default Hero
