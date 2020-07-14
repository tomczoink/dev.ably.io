import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

import Sizes from "../../variables/sizes"
import Colors from "../../variables/colors"
import Img from "gatsby-image"

const Title = styled.h1`
    padding: 20px;
    text-align: center;
    background-color: ${Colors.charcoal};
    color: white;
`

const Guide = styled.section`
    display: flex;
`

const Menu = styled.aside`
    margin-top: -23px;
    padding: 40px;
    background-color: ${Colors.container_lt};
    & a {
      font-size: 1em;
      text-decoration: none;
      color: ${Colors.grey_lt};
      &:hover, &.active {
        color: ${Colors.orange_dk};
      }
    }
`

const Container = styled.section`
    max-width: ${Sizes.mobile};
    margin-left: 8vw;
    padding: 0 30px 50px;
`

const Heading = styled.h2`
    margin: 2em 0;
    font-size: 0.8em;
    text-transform: uppercase;
    color: ${Colors.grey_lt};
`

const Heading2 = styled.h3`
    font-size: 2em;
`

const Heading3 = styled.h4`
    letter-spacing: 1px;
    font-size: 1.2em;
    color: ${Colors.blue};
`

const Para = styled.p`
    line-height: 1.4em;
    color: ${Colors.grey};
`

const ExternalLink = styled.a`
    text-decoration: none;
    color: ${Colors.orange_dk};
    &:hover {
      text-decoration: underline;
      color: ${Colors.orange};
    }
`

const InternalLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.orange_dk};
    &:hover {
      text-decoration: underline;
      color: ${Colors.orange};
    }
`
const Upnext = styled.p`
    margin: 2em 0;
    color: ${Colors.grey};
`

const StyledImg = styled(Img)`
    margin: 3em 1em;
`

const IndexPage = ({data}) => {
  const images = {};
  data.allFile.edges.forEach(edge => { images[edge.node.childImageSharp.fluid.originalName] = edge.node.childImageSharp.fluid; });
  return (
    <Layout>
    <SEO title="Event Sponsorship" />
    <Title>Developer Onboarding Guide</Title>
    <Guide>
        <Menu>
            <h2>Contents</h2>
            <ol>
                <li><Link to="../chapter1/">Key realtime concepts</Link></li>
                <li><Link to="../chapter2/">Fundamental features of Ably</Link></li>
                <li><Link to="../chapter3/">An overview of Ably’s products</Link></li>
                <li>Open data streaming and the Ably Hub</li>
                <li><Link to="../chapter5/">Choosing the right package</Link></li>
            </ol>
        </Menu>
        <Container>
          <Heading>Chapter 4</Heading>
          <Heading2>Open data streaming and the Ably Hub</Heading2> 
          <Para>The majority of open data available today is static or historical data. There are plenty of places where organizations can publish this static data for others to consume. But this doesn’t address the growing number of use cases where the requirement is for realtime data, which can be delivered to its destination within milliseconds of being created.</Para>
          <Para>When you look at the open realtime data landscape, the choice of hosting and delivery mechanisms is much more limited. This is the gap we’re trying to fill with our Open Data Streaming Program (ODSP).</Para>
          <Para>In essence, the ODSP seeks to liberate the many sources of realtime data around the world, by providing, for free, the means to:
            <ul>
              <li>Enable producers of open realtime data to publish their streams, without needing to think about infrastructure, protocols, APIs or how many consumers there might be.</li>
              <li>Push this realtime data to any number of consumers as soon as it becomes available, using the consumer’s chosen means of delivery.</li>
              </ul>
          </Para>
          <Heading3>The Ably Hub</Heading3>
          <Para>
          <ExternalLink href="https://www.ably.io/hub">The Ably Hub</ExternalLink> makes it easy to find data streams and build innovative applications around them. 
          </Para>
          <StyledImg fluid={ images["10.png" ] } alt=" " />
          <Para>
          The Hub already contains a wide variety of realtime data, including:
          <ul>
            <li>London transport information from Transport for London</li>
            <li>Betting stats from public sports betting markets, and a range of other sports data</li>
            <li>Predictions from PredictIt</li>
            <li>News articles from HackerNews and Reddit</li>
            <li>Bitcoin price and information from Coinbase and BitFlyer</li>
            <li>Financial information from IEX Trading</li>
            <li>Weather data from Open Weather Map</li>
          </ul>
          You can add your own streaming data source to the Hub or consume streaming data from one of the existing sources. Many of the data sources are free to use, so be sure to check them out.
          </Para>

          <Upnext>Up next: <InternalLink to="../chapter5/">Choosing the right package &rarr;</InternalLink></Upnext>
        </Container>
    </Guide>
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
{
  allFile(filter: {relativeDirectory: {eq: "onboarding"}, childImageSharp: {fluid: {}}}) {
    edges {
      node {
        base
        childImageSharp {
          fluid {
            originalName
            sizes
            src
            srcSet
            base64
            aspectRatio
          }
        }
      }
    }
  }
}`

