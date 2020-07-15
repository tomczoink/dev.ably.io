import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"

import Colors from "../variables/colors"

const Employees = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin: 0;
    padding: 0;
`

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

export default function Team() {

    const data = useStaticQuery(graphql`{
        allFile(filter: {relativeDirectory: {eq: "team"}, childImageSharp: {fluid: {}}}) {
        edges {
            node {
            base
            childImageSharp {
                fluid {
                    originalName
                    sizes
                    src
                    srcSet
                    aspectRatio
                }
            }
            }
        }
        }
    }`);

    const images = {};
    data.allFile.edges.forEach(edge => { images[edge.node.childImageSharp.fluid.originalName] = edge.node.childImageSharp.fluid; });

    return (
        <Employees>
            <Employee>
                <Name>Ben Gamble</Name>
                <Img  fluid={ images["ben.jpg" ] } alt="Ben Gamble" />
                <Role>Head of Developer advocacy</Role>
                <Stats>
                    <Stat>
                        <Key>Gaming</Key>
                        <Value>100</Value>
                    </Stat>
                    <Stat>
                        <Key>Talking Speed</Key>
                        <Value>80</Value>
                    </Stat>
                    <Stat>
                        <Key>Computers</Key>
                        <Value>over 9000</Value>
                    </Stat>
                </Stats>
            </Employee>
            <Employee>
                <Name>Srushtika Neelakantam</Name>
                <Img fluid={ images["srushtika.jpg" ] } alt="Srushtika Neelakantam" />
                <Role>Developer Advocate</Role>
                <Stats>
                    <Stat>
                        <Key>WebVR</Key>
                        <Value>100</Value>
                    </Stat>
                    <Stat>
                        <Key>WebSockets</Key>
                        <Value>100</Value>
                    </Stat>
                    <Stat>
                        <Key>IoT</Key>
                        <Value>100</Value>
                    </Stat>
                    <Stat>
                        <Key>Public Speaking</Key>
                        <Value>100</Value>
                    </Stat>
                    <Stat>
                        <Key>Cats</Key>
                        <Value>-10</Value>
                    </Stat>
                </Stats>
            </Employee>
            <Employee>
                <Name>Tom Camp</Name>
                <Img fluid={ images["tom.jpg" ] } alt="Tom Camp" />
                <Role>Developer advocate & realtime engineer</Role>
                <Stats>
                    <Stat>
                        <Key>Ably Hub</Key>
                        <Value>100</Value>
                    </Stat>
                    <Stat>
                        <Key>Niceness</Key>
                        <Value>100</Value>
                    </Stat>
                    <Stat>
                        <Key>Mobile Dev</Key>
                        <Value>100</Value>
                    </Stat>
                </Stats>
            </Employee>
            <Employee>
                <Name>Jo Franchetti</Name>
                <Img fluid={ images["jo.jpg" ] } alt="Jo Franchetti" />
                <Role>Developer Advocate</Role>
                <Stats>
                    <Stat>
                        <Key>CSS</Key>
                        <Value>80</Value>
                    </Stat>
                    <Stat>
                        <Key>Glitter</Key>
                        <Value>100</Value>
                    </Stat>
                    <Stat>
                        <Key>Rainbows</Key>
                        <Value>100</Value>
                    </Stat>
                </Stats>
            </Employee>
    </Employees>);
}
