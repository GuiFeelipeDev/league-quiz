import React from "react"
import { titles, navOpts } from "./data"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
        <section className="header-main">
          <article className="header-content">
            <div>
              <h1
                className="site-logo"
                onClick={() => navigate(navOpts[0].link)}
              >
                {titles.main}
              </h1>
            </div>
            <div className="header-half header-opts">
              {navOpts.map((option, index) => {
                return (
                  <button
                    key={index}
                    className="nav-opt"
                    onClick={() => navigate(option.link)}
                  >
                    {option.title}
                  </button>
                )
              })}
              <button
                className="header-button"
                onClick={() => navigate("/quiz")}
              >
                {titles.button}
              </button>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}

export default Index
