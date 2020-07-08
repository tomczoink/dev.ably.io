import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"


const Item = styled.span`
    position: absolute;
    top: 0%;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 40px;
    text-align: center;
    font-size: 1.4em;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    line-height: 1.4em;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);;
    opacity: 1;
    transition: opacity 0.5s linear;
`

const Demo = styled.li`
    position: relative;
    margin: 1px;
    list-style: none;
    overflow: hidden;
    & .gatsby-image-wrapper {
        display: block;
        width: 100%;
    }
 
    & a:hover span {
        opacity: 0;
    }
`

const PostLink = ({ post }) => {
    console.log(post.frontmatter.featureImage)
    return (
    <Demo>
        <Link to={post.frontmatter.slug}>
            <Img fluid={post.frontmatter.featureImage.childImageSharp.fluid} />
            <Item>{post.frontmatter.title}</Item>
        </Link>
    </Demo>
    )
}

export default PostLink