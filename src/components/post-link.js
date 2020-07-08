import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Colors from "../variables/colors"

const Demo = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  margin: 10px;
  list-style: none;
  background-color: ${Colors.blue};
  color: white;
  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);
`

const PostLink = ({ post }) => {
    console.log(post);
   // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    return(
    <Demo>
        
        <Link to={post.frontmatter.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
    </Demo>
    )
}

export default PostLink