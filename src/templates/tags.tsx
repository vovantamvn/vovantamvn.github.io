import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

interface Edge {
  node: {
    frontmatter: {
      title: string
      slug: string
    }
    fields: {
      slug: string
    }
  }
}

interface Props {
  pageContext: {
    tag: string
  }
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: Array<Edge>
    }
  }
}

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug, title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug} className="text-decoration-none color-link">
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
        <Link to="/tags" className="text-decoration-none color-link">
          All tags
        </Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
