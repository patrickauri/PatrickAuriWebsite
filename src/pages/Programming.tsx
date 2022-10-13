import React, { useEffect, useState } from "react"

export const Programming = () => {
  const [gitData, setGitData] = useState<any>([])

  const gitDataImages = [
    { name: "japanesepitchaccent", img: "../assets/img/jpa.png" },
  ]

  const getGitHubData = async () => {
    const response = await fetch(
      "https://api.github.com/users/patrickauri/repos"
    )
      .then((res) => res.json())
      .then((d) => {
        if (gitData) {
          setGitData(d)
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
      <div className="code-card">
        <div className="card-img"></div>
        <div className="card-description">
          <p>{data.name}</p>
          <p>{data.html_url}</p>
          <p>{data.updated_at}</p>
          <p>{data.homepage}</p>
          <p>{data.language}</p>
          <p>{data.topics}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="content-wrapper">
      <div className="title">Programming</div>
      <div className="code-wrapper">
        {gitData.map((d: any) => (
          <CodeCard data={d} />
        ))}
      </div>
    </div>
  )
}
