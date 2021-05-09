import React from "react"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Tag from "../components/tag"

interface Site {
  siteMetadata: {
    title: string
  }
}

interface MarkdownRemark {
  fieldValue: string
  totalCount: number
}

interface Props {
  data: {
    allMarkdownRemark: {
      group: Array<MarkdownRemark>
    }
    site: Site
  }
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}: Props) => (
  <Layout>
    <div>
      <Helmet title={title} />
      <div>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              {/* <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link> */}
              <Tag
                title={`${tag.fieldValue} (${tag.totalCount})`}
                link={`/tags/${kebabCase(tag.fieldValue)}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
