import React, { useEffect, useState } from "react"

export const Programming = () => {
  const [gitData, setGitData] = useState<any>([])

  const gitDataImages = [
    { name: "japanesepitchaccent", img: "../assets/img/jpa.png" },
  ]

  const getGitHubData = async () => {
    const ignore = ["N3Bot2021", "SubJapanBot"]
    const response = await fetch(
      "https://api.github.com/users/patrickauri/repos"
    )
      .then((res) => res.json())
      .then((d) => {
        const filteredResults = d.filter((v: any) => {
          console.log(v.name)
          console.log(ignore.includes(v.name))
          return !ignore.includes(v.name)
        })
        //console.log(d)
        //console.log(filteredResults)

        // d.filter((v: any) => {
        //   let f = false
        //   ignore.forEach((item: string) => {
        //     if (item === v) {
        //       f = true
        //     }
        //   })
        //   return f
        // })
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
          <p className="card-title">{data.name}</p>
          <p className="card-language">{data.language}</p>
          <p className="card-language">{data.description}</p>
          <p className="card-updated">{data.updated_at}</p>
          <p className="card-topics">{data.topics}</p>
          <div
            className="card-buttons-wrapper"
            style={data.homepage ? { gridTemplateColumns: "50% 50%" } : {}}
          >
            <a className="card-button" href={data.html_url} target="_blank">
              See Code
            </a>
            {data.homepage ? (
              <a className="card-button" href={data.homepage} target="_blank">
                Try
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
