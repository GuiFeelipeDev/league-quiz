import React from "react"

const Index = ({ name, id, tags }) => {
  return (
    <>
      <section className="card-main">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
          alt="Akali"
        />
        <h2>{name}</h2>
        <div className="classes">
          {tags.map((tag, index) => {
            let space = ""
            if (index === 0 && tags.length > 1) space = "/"
            return <p key={index}>{tag + space}</p>
          })}
        </div>
        <div className="card-style"></div>
      </section>
    </>
  )
}

export default Index
