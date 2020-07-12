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
    padding: 0 30px;
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

const Upnext = styled.p`
    margin: 2em 0;
    color: ${Colors.grey};
`

const IndexPage = ({data}) => {
  console.log(data.allFile.edges[0].node.childImageSharp.fluid)
  return (
    <Layout>
    <SEO title="Event Sponsorship" />
    <Title>Developer Onboarding Guide</Title>
    <Guide>
        <Menu>
            <h2>Contents</h2>
            <ol>
                <li><Link to="/demos/">Key realtime concepts</Link></li>
                <li><Link to="/demos/">Fundamental features of Ably</Link></li>
                <li><Link to="/demos/">An overview of Ably’s products</Link></li>
                <li><Link to="/demos/">Open data streaming and the Ably Hub</Link></li>
                <li><Link to="/demos/">Choosing the right package</Link></li>
            </ol>
        </Menu>
        <Container>
          <Heading>Chapter 2</Heading>
          <Heading2>Fundamental features of the Ably Data Stream Network</Heading2>
          <Heading3>1. Ably Realtime and Ably REST Client Library SDKs</Heading3>
            <Para>Ably's Data Stream Network (DSN) primarily offers <a href="https://www.ably.io/documentation/realtime">realtime Client Library SDKs</a> that allow you to incorporate the Pub/Sub messaging pattern in your apps and operate any number of such persistent publisher or subscriber clients.</Para> 
            <Para>However, in many scenarios you may not need persistent connections. Most servers are typically stateless and hence HTTP based REST requests better suit them in order to be able to process each request independently. In many other situations, for example, if you have an IoT sensor that only needs to publish data at certain intervals, you’re better off with a REST request rather than maintaining a persistent connection which leads to battery-drain. For scenarios like this, Ably also offers <a href="https://www.ably.io/documentation/rest">REST-based Client Library SDKs</a>.</Para>
            <Para>Our <a href="https://www.ably.io/documentation/best-practice-guide#choosing-between-realtime-rest-mqtt">best practice guide</a> further explains when to use which library.</Para>
    
            <Heading3>2. Authentication</Heading3>
            <Para>Ably requires your clients to authenticate before accessing the Ably Network. We provide two ways of authenticating your clients: 
            <ul>
                <li>
                    <a href="https://www.ably.io/documentation/core-features/authentication#basic-authentication">Basic auth</a> enables your clients to directly plug in API keys. This is quick but not recommended for production level apps, as API keys are vulnerable to misuse when embedded in client-side code.
                </li>
                <li>
                    <a href="https://www.ably.io/documentation/core-features/authentication#token-authentication">Token auth</a> enables you to assign short-lived tokens to your clients, which they can use to authenticate with Ably. This can be an <a href="https://www.ably.io/documentation/core-features/authentication#token-process">Ably-specific token</a> or a <a href="https://www.ably.io/documentation/core-features/authentication#ably-jwt-process">JSON Web Token (JWT)</a>. Token auth is a safer and recommended option to use in production level apps.
                </li>
            </ul>
            Here’s a 5-minute video with a detailed explanation on authentication with Ably:
            </Para>
            <Para>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FHkzs8z3J5E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Para>
            <Heading3>2. Presence</Heading3>
            <Para><a href="https://www.ably.io/documentation/core-features/presence">Presence</a> tells you who is connected to your application and what their status or attributes are. You can use presence in two ways:
                <ul>
                <li>
                    <a href="https://www.ably.io/documentation/rest/presence#member-list">Retrieve a list of ‘online’ clients using</a> Ably’s REST client library SDKs
                </li>
                <li>
                    <a href="https://www.ably.io/documentation/realtime/presence">Receive notifications for every client that joins or leaves a channel, or simply updates their presence-related data</a> using Ably’s Realtime Client Library SDKs
                </li>
                </ul>
            </Para>
            <Para>You can also <a href="https://www.ably.io/documentation/rest/presence#presence-history">retrieve the historical presence status</a> of your clients using the History feature described next.</Para>
            <a href="https://www.ably.io/documentation/realtime/presence"><img class="bodyimg" src="assets/images/presence.png"></img></a>
            <Heading3>3. History</Heading3>
            <Para>Maintaining strong, persistent internet connections isn’t always an option. And sometimes when a client disconnects from the internet, they might miss any messages sent during that time. To overcome this, Ably persists messages for two minutes by default.</Para>
            <Para>This is configurable to durations of up to 72 hours by using a feature called <a href="https://www.ably.io/documentation/realtime/history">History</a>. Any client that manages to reconnect during that period will receive any missed messages in the order they were originally sent.</Para>
            <a href="https://www.ably.io/documentation/realtime/history"><img class="bodyimg" src="assets/images/history.png"></img></a>
           
            <Upnext>Up next: <Link to="./chapter2">An overview of Ably's products &rarr;</Link></Upnext>
        </Container>
    </Guide>
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "onboarding"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
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
  }  
`


