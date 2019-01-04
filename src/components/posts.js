import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const GET_ALL_POSTS_QUERY = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const Posts = () => (
  <StaticQuery
    query={GET_ALL_POSTS_QUERY}
    render={({ allMarkdownRemark }) => (
      <aside>
        <h3>Posts</h3>
        <ul>
          {allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.fields.slug}>
              {console.log(node)}
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    )}
  />
)

export default Posts
