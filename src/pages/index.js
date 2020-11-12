import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

import SEO from "../components/seo"

import BlogSearchBar from "../components/blogSearchBar"

const BlogLink = styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.h3`
margin-bottom: 20px;
color: black;
`

const BlogBox = styled.div`
box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);
padding: 2rem;
`

const BlogBoxContainer = styled.div`
padding: 2rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 15px;
  row-gap: 15px;
`

export default ({data}) => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      <BlogSearchBar handleSelect={(e) => setSelectedItem(e.label)} handleInput={(e) => !e && setSelectedItem(e) } items={data.allMarkdownRemark.edges.map(({node}) => ({key:node.id, label:node.frontmatter.title}))}>
        </BlogSearchBar>

        <BlogBoxContainer>
      {!selectedItem &&
        data.allMarkdownRemark.edges.map(({node}) => 
        <BlogLink  key={node.id} to={node.fields.slug}><BlogBox >
            
            <BlogTitle>{node.frontmatter.title}</BlogTitle>
            
            <p>{node.excerpt}</p>
          </BlogBox>
          </BlogLink>
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
      </div>
    
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
