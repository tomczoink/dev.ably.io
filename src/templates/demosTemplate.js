import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import Layout from "../components/layout"
import Colors from "../variables/colors"
import Sizes from "../variables/sizes"

const TitleBar = styled.div`
  padding: 20px;
  text-align: center;
  background-color: ${Colors.charcoal};
`

const Title = styled.h1`
  max-width: 800px;
  margin: 0 auto;
  color: white;
`
const FeatureImg = styled(Img)`
  min-width: 50%;
  margin: 0 1em 2em 0;
`
const Content = styled.section`
  margin: 3em auto;
  max-width: ${Sizes.mobile};
  font-size: 1.1em;
  line-height: 1.4em;
  a {
    text-decoration: none;
    color: ${Colors.orange_dk};
    &:hover {
      text-decoration: underline;
      color: ${Colors.orange};
    }
  }
`

const Details = styled.div`
  display: flex;
  align-items: center;
`

const Links = styled.div`
  font-size: 1.2em;
`
const ExternalLink = styled.a`
    display: block;
    text-decoration: none;
    color: ${Colors.orange_dk};
    &:hover {
      text-decoration: underline;
      color: ${Colors.orange};
    }
`

export default function Template({data}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  let featuredImgFluid = data.markdownRemark.frontmatter.featureImage.childImageSharp.fluid;
  
  return (
    <Layout>
      <TitleBar>
        <Title>{frontmatter.title}</Title>
      </TitleBar>
      <Content>
        <Details>
          <FeatureImg fluid={featuredImgFluid} />
          <Links>
            <p>Try the demo: <ExternalLink href={frontmatter.repo}>{frontmatter.demo}</ExternalLink></p>
            <p>See the code: <ExternalLink href={frontmatter.repo}>{frontmatter.repo}</ExternalLink></p>
            <p>Build your own: <ExternalLink href={frontmatter.tutorial}>{frontmatter.tutorial}</ExternalLink></p>
          </Links>
        </Details>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

      </Content>
 
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        repo
        demo
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
`