import React from "react"
import { Link } from "gatsby"
interface Props {
  link: string
  title: string
}

export default function Tag({ link, title }: Props) {
  return (
    <span className="bg-btn rounder mr-1 pt-1 pb-1 pr-2 pl-2">
      <Link className="font-sm color-link text-decoration-none" to={link}>
        {title}
      </Link>
    </span>
  )
}
