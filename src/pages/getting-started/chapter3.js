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
                <li><Link to="../chapter1">Key realtime concepts</Link></li>
                <li><Link to="../chapter2">Fundamental features of Ably</Link></li>
                <li>An overview of Ably’s products</li>
                <li><Link to="../chapter4">Open data streaming and the Ably Hub</Link></li>
                <li><Link to="../chapter5">Choosing the right package</Link></li>
            </ol>
        </Menu>
        <Container>
          <Heading>Chapter 3</Heading>
          <Heading2>A quick overview of Ably’s products</Heading2>
          <Heading3>1. Channels</Heading3>
          <Para><ExternalLink href="https://www.ably.io/channels">Channels</ExternalLink> are the unit of data distribution in Ably. They enable you to categorically share different sets of data with different clients.</Para>
          <Para>A good example is a logistics app. When new location updates are available, they are pushed directly to the location channel and all it's subscribers - in this case a mobile app, a webpage and an internal server - receive this data in realtime. However, if the server needs to share some other data, like the job updates only with the truck, it can use a different channel to do so, making sure the other clients don't participate in this data transfer.</Para>
          <StyledImg fluid={ images["06.png" ] } alt=" " />
        
          <Heading3>2. Protocol Adapters</Heading3>
          <Para><ExternalLink href="https://www.ably.io/adapters">Ably’s protocol adapters</ExternalLink> provide interoperability between the Ably Protocol and other push-based realtime, streaming & queueing protocols like <ExternalLink href="https://www.ably.io/concepts/mqtt">MQTT</ExternalLink>, <ExternalLink href="https://www.ably.io/concepts/server-sent-eventsServer-Sent">Server Sent Events (SSE)</ExternalLink>, and the <ExternalLink href="https://www.ably.io/tutorials/pubnub-adapter">PubNub</ExternalLink> & <ExternalLink href="https://www.ably.io/tutorials/pusher-adapter">Pusher</ExternalLink> protocols. This allows you to seamlessly switch between protocols with no integration work so you can use the best protocol for your specific task at hand.</Para>
          <Para>Developers use Ably’s Protocol Adapters in three main ways:
            <ul>
              <li>To migrate from legacy or proprietary systems in a progressive way</li>
              <li>When a wide array of devices or third party systems need to connect into a single realtime messaging layer but may not be able or willing to adopt the native Ably protocol. For example, customers working with IoT devices might primarily use MQTT to stream data bidirectionally in a more battery- or compute-efficient way. But have a smartphone subscribe to that data over WebSockets</li>
              <li>To future-proof their technology stack. Ably is <ExternalLink href="https://www.ably.io/open-policy">committed</ExternalLink> to supporting new realtime protocols as they emerge</li>
            </ul>
          </Para>
          <StyledImg fluid={ images["07.png" ] } alt=" " />
        
        
          <Heading3>3. Reactor</Heading3>
          <Para>The Ably <ExternalLink href="https://www.ably.io/reactor">Reactor</ExternalLink> helps you run realtime applications at scale and connect different parts of your systems with Ably. By providing ready-built data processing pipelines the Reactor takes care of the complexity of delivering high volumes of data reliably, directly to other clouds, queues, and even triggering serverless functions as the happen.</Para>
          <Para>A few things you can do with Reactor:
          <ul>
            <li>Invoke functions in realtime within your own servers using <ExternalLink href="https://www.ably.io/documentation/general/webhooks">WebHooks</ExternalLink>.</li>
            <li>Invoke <ExternalLink href="https://www.ably.io/documentation/general/functions">serverless functions</ExternalLink> in realtime across third-party providers like Amazon Lambda, Google Cloud, or Microsoft Azure.</li>
            <li>Queue data into your servers with <ExternalLink href="https://www.ably.io/documentation/general/queues">message queues</ExternalLink> so you can distribute the burden of consuming realtime messages without system overload.</li>
            <li>Connect to other third-party streaming services such as Kafka, RabbitMQ, Amazon SQS, Amazon Kinesis with <ExternalLink href="https://www.ably.io/documentation/general/firehose">Firehose</ExternalLink>.</li>
          </ul>
          </Para>
          <StyledImg fluid={ images["08.png" ] } alt=" " />

          <Heading3>4. Push Notifications</Heading3>
          <Para>With <ExternalLink href="https://www.ably.io/documentation/general/push">Ably’s unified push notifications API</ExternalLink> you can connect to the native iOS and Android push notification services, all without leaving Ably, and seamlessly send push notifications to all your users.</Para>
          <StyledImg fluid={ images["09.png" ] } alt=" " />
    
          <Heading3>5. API Streamer</Heading3>
          <Para>The realtime API economy is exploding. Our most important digital interactions now happen in realtime. As such, end-users increasingly expect realtime features and functionality in their applications and APIs. Now is the perfect time to expand your realtime development into API creation.</Para>
          <StyledImg fluid={ images["10.png" ] } alt=" " />
          <Para>Ably's <ExternalLink href="https://www.ably.io/api-streamer">API Streamer</ExternalLink> is already helping developers by offering the tools and distribution network to rapidly deploy, manage, and distribute Realtime APIs with almost no development time. Because API Streamer allows developers to completely offload the cost and heavy engineering lifting involved in effectively distributing realtime data streams, it really is a simple matter of deploying to API Streamer and sending users to a developer portal.</Para>
          <Para>You gain all the management tools you’d expect: auth, developer portals, rate-limiting, caching, security, billing, monetization, and analytics. You can create an API and monetize your realtime data feeds instantly.</Para>
    
          <Upnext>Up next: <InternalLink to="../chapter4/">Open data streaming and the Ably Hub &rarr;</InternalLink></Upnext>
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
