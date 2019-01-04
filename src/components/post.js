import React from 'react'
import { graphql } from 'gatsby'

import SEO from './seo'

const Post = ({ data: { markdownRemark } }) => (
  <>
    <SEO title={markdownRemark.frontmatter.title} />
    <article>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </article>
  </>
)

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
