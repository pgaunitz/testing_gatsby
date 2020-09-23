import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/hero"
import Layout from "../components/layout"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node}/>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`
