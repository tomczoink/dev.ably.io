import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import team from "../images/ablyteam.jpg"
import Sizes from "../variables/sizes"
import Team from "../components/team"

const Intro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 24vw;
  color: white;
  background: url(${team}) no-repeat;
  background-repeat: repeat-x;
  background-size: contain;
  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);
`

const Title = styled.h1`
  margin: 1.5em 0 0.5em;
`

const SubTitle = styled.h2`
font-weight: normal;
  font-size: 1.2em;
`

const About = styled.section`
  max-width: ${Sizes.desktop};
  margin: 30px auto;
  padding: 0 20px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro>
      <Title>Ably Developer Portal</Title>
      <SubTitle>The home of Ably DevRel</SubTitle>
    </Intro>
    <About>
      <h1>Nice to meet you!</h1>
      <p>The Ably Developer Advocacy team love to make demos and tutorials to help you get to grips with realtime apps</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus nibh eu dui rhoncus porttitor. Cras sit amet dolor velit. Vestibulum scelerisque consectetur enim,</p>
      <Team></Team>
    </About>
  </Layout>
)

export default IndexPage

