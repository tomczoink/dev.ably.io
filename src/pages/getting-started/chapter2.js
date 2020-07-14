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
    flex-direction: column;
    @media (min-width: ${Sizes.mobile}) {
      flex-direction: row;
    }
`

const Menu = styled.aside`
    margin-top: -23px;
    padding: 30px;
    background-color: ${Colors.container_lt};
    & a {
      font-size: 1em;
      text-decoration: none;
      color: ${Colors.grey_lt};
      &:hover, &.active {
        color: ${Colors.orange_dk};
      }
    }
    @media (min-width: ${Sizes.mobile}) {
      padding: 40px;
    }
`

const Container = styled.section`
    max-width: ${Sizes.mobile};
    padding: 0 30px 50px;
    @media (min-width: ${Sizes.mobile}) {
      margin-left: 8vw;
    }
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

const FrameHolder = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 1em 0;
    padding-top: 56.3%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    & .iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
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
                <li><Link to="../chapter1">Key realtime concepts</Link></li>
                <li>Fundamental features of Ably</li>
                <li><Link to="../chapter3">An overview of Ably’s products</Link></li>
                <li><Link to="../chapter4">Open data streaming and the Ably Hub</Link></li>
                <li><Link to="../chapter5">Choosing the right package</Link></li>
            </ol>
        </Menu>
        <Container>
          <Heading>Chapter 2</Heading>
          <Heading2>Fundamental features of the Ably Data Stream Network</Heading2>
          <Heading3>1. Ably Realtime and Ably REST Client Library SDKs</Heading3>
            <Para>Ably's Data Stream Network (DSN) primarily offers <ExternalLink href="https://www.ably.io/documentation/realtime">realtime Client Library SDKs</ExternalLink> that allow you to incorporate the Pub/Sub messaging pattern in your apps and operate any number of such persistent publisher or subscriber clients.</Para> 
            <Para>However, in many scenarios you may not need persistent connections. Most servers are typically stateless and hence HTTP based REST requests better suit them in order to be able to process each request independently. In many other situations, for example, if you have an IoT sensor that only needs to publish data at certain intervals, you’re better off with a REST request rather than maintaining a persistent connection which leads to battery-drain. For scenarios like this, Ably also offers <ExternalLink href="https://www.ably.io/documentation/rest">REST-based Client Library SDKs</ExternalLink>.</Para>
            <Para>Our <ExternalLink href="https://www.ably.io/documentation/best-practice-guide#choosing-between-realtime-rest-mqtt">best practice guide</ExternalLink> further explains when to use which library.</Para>
    
            <Heading3>2. Authentication</Heading3>
            <Para>Ably requires your clients to authenticate before accessing the Ably Network. We provide two ways of authenticating your clients: 
            <ul>
                <li>
                    <ExternalLink href="https://www.ably.io/documentation/core-features/authentication#basic-authentication">Basic auth</ExternalLink> enables your clients to directly plug in API keys. This is quick but not recommended for production level apps, as API keys are vulnerable to misuse when embedded in client-side code.
                </li>
                <li>
                    <ExternalLink href="https://www.ably.io/documentation/core-features/authentication#token-authentication">Token auth</ExternalLink> enables you to assign short-lived tokens to your clients, which they can use to authenticate with Ably. This can be an <ExternalLink href="https://www.ably.io/documentation/core-features/authentication#token-process">Ably-specific token</ExternalLink> or a <ExternalLink href="https://www.ably.io/documentation/core-features/authentication#ably-jwt-process">JSON Web Token (JWT)</ExternalLink>. Token auth is a safer and recommended option to use in production level apps.
                </li>
            </ul>
            Here’s a 5-minute video with a detailed explanation on authentication with Ably:
            </Para>
            <FrameHolder>
                <iframe className="iframe" width="100%" height="100%" src="https://www.youtube.com/embed/FHkzs8z3J5E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="a detailed explanation on authentication with Ably"></iframe>
            </FrameHolder>
            <Heading3>2. Presence</Heading3>
            <Para><ExternalLink href="https://www.ably.io/documentation/core-features/presence">Presence</ExternalLink> tells you who is connected to your application and what their status or attributes are. You can use presence in two ways:
                <ul>
                <li>
                    <ExternalLink href="https://www.ably.io/documentation/rest/presence#member-list">Retrieve a list of ‘online’ clients using</ExternalLink> Ably’s REST client library SDKs
                </li>
                <li>
                    <ExternalLink href="https://www.ably.io/documentation/realtime/presence">Receive notifications for every client that joins or leaves a channel, or simply updates their presence-related data</ExternalLink> using Ably’s Realtime Client Library SDKs
                </li>
                </ul>
            </Para>
            <Para>You can also <ExternalLink href="https://www.ably.io/documentation/rest/presence#presence-history">retrieve the historical presence status</ExternalLink> of your clients using the History feature described next.</Para>
            <StyledImg fluid={ images["04.png" ] } alt=" " />
            <Heading3>3. History</Heading3>
            <Para>Maintaining strong, persistent internet connections isn’t always an option. And sometimes when a client disconnects from the internet, they might miss any messages sent during that time. To overcome this, Ably persists messages for two minutes by default.</Para>
            <Para>This is configurable to durations of up to 72 hours by using a feature called <ExternalLink href="https://www.ably.io/documentation/realtime/history">History</ExternalLink>. Any client that manages to reconnect during that period will receive any missed messages in the order they were originally sent.</Para>
            <StyledImg fluid={ images["05.png" ] } alt=" " />
           
            <Upnext>Up next: <InternalLink to="../chapter3">An overview of Ably's products &rarr;</InternalLink></Upnext>
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

