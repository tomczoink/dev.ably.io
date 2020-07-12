import React from "react"
import styled from "styled-components"
import Colors from "../variables/colors"

import Twitter from "../svgs/twitter.svg"
import Insta from "../svgs/instagram.svg"
import Github from "../svgs/github.svg"
import Glitch from "../svgs/glitch.svg"

const Container = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px;
  color: white;
  background-color: ${Colors.charcoal}
`

const Social = styled.a`
    width: 40px;
    margin: 0 20px;
`

const Footer = () => (
    <Container>
    © {new Date().getFullYear()}
    <Social href="#">
        <Github />
    </Social>
    <Social href="#">
        <Twitter />
    </Social>
    <Social href="#">
        <Glitch />
    </Social>
    <Social href="#">
        <Insta />
    </Social>
  </Container>
)

export default Footer
