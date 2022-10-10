import React from "react"
import HFYD from "../assets/music/HuntingForYourDream_v3.mp3"

export const MusicPlayer = () => {
  return (
    <div className="musicplayer-wrapper">
      <div className="musicplayer-nav"></div>
      <div className="musicplayer-content">
        <div className="musicplayer-songs"></div>
        <div className="musicplayer-controller">
          <div className="musicplayer-buttons">
            <audio>
              <source src={HFYD} type="audio/mp3" />
            </audio>
          </div>
          <div className="musicplayer-timeline"></div>
        </div>
      </div>
    </div>
  )
}
