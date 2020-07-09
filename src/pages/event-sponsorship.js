import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Sizes from "../variables/sizes"
import Colors from "../variables/colors"
import GatsbyImage from "gatsby-image"

const Title = styled.h1`
  padding: 20px;
  text-align: center;
  background-color: ${Colors.charcoal};
  color: white;
`

const Sponsor = styled.section`
  position: relative;
  max-width: ${Sizes.desktop};
  margin: 30px auto;
  padding: 0 20px;
`

const Text = styled.p`
  line-height: 1.4em;
  @media (min-width: ${Sizes.mobile}) {
    font-size: 1.2em;
  }
`

const StyledImg = styled(GatsbyImage)`
  float: right;
  width: 180px!important;
  height: 480px!important;
  @media (min-width: ${Sizes.mobile}) {
    margin: 100px 0 40px 20px;
    width: 300px!important;
    height: 800px!important;
  }
`

const Heading = styled.h2`
  margin-top: 2em;
  font-size: 2em;
  font-weight: normal;
`

const Button = styled.a`
  display: block;
  width: max-content;
  margin: 0 auto 1em;
  padding: 20px 30px;
  border-radius: 5px;
  font-size: 1.4em;
  text-decoration: none;
  color: white;
  background-color: ${Colors.orange};
  &:hover {
    background-color: ${Colors.orange_dk};
  }
  @media (min-width: ${Sizes.mobile}) {
    position: absolute;
    top: 0;
    right: 20px;
    marign: 0;
  }
`

const Guidelines = styled.li`
  line-height: 1.2em;
  margin-bottom: 1em;
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Event Sponsorship" />
    <Title>Event Sponsorship</Title>
    <Sponsor>
      <Button href="https://go.ably.io/event-sponsorship-request">Apply for Sponsorship</Button>
      <StyledImg fixed={data.file.childImageSharp.fixed} />
        <Text>Ably is a developer-focused platform that provides APIs and
        management tools for adding realtime features to applications and
        APIs
        </Text><Text>
        Developers are at the heart of Ably and the next-gen applications
        and APIs being built on our platform. Ably was founded by a group
        of developers, so we immensely care about developer communities
        and experience. We try to be present at as many events as we can,
        speaking, demo-ing and generally engaging with developers.
        </Text><Text>
        Over the years we’ve noticed that many events serve unhealthy food
        - mainly pizzas. Have you ever wanted to have healthy options and
        not feel guilty about opting an unhealthy meal simply due to a
        lack of options? We’ve been there too. As a developer-first
        company, we care about developers - in all respects. So we’re
        launching this new developer event sponsorship program to help
        encourage healthier food options for your event attendees.
        </Text>
     
        <Heading>Ably's sponsorship guidelines</Heading>
        <ul>
          <Guidelines>
            Our sponsorship program is intended for tech meetups or small-scale
            conferences promoting APIs, event-driven technologies on the web and
            mobile, all things IoT, SaaS engineering, or generally anything to
            do with creating digital realtime applications or experiences.
          </Guidelines>
          <Guidelines>Your event must have a proper Code of Conduct.</Guidelines>
          <Guidelines>
            Ably's logo should be displayed on all promotional material for your
            event including social media posts, email updates and ticketing
            platforms.
          </Guidelines>
          <Guidelines>
            Ably's social handles must be mentioned in your promotional posts.
          </Guidelines>
          <Guidelines>
            Ably's logo should be displayed and verbally mentioned at the time
            of welcome address as well as the ending note.
          </Guidelines>
          <Guidelines>
            Alcoholic beverages aren’t included as that would go against our
            push for better developer health.
          </Guidelines>
          <Guidelines>
            It can take us a couple of weeks to get back to you once you submit
            the form so please be patient :)
          </Guidelines>
          <Guidelines>
            If you urgently need to talk to someone from our DevRel team, please
            drop an email to devrel@ably.io. Please do not use this to escalate
            sponsorship requests unless necessary.
          </Guidelines>
        </ul>
    </Sponsor>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "sponsorship5.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`