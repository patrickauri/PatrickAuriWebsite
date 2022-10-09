import React from "react"
import Patrick from "../assets/photos/Patrick.png"
import IconCode from "../assets/graphics/icon-code.svg"
import IconDesign from "../assets/graphics/icon-design.svg"
import IconMusic from "../assets/graphics/icon-music.svg"
import IconTranslation from "../assets/graphics/icon-translation.svg"
import IconVideo from "../assets/graphics/icon-video.svg"
import IconVoice from "../assets/graphics/icon-voice.svg"

export const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="title">Patrick Auri</div>
      <img src={Patrick} className="pato-logo" alt="Patrick" />
      <div className="icons-grid">
        <div className="icons-grid-item">
          <img src={IconVideo} alt="Video Editing Icon" />
        </div>
        <div className="icons-grid-item">
          <img src={IconDesign} alt="Design Icon" />
        </div>
        <div className="icons-grid-item">
          <img src={IconTranslation} alt="Translation Icon" />
        </div>
        <div className="icons-grid-item">
          <img src={IconCode} alt="Programming Icon" />
        </div>
        <div className="icons-grid-item">
          <img src={IconVoice} alt="Microphone Icon" />
        </div>
        <div className="icons-grid-item">
          <img src={IconMusic} alt="Music Icon" />
        </div>
      </div>
    </div>
  )
}
