import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

interface Edge {
  node: {
    frontmatter: {
      date: string
      title: string
      slug: string
      tags: Array<string>
    }
    timeToRead: number
  }
}

interface Props {
  data: {
    tagsGroup: {
      edges: Array<Edge>
    }
  }
}

const IndexPage = ({
  data: {
    tagsGroup: { edges },
  },
}: Props) => (
  <Layout>
    <SEO title="Home" />

    <div>
      {edges.map(({ node }) => (
        <Post node={node} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    tagsGroup: allMarkdownRemark(
      limit: 20
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            tags
          }
          timeToRead
        }
      }
    }
  }
`
