import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Sizes from "../variables/sizes"
import Colors from "../variables/colors"

const Title = styled.h1`
  padding: 20px;
  text-align: center;
  background-color: ${Colors.charcoal};
  color: white;
`

const About = styled.section`
  max-width: ${Sizes.desktop};
  margin: 30px auto;
  padding: 0 20px;
`

const Text = styled.p`
    font-size: 1em;
`

const Guidelines = styled.section`

`

const Button = styled.a`

`

const IndexPage = () => (
  <Layout>
    <SEO title="Event Sponsorship" />
    <Title>Event Sponsorship</Title>
    <Button href="https://go.ably.io/event-sponsorship-request">Apply for Event Sponsorship</Button>
    <About>
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
        <Guidelines>
        <h3>Ably's sponsorship guidelines</h3>
        <ul>
          <li>
            Our sponsorship program is intended for tech meetups or small-scale
            conferences promoting APIs, event-driven technologies on the web and
            mobile, all things IoT, SaaS engineering, or generally anything to
            do with creating digital realtime applications or experiences.
          </li>
          <li>Your event must have a proper Code of Conduct.</li>
          <li>
            Ably's logo should be displayed on all promotional material for your
            event including social media posts, email updates and ticketing
            platforms.
          </li>
          <li>
            Ably's social handles must be mentioned in your promotional posts.
          </li>
          <li>
            Ably's logo should be displayed and verbally mentioned at the time
            of welcome address as well as the ending note.
          </li>
          <li>
            Alcoholic beverages aren’t included as that would go against our
            push for better developer health.
          </li>
          <li>
            It can take us a couple of weeks to get back to you once you submit
            the form so please be patient :)
          </li>
          <li>
            If you urgently need to talk to someone from our DevRel team, please
            drop an email to devrel@ably.io. Please do not use this to escalate
            sponsorship requests unless necessary.
          </li>
        </ul>
        </Guidelines>
    </About>
  </Layout>
)



export default IndexPage
