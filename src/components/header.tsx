import * as React from "react"
import { Link } from "gatsby"

interface Props {
  siteTitle?: string
}

export default function Header({ siteTitle }: Props) {
  const titleClasses = "text-decoration-none color-white font-xxs mr-4"

  return (
    <header className="bg-dark mb-4">
      <div className="flex flex-direction-row pt-4 pb-4 pl-16 pr-16">
        <div>
          <Link to="/" className="font-xxl color-white text-decoration-none">
            {siteTitle}
          </Link>
        </div>

        <nav className="ml-16">
          <Link className={titleClasses} to="/">
            Home
          </Link>
          <Link className={titleClasses} to="/tags">
            Tags
          </Link>
          <Link className={titleClasses} to="#">
            About
          </Link>
          <Link className={titleClasses} to="#">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
