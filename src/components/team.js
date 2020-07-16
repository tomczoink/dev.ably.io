import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
import TopTrump from "./toptrump"

import Colors from "../variables/colors"
import Twitter from "../svgs/twitter.svg"
import Insta from "../svgs/instagram.svg"
import Github from "../svgs/github.svg"
import Glitch from "../svgs/glitch.svg"


const Employees = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin: 0;
    padding: 0;
`

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
            <TopTrump name="Ben Gamble" role="Head of Developer Advocacy" img={images["ben.jpg" ]} />
            <TopTrump name="Jo Franchetti" role="Developer Advocate" img={images["jo.jpg" ]} />
            <TopTrump name="Jo Franchetti" role="Developer Advocate" img={images["jo.jpg" ]} />
            <TopTrump name="Jo Franchetti" 
                      role="Developer Advocate" 
                      img={images["jo.jpg" ]}
                      stats={{
                          "css": "100", 
                          "glitter": "100", 
                          "the web": "100"
                        }}
            />
        </Employees>
    );
}
