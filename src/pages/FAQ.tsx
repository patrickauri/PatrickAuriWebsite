import React from "react"

export const FAQ = () => {
  return (
    <div className="content-wrapper">
      <div className="title">FAQ</div>
      <details className="faq-wrapper">
        <summary>What languages do you speak?</summary>
        <p className="faq-answer">
          I speak English, Norwegian and Japanese fluently. Being Norwegian, I
          can also understand Swedish and Danish without having to think too
          much. I've studied Russian, Chinese, Korean, German, and many more
          languages, but I don't speak any of them at a high level yet.
        </p>
      </details>
    </div>
  )
}
