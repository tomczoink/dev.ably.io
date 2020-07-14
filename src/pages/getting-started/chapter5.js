import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

import Sizes from "../../variables/sizes"
import Colors from "../../variables/colors"

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
    margin-bottom: 0em;
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

const IndexPage = () => {
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
                <li><Link to="../chapter4/">Open data streaming and the Ably Hub</Link></li>
                <li>Choosing the right package</li>
            </ol>
        </Menu>
        <Container>
          <Heading>Chapter 5</Heading>
          <Heading2>Choose the best package for you</Heading2>
          <Para>We try to keep our <ExternalLink href="https://www.ably.io/pricing">pricing</ExternalLink> simple: All packages are usage-based with clear information about what that means for you.</Para>
          <Heading3><ExternalLink href="https://www.ably.io/pricing">Free:</ExternalLink></Heading3>
          <Para>Designed for hobbyist developers or students wanting to build quick and cool apps. Or professional developers wanting to try out Ably. Tech support with reasonable response times.</Para>
          <Heading3><ExternalLink href="https://www.ably.io/pricing/calculator">Self-service:</ExternalLink></Heading3>
          <Para>Designed for small businesses who still need the reliability and speed of Ably’s Data Stream Network. You pay only for what you use. Live chat support.</Para>
          <Heading3><ExternalLink href="https://www.ably.io/pricing/calculator#business_plan">Busines:</ExternalLink></Heading3>
          <Para>Any developer doing major realtime engineering will need extra assurances around service and support. Support response times within two business hours and Ably’s engineers actively monitor and optimize your service. You pay only for what you use.</Para>
          <Heading3><ExternalLink href="https://www.ably.io/pricing/enterprise">Enterprise:</ExternalLink></Heading3>
          <Para>Realtime messaging at scale and with intricate needs across a large, complex engineering environment. 24/7 and 365 days a year support with a target response time of just 15 minutes. Custom SLAs with access to our 100% uptime guarantee. You pay only for what you use with extra levels of customizability.</Para>
    
          <Para>You are up to speed with everything in the Ably onboarding guide. Next steps:</Para>
            <ul>
                <li><ExternalLink href="https://www.ably.io/documentation">Dive into the docs</ExternalLink></li>
                <li><ExternalLink href="https://www.ably.io/tutorials">Check out the tutorials</ExternalLink></li>
                <li><ExternalLink href="https://www.youtube.com/channel/UCC-sGGUfT-ot_E8i1ARYQVw">Watch our explanatory videos</ExternalLink></li>
                <li><ExternalLink href="https://www.twitter.com/ablyrealtime">Build something awesome and tell us @ablyrealtime</ExternalLink></li>
                <li>Questions? <ExternalLink href="https://wwww.ably.io/support">Reach out via our support portal</ExternalLink></li>
            </ul>

        </Container>
    </Guide>
  </Layout>
  )
}

export default IndexPage
