import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSearchBar from "../components/blog-search-bar/blog-search-bar"

import Fade from 'react-reveal/Fade';

const BlogLink = styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.h3`
margin-bottom: 20px;
color: black;
`

const BlogContainer = styled.div`
padding-top: 2rem;
`

const BlogBox = styled.div`
padding: 2rem;
background: #F3ECE7;
transition: transform 0.5s;
color: #37301e;
&:hover {
  transform: scale(1.05, 1.05);
}
`

const BlogBoxContainer = styled.div`
padding: 2rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 15px;
  row-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export default ({data}) => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
  <Layout>
    <SEO title="Home" />
    <BlogContainer>
      <BlogSearchBar handleSelect={(e) => setSelectedItem(e.label)} handleInput={(e) => !e && setSelectedItem(e) } items={data.allMarkdownRemark.edges.map(({node}) => ({key:node.id, label:node.frontmatter.title}))}>
        </BlogSearchBar>
        

        <BlogBoxContainer>
      {!selectedItem &&
        data.allMarkdownRemark.edges.map(({node}) => 
        <Fade key={node.id} >
        <BlogLink   to={node.fields.slug}><BlogBox >
            <BlogTitle>{node.frontmatter.title}</BlogTitle>
            <p>{node.excerpt}</p>
          </BlogBox>
          </BlogLink>
          </Fade>
        )
      }

{selectedItem &&
        data.allMarkdownRemark.edges.map(({node}) => {
          if(node.frontmatter.title === selectedItem) return (<BlogLink  key={node.id} to={node.fields.slug}><BlogBox >
            
          <BlogTitle>{node.frontmatter.title}</BlogTitle>
          
          <p>{node.excerpt}</p>
        </BlogBox>
        </BlogLink>)})}
      </BlogBoxContainer>
      </BlogContainer>
    
  </Layout>)
}

export const query = graphql`
query {
  allMarkdownRemark(sort:{fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
          description
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
