import React from "react"
import {Link} from 'gatsby'

export default function Header() {
  return (
    <div>
      <h1>DebtCollective's GitHub Repos</h1>
      <div className="input-group">
        <Link className="button button-success" to="/">
          Home
        </Link>
        <Link className="button button-info" to="/about/">
          About
        </Link>
      </div>
    </div>
  )
}