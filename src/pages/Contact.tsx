import React from "react"

export const Contact = () => {
  const HandleContact = (e: any) => {
    e.preventDefault()
    let name = e.target[0].value
    let email = e.target[1].value
    let message = e.target[2].value
    let servicesChosen: Array<boolean> = []
    let services: Array<string> = [
      "Design",
      "Video Editing",
      "Music",
      "Programming",
      "Translation",
      "Voice Acting",
      "Question",
    ]
    servicesChosen.push(e.target[3].checked)
    servicesChosen.push(e.target[4].checked)
    servicesChosen.push(e.target[5].checked)
    servicesChosen.push(e.target[6].checked)
    servicesChosen.push(e.target[7].checked)
    servicesChosen.push(e.target[8].checked)
    servicesChosen.push(e.target[9].checked)

    let servicesDisplay = ""

    services.forEach((e, i) => {
      if (servicesChosen[i]) servicesDisplay = servicesDisplay.concat(`${e} `)
    })
    if (servicesDisplay !== "") servicesDisplay = servicesDisplay.slice(0, -1)

    let subject: string = `PatrickAuri.com Contact Form (${servicesDisplay})`
    //let body: string = `Message from: ${name} (${email})%0D%0A%0D%0A ${message}%0D%0A%0D%0A ${services}`
    let body: string = `${message}%0D%0A%0D%0A  %0D%0A%0D%0A${name}%0D%0A${email}`
    let url: string = `mailto:patrickauri@nthree.io?subject=${subject}&body=${body}`
    window.open(url, "_blank")
  }

  return (
    <div className="content-wrapper">
      <div className="title">Contact</div>
      <form className="contact-form" onSubmit={HandleContact}>
        <label className="input-item input-label">Name</label>
        <input
          className="input-item input-box"
          type="text"
          placeholder="Name"
          required
        />
        <label className="input-item input-label">Email</label>
        <input
          className="input-item input-box"
          type="email"
          placeholder="Email"
          required
        />
        <label className="input-item input-label">Message</label>
        <textarea
          className="input-item input-label"
          placeholder="Message"
          required
        />
        <label className="input-item input-label">Services</label>
        <div className="checkbox-wrapper">
          <div className="checkbox-item">
            <input className="input-item " type="checkbox" />
            Design
          </div>
          <div className="checkbox-item">
            <input className="input-item " type="checkbox" />
            Video Editing
          </div>
          <div className="checkbox-item">
            <input className="input-item " type="checkbox" />
            Music
          </div>
          <div className="checkbox-item">
            <input className="input-item " type="checkbox" />
            Programming
          </div>
          <div className="checkbox-item">
            <input className="input-item " type="checkbox" />
            Translation
          </div>
          <div className="checkbox-item">
            <input className="input-item " type="checkbox" />
            Voice Acting
          </div>
          <div className="checkbox-item">
            <input className="input-item " type="checkbox" />
            Question
          </div>
        </div>
        <input className="input-button" type="submit" value="Send" />
      </form>
    </div>
  )
}
