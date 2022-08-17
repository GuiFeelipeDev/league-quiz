import React from "react"
import { texts } from "./data"

const Index = () => {
  return (
    <>
      <section className="footer-section">
        <div className="footer-content">
          <p>
            {texts.copy.base}
            <a href="https://github.com/GuiFeelipeDev">{texts.copy.name}</a>
          </p>
          <p>
            ®Api and Info by <a href="https://www.riotgames.com">Riot Games</a>,
            All rights reserved
          </p>
        </div>
      </section>
    </>
  )
}

export default Index
