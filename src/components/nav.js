import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Colors from "../variables/colors"
import Sizes from "../variables/sizes"

const Container = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background-color: ${Colors.orange};
    transform: translateY(-100%);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1;
    & a {
        position: relative;
        margin: 0 ${Sizes.padding};
        padding: 30px 0;
        text-decoration: none;
        text-align: center;
        color: ${Colors.charcoal};
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &:hover {
            color: ${Colors.orange_dk};
        }
    
        &:last-child {
            margin-right: 0;
        }
        &:after {
            content: "";
            position: absolute;
            height: 3px;
            bottom: 0px;
            left: 0;
            right: 0;
            background-color: ${Colors.orange_dk};
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        &:hover:after {
            visibility: visible;
            transform: scaleX(1);
        }
    }
    @media (min-width: ${Sizes.mobile}) {
        flex-direction: row;
        position: relative;
        transform: translateY(0)!important;
        width: auto;
        background-color: transparent;
    }
`

const Nav = () => (
  <Container>
    <Link to="/">About Us</Link>  
    <Link to="/demos/">Demos & Resources</Link>  
    <Link to="/getting-started/chapter1">Get Started</Link>  
    <Link to="/event-sponsorship/">Event Sponsorship</Link>  
  </Container>
)

export default Nav
