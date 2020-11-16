/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "../components/hero/hero"
import "./layout.css"

const Layout = ({ children, isBlogPost = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{
      background: isBlogPost ? `#F3ECE7` : `inherit`,
      height: `100vh`,
    }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} isBlogPost={isBlogPost} />
   {!isBlogPost &&
    <Hero></Hero>
   } 
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
