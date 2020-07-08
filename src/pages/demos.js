import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

import Colors from "../variables/colors"
import Sizes from "../variables/sizes"

const Title = styled.h1`
  padding: 20px;
  text-align: center;
  background-color: ${Colors.charcoal};
  color: white;
`
const Container = styled.div`
  max-width: ${Sizes.desktop};
  margin: 0 auto;
`

const Demos = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 0 auto;
`


const DemosPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.filter(edge => !!edge.node.frontmatter.date)
                     .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    return (
      <Layout>
        <SEO title="Ably Demos" />
        <Title>Ably Demos and Resources</Title>
        <Container>
          <Demos>
            {Posts}
          </Demos>
          </Container>
      </Layout>
    )
}

export default DemosPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`