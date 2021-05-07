import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import "./post.css"

interface Props {
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

export default function Post({ node }: Props) {
  const { frontmatter } = node
  const { title, slug, date, tags } = frontmatter

  return (
    <div className="post-container card">
      <Link className="post-title link non-text-decoration" to={slug}>
        {title}
      </Link>
      <div>
        {tags.map(tag => (
          <span className="tag">
            <Link className="non-text-decoration" to={`/tags/${kebabCase(tag)}`}>
              {tag}
            </Link>
          </span>
        ))}
      </div>
      <p>Date: {date}</p>
    </div>
  )
}
