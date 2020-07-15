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
    <Social href="https://github.com/ably">
        <Github />
    </Social>
    <Social href="https://twitter.com/ablyrealtime">
        <Twitter />
    </Social>
    <Social href="https://glitch.com/@ably-realtime">
        <Glitch />
    </Social>
    <Social href="https://www.instagram.com/lifeatably/">
        <Insta />
    </Social>
  </Container>
)

export default Footer
