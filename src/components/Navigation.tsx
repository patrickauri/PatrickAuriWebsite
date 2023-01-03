import React, { useState } from "react"
import { Link } from "react-router-dom"
import PatoLogo from "../assets/logos/PatoLogo.svg"
import Borgir from "../assets/graphics/icon-borgir.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  return (
    <div className="navigation">
      <div className="nav-logo">
        <img src={PatoLogo} alt="Patrick's Logo" />
      </div>
      <div
        className={`${
          menuOpen ? "mobile-background-open" : "mobile-background-closed"
        }`}
      ></div>
      <div className="borgir" onClick={handleMenu}>
        <img src={Borgir} alt="Hamburger Menu" className="borgir-img" />
      </div>
      <div
        className={`${menuOpen ? "nav-bar-cta-open" : "nav-bar-cta-closed"}`}
      >
        <div className="nav-bar">
          <div className="nav-bar-button">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </div>
          <div className="nav-bar-dropdown">
            <span className="nav-bar-chevron">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            Portfolio
            <div className="nav-bar-dropdown-wrapper">
              <Link to="/music" onClick={() => setMenuOpen(false)}>
                <div className="nav-bar-dropdown-items">Music</div>
              </Link>
              <Link to="/code" onClick={() => setMenuOpen(false)}>
                <div className="nav-bar-dropdown-items">Programming</div>
              </Link>
              <Link to="/voice" onClick={() => setMenuOpen(false)}>
                <div className="nav-bar-dropdown-items">Voice Acting</div>
              </Link>
              <Link to="/design" onClick={() => setMenuOpen(false)}>
                <div className="nav-bar-dropdown-items">Design</div>
              </Link>
              <Link to="/editing" onClick={() => setMenuOpen(false)}>
                <div className="nav-bar-dropdown-items">Video Editing</div>
              </Link>
              <Link to="/translation" onClick={() => setMenuOpen(false)}>
                <div className="nav-bar-dropdown-items">Translation</div>
              </Link>
            </div>
          </div>
          <div className="nav-bar-button">
            <Link to="/socials" onClick={() => setMenuOpen(false)}>
              Socials
            </Link>
          </div>
          <div className="nav-bar-button">
            <Link to="/faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
          </div>
        </div>
        <div className="nav-cta">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <div className="nav-cta-btn">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
