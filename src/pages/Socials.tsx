import React from "react"
import IconTwitch from "../assets/graphics/icon-twitch.svg"
import IconTikTok from "../assets/graphics/icon-tiktok.svg"
import IconYouTube from "../assets/graphics/icon-youtube.svg"
import IconTwitter from "../assets/graphics/icon-twitter.svg"
import IconInstagram from "../assets/graphics/icon-instagram.svg"

export const Socials = () => {
  return (
    <div className="content-wrapper">
      <div className="title">Socials</div>
      <div className="social-icons-wrapper">
        <a
          href="https://youtube.com/patrickauri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icons-item">
            <img src={IconYouTube} alt="YouTube Icon" />
          </div>
        </a>
        <a
          href="https://tiktok.com/@patrickauri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icons-item">
            <img src={IconTikTok} alt="TikTok Icon" />
          </div>
        </a>
        <a
          href="https://twitch.tv/patrickauri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icons-item">
            <img src={IconTwitch} alt="Twitch Icon" />
          </div>
        </a>
        <a
          href="https://twitter.com/patrickauri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icons-item">
            <img src={IconTwitter} alt="Twitter Icon" />
          </div>
        </a>
        <a
          href="https://instagram.com/patrickauri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icons-item">
            <img src={IconInstagram} alt="Instagram Icon" />
          </div>
        </a>
      </div>
    </div>
  )
}
