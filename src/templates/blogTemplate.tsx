import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
      },
      html: string,
    }
  }
}

export default function Template({ data }: Props) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const { title } = frontmatter

    return (
        <Layout>
            <SEO title={title} />
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{title}</h1>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Layout>

    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`