import React from "react"
import { Link } from "react-router-dom"
import PatoLogo from "../assets/logos/PatoLogo.svg"

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-logo">
        <img src={PatoLogo} alt="Patrick's Logo" />
      </div>
      <div className="nav-bar">
        <div className="nav-bar-button">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-bar-dropdown">Portfolio</div>
        <div className="nav-bar-button">
          <Link to="/socials">Socials</Link>
        </div>
        <div className="nav-bar-button">
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
      <div className="nav-cta">
        <Link to="/contact">
          <div className="nav-cta-btn">Contact</div>
        </Link>
      </div>
    </div>
  )
}
