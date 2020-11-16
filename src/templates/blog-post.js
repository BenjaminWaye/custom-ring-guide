import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from "styled-components"

const BlogArticle = styled.article`
color: #37301e;
padding-top: 4rem;
}
`

export default ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout isBlogPost={true}>
            <SEO title={post.frontmatter.title}/>
            <BlogArticle>
                <h1>
                    {post.frontmatter.title}
                </h1>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </BlogArticle>
        </Layout>
    )
};

 export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
        }
    }
}
 `