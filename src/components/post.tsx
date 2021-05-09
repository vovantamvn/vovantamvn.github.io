import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Tag from "./tag"
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
      <br/>
      <div className="tag-container">
        {tags.map(tag => (
          <Tag title={tag} link={`/tags/${kebabCase(tag)}`} />
        ))}
      </div>
      <p>Date: {date}</p>
    </div>
  )
}
