import React from "react"
import PatoLogo from "../assets/logos/PatoLogo.svg"

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-logo">
        <img src={PatoLogo} />
      </div>
      <div className="nav-bar">
        <div className="nav-bar-button">Home</div>
        <div className="nav-bar-dropdown">Portfolio</div>
        <div className="nav-bar-button">Socials</div>
        <div className="nav-bar-button">FAQ</div>
      </div>
      <div className="nav-cta">
        <div className="nav-cta-btn">Contact</div>
      </div>
    </div>
  )
}
