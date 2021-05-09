import React from "react"
import { Link } from "gatsby"
import "./tag.css"

interface Props {
  link: string
  title: string
}

export default function Tag({ link, title }: Props) {
  return (
    <span className="tag">
      <Link className="non-text-decoration" to={link}>
        {title}
      </Link>
    </span>
  )
}
