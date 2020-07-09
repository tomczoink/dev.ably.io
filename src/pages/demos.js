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
const Demos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: -22px auto 0;
  @media (min-width: ${Sizes.mobile}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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
          <Demos>
            {Posts}
          </Demos>
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
            featureImage {
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