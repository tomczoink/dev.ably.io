
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Colors from "../variables/colors"
import Sizes from "../variables/sizes"
import Nav from "./nav"

import logo from "../images/ablydev.png";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${Sizes.desktop};
  margin: 0 auto;
  padding: 0 20px;
  background-color: white;
` 

const Logo = styled.h1 `
  margin: 0 40px 0 0;
  font-size: 1em;
`
  
const Link = styled.a`
  display: block;
  width: 160px;
  height: 60px;
  padding: 0px;
  color: transparent;
  background: url(${logo}) no-repeat center;
  background-size: contain;
`

const ExpanderCheck = styled.input`
  position: absolute;
  opacity: 0;
  &:checked + label + nav {
    transform: translateY(60px);
  }
`

const Expander = styled.label`
  position: relative;
  width: 40px;
  height: 36px;
  padding: 10px;
  border: 1px solid ${Colors.orange};
  border-radius: 4px;
  overflow: hidden;
  color: transparent;
  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 9px;
    border-top: 3px solid  ${Colors.orange};
    border-bottom: 3px solid  ${Colors.orange};
  }
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 15px;
    border-bottom: 3px solid  ${Colors.orange};
  }

  @media (min-width: ${Sizes.mobile}) {
    display: none;
  }
  
`

const Header = ({ siteTitle }) => (
  <Container>
      <Logo>
        <Link href="/">
          {siteTitle}
        </Link>
      </Logo>
      <ExpanderCheck type="checkbox" id="nav" name="nav"></ExpanderCheck>
      <Expander htmlFor="nav">show/hide</Expander>
      <Nav />
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Hello Dev",
}



export default Header
