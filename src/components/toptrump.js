import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Colors from "../variables/colors"
import Twitter from "../svgs/twitter.svg"
import Insta from "../svgs/instagram.svg"
import Github from "../svgs/github.svg"
import Glitch from "../svgs/glitch.svg"

const Employee = styled.li`
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    list-style: none;
    border: 10px solid ${Colors.orange};
    background-color: ${Colors.orange_dk};
    color: white;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.3);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    & img {
        margin: 0;
        border: 2px solid ${Colors.charcoal};
    }
    &:first-child {
        transform: rotate(-2deg);
    }
    &:nth-child(2) {
        transform: rotate(1deg);
    }
    &:nth-child(3) {
        transform: rotate(2deg);
    }
    &:last-child {
        transform: rotate(-1deg);
    }
    &:hover {
        transform: rotate(0);
    }
`

const Name = styled.h3`
    margin: 0 0 10px 0;
    font-size: 1.4em;
    font-weight: normal;
`

const Role = styled.h4`
    margin: 10px 0;
    font-size: 1.1em;
    letter-spacing: 1px;
`

const Stats = styled.ul`
    margin: 0;
    padding: 0;
    border-top: 1px solid white;
`

const Stat = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 2px;
    border-bottom: 1px solid white;
    list-style: none;
`
const Key = styled.span``

const Value = styled.span``

const Socials = styled.div`
    display: flex;
    margin-top: 10px;
`

const Social = styled.a`
    width: 40px;
    flex-grow: 0;
    margin: 0 20px;
    & svg rect {
        fill: transparent;
    }
    & svg path {
        fill: white;
    }
`

export default function TopTrump(props) {
    let Statistics;
    for (var key in props.stats) {
        Statistics.push(<Stat><Key>{key}</Key><Value>{props.stats[key]}</Value></Stat>);
    }
    return (
        <Employee>
            <Name>{props.name}</Name>
            <Img fluid={ props.img } alt={props.name} />
            <Role>{props.role}</Role>
            <Statistics />
            <Socials>
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
            </Socials>
        </Employee>
    );
}
