import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}
export const query = graphql
`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage