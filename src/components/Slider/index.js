import React from "react"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const Index = ({ db, argColor, slTitle, champ }) => {
  const defaultColor = `${argColor}`
  const data = db
  const [pos, setPos] = React.useState(0)

  const nxtSlide = () => {
    const lastPos = data.length - 2
    setPos(pos + 1)
    if (pos > lastPos) {
      setPos(0)
    }
  }

  const prvSlide = () => {
    const lastPos = data.length - 1
    setPos(pos - 1)
    if (pos < 1) {
      setPos(lastPos)
    }
  }

  return (
    <>
      <section className="style-base">
        <MdArrowBackIos
          style={{
            fill: `${defaultColor}`,
            fontSize: "46px",
            width: "auto",
            cursor: "pointer",
            marginRight: "50px",
          }}
          onClick={() => prvSlide()}
        />
        <article className="center">
          <h1 style={{ color: `${defaultColor}`, fontSize: "46px" }}>
            {slTitle}
          </h1>
          <div className="center-image">
            {data.map((item, index) => {
              const { num, name } = item
              let position = "default-slide"

              if (pos === index) {
                position = "active-slide"
              }
              if (
                index === pos - 1 ||
                (pos === 0 && index === data.length - 1)
              ) {
                position = "prev-slide"
              }
              if (
                index === pos + 1 ||
                (pos === data.length - 1 && index === 0)
              ) {
                position = "next-slide"
              }
              return (
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${num}.jpg`}
                  alt={name}
                  className={position}
                  key={index}
                />
              )
            })}
          </div>
          <h1
            style={{
              color: "#000",
              fontSize: "32px",
              textTransform: "capitalize",
            }}
          >
            {data[pos]?.name}
          </h1>
        </article>
        <MdArrowForwardIos
          style={{
            fill: `${defaultColor}`,
            fontSize: "46px",
            width: "auto",
            cursor: "pointer",
            marginLeft: "50px",
          }}
          onClick={() => nxtSlide()}
        />
      </section>
    </>
  )
}

export default Index
