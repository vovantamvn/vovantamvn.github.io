import * as React from "react"
import { Link } from "gatsby"
import "./header.css"

interface Props {
  siteTitle?: string
}

const Header = ({ siteTitle }: Props) => (
  <header className="header-container">
    <div className="nav-container">
      <div>
        <Link to="/" className="header-link">
          {siteTitle}
        </Link>
      </div>

      <nav className="nav-element">
        <Link className="header-element" to="/">
          Home
        </Link>
        <Link className="header-element" to="/tags">
          Tags
        </Link>
        <Link className="header-element" to="#">
          About
        </Link>
        <Link className="header-element" to="#">
          Contact
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
