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
    margin: 3em 0;
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
                <li>Key realtime concepts</li>
                <li><Link to="../chapter2">Fundamental features of Ably</Link></li>
                <li><Link to="../chapter3">An overview of Ably’s products</Link></li>
                <li><Link to="../chapter4">Open data streaming and the Ably Hub</Link></li>
                <li><Link to="../chapter5">Choosing the right package</Link></li>
            </ol>
        </Menu>
        <Container>
          <Heading>Chapter 1</Heading>
          <Heading2>Key realtime concepts</Heading2>
          <Heading3>1. Publish/Subscribe vs. Request/Response</Heading3>
          <Para>Publish/Subscribe (aka Pub/Sub) is an asynchronous messaging pattern where data is pushed from publishers to subscribers over a distribution mechanism called  <ExternalLink href="https://ably.io/channels">channels</ExternalLink>. Publishers publish data to a channel and that data is immediately pushed to all subscribers to that channel. Ideally, different channels should be used for different categories of data.</Para>
          <StyledImg fluid={ images["01.png" ] } alt=" " />
          <Para>The core concept behind Pub/Sub and Realtime APIs is pushing new data to all subscribers as soon as it’s published, making it much faster and more efficient than frequently requesting new data. This is in direct contrast to REST APIs, where we must make a request to pull any new data - aka a Request/Response messaging pattern.</Para>
          <Para>A major advantage of Pub/Sub messaging is that publishers and subscribers are completely decoupled so each can continue to operate independently of the other. As such, Pub/Sub messaging increases performance, reliability and scalability in realtime apps.</Para>
          <Heading3>2. Persistent, stateful connections</Heading3>
          <Para>In HTTP-based REST requests you establish a connection, request new data, and then wait for a response. Once a response is received the connection is closed. For event-driven applications that rely on low latency data transfer - location tracking, multiplayer gaming, live chat, etc - REST requests simply cannot deliver the required level of performance. This is why Pub/Sub was first developed.</Para>
          <StyledImg fluid={ images["02.png" ] } alt=" " />
          
          <Para>Any realtime communication requires a persisted, stateful connection between a data publisher and subscriber - often with an intermediate routing platform sitting between the two. This is achieved using realtime transport protocols such as <ExternalLink href="https://ably.io/concepts/websockets">WebSockets</ExternalLink> or <ExternalLink href="https://ably.io/concepts/mqtt">MQTT</ExternalLink>. These protocols allow you to keep the connection open until closed by either party. Any new data is sent and received with low latency as connections don’t need to be frequently re-established.</Para>

          <Heading3>3. Data Stream Network</Heading3>
          <Para>Realtime applications require much more than simply building with Pub/Sub architecture. Security, access control, performance, reliability, and scalability are all critical to any realtime application. This is the very problem that a Data Stream Network (DSN) aims to solve. A DSN is a complete realtime Pub/Sub messaging layer that provides these critical functions and more across a globally-distributed cloud network.</Para>
          <Para>Developers building realtime applications using <ExternalLink href="https://www.ably.io/dsn">Ably's Data Stream Network</ExternalLink> don’t need to worry about performance, reliability, scalability, interoperability as all of that is taken care of by Ably. They can instead focus on their core app or business details.</Para>
          <Para>Here’s a simple example of a publisher and subscriber instance when using Ably.</Para>
          <StyledImg fluid={ images["03.png" ] } alt=" " />

          <Upnext>Up next: <InternalLink to="../chapter2">Fundamental features of Ably &rarr;</InternalLink></Upnext>
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
