import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

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
    <div>
      <Link to={slug}>{title}</Link>
      {tags.map(tag => (
        <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
      ))}
      <p>Date: {date}</p>
    </div>
  )
}
