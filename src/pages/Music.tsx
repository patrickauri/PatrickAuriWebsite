import React from "react"
import { MusicPlayer } from "../components/MusicPlayer"

export const Music = () => {
  return (
    <div className="content-wrapper">
      <div className="title">Music</div>
      <div className="music-grid">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/1kKvsUiA6KakfIWKlreebu?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
