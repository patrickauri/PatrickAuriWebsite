import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"

export const Programming = () => {
  const [gitData, setGitData] = useState<any>([])

  const gitDataImages = [
    { name: "japanesepitchaccent", img: "../assets/img/jpa.png" },
  ]

  const getGitHubData = async () => {
    const ignore = [
      "N3Bot2021",
      "SubJapanBot",
      "shiritori-challenge",
      "wordle-norsk",
      "miraipodcastweb",
    ]
    const response = await fetch(
      "https://api.github.com/users/patrickauri/repos"
    )
      .then((res) => res.json())
      .then((d) => {
        const filteredResults = d.filter((v: any) => {
          return !ignore.includes(v.name)
        })
        setGitData(filteredResults)
        if (gitData) {
        }
      })
  }

  useEffect(() => {
    getGitHubData()
  }, [])

  type CodeCardProps = {
    data: any
  }

  const CodeCard = ({ data }: CodeCardProps) => {
    return (
      <div className={`code-card card-${data.language}`}>
        <div className="card-description">
          <div className="card-top">
            <p className="card-title">{data.name}</p>
            <p className="card-language">{data.language}</p>
          </div>
          <p className="card-description">{data.description}</p>
          <div
            className="card-buttons-wrapper"
            style={data.homepage ? { gridTemplateColumns: "50% 50%" } : {}}
          >
            <a className="card-button" href={data.html_url} target="_blank">
              <FontAwesomeIcon icon={faCode} />
              <span style={{ marginLeft: "0.5em" }}>See Code</span>
            </a>
            {data.homepage ? (
              <a className="card-button" href={data.homepage} target="_blank">
                <FontAwesomeIcon icon={faDesktop} />
                <span style={{ marginLeft: "0.5em" }}>Try</span>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="content-wrapper">
      <div className="title">Programming</div>
      <div className="code-wrapper">
        {gitData.map((d: any, i: number) => (
          <CodeCard key={i} data={d} />
        ))}
      </div>
    </div>
  )
}
