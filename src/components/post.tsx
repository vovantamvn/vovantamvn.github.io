import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Tag from "./tag"
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
    <div className="rounder mb-2 pt-4 pr-4 pl-4">
      <Link className="text-decoration-none color-title font-xxs" to={slug}>
        {title}
      </Link>
      <br />
      <div className="mt-1 mb-1">
        {tags.map(tag => (
          <Tag title={tag} link={`/tags/${kebabCase(tag)}`} />
        ))}
      </div>
      <p>Date: {date}</p>
    </div>
  )
}
