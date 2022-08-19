import React from "react"
import { getRandomChampion } from "../../util"
import Header from "../../components/header/"
import Slider from "../../components/Slider"
import { titles } from "./data"
import Footer from "../../components/footer"

const Index = () => {
  const [champ, setChamp] = React.useState("")
  const [champData, setChampData] = React.useState("")
  const [skinsQnt, setSkinsQnt] = React.useState([])
  const [spells, setSpells] = React.useState([])
  const [activeSpell, setActiveSpell] = React.useState({ title: "", desc: "" })
  const [active, setActive] = React.useState([
    { skill: "P", skillClass: "skill-active", skillTxt: "skill-p" },
    { skill: "Q", skillClass: "", skillTxt: "" },
    { skill: "W", skillClass: "", skillTxt: "" },
    { skill: "E", skillClass: "", skillTxt: "" },
    { skill: "R", skillClass: "", skillTxt: "" },
  ])
  const getChampion = async () => {
    const champs = await getRandomChampion()
    setChampData(champs)
    setChamp(Object.keys(champs))
  }
  const setSpell = (title, desc) => {
    let newDesc = desc?.split("")
    for (let i = 0; i < newDesc?.length; i++) {
      if (newDesc[i] === "<") {
        let c = i
        do {
          newDesc[c] = ""
          c++
        } while (newDesc[c] !== ">")
        newDesc[c] = ""
      }
    }
    newDesc = newDesc?.join("")

    setActiveSpell({ title: title, desc: newDesc })
  }

  React.useEffect(() => {
    getChampion()
  }, [])

  React.useEffect(() => {
    setChamp(champ)
    setChampData(champData)
    setSkinsQnt(champData[champ]?.skins)
    setSpells(champData[champ]?.spells)
    setSpell(
      champData[champ]?.passive.name,
      champData[champ]?.passive.description
    )
    const orgAbilities = () => {
      setSpells([champData[champ]?.passive, ...champData[champ]?.spells])
    }
    if (champData) orgAbilities()
  }, [champ, setChamp, champData, setChampData])
  return (
    <>
      <section className="home-main">
        <Header />
        {champ && (
          <div
            className="banner-image"
            style={{
              backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ[0]}_0.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="banner-image"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>
            <div className="banner-info">
              <h1 className="banner-name">{champData[champ].name}</h1>
              <h3 className="banner-title">{`"${champData[champ].title}"`}</h3>
              <p className="banner-blurb">{`"${champData[champ].blurb}"`}</p>
            </div>
          </div>
        )}
        <div className="bottom-tri">
          <div className="arrow-up"></div>
        </div>
      </section>
      <section className="slider-main">
        {skinsQnt && (
          <Slider
            db={skinsQnt}
            slTitle={"Skins"}
            argColor={"#db4545"}
            champ={champ[0]}
          />
        )}
      </section>
      <section className="lore-section">
        <div className="lore-background"></div>
        <div className="lore-style">
          <div className="lore-main">
            <h1 className="lore-title">{titles.lore}</h1>
            {champ && (
              <p className="lore-paragraph">{`"${champData[champ].lore}"`}</p>
            )}
            <button
              className="header-button"
              onClick={() =>
                window.open(
                  `https://universe.leagueoflegends.com/en_US/story/champion/${champ}/`
                )
              }
            >
              {titles.loreButton}
            </button>
          </div>
        </div>
      </section>
      <section style={{ width: "100%", height: "100vh" }}></section>
      <section className="abilities-section">
        <h1 className="abilities-title ">{titles.abilities}</h1>
        <div className="abilities-container">
          <div className="skills-icons">
            {spells?.map((spell, index) => {
              const activeBtn = (index) => {
                let holder = [
                  {
                    skill: "P",
                    skillClass: "",
                    skillTxt: "",
                  },
                  { skill: "Q", skillClass: "", skillTxt: "" },
                  { skill: "W", skillClass: "", skillTxt: "" },
                  { skill: "E", skillClass: "", skillTxt: "" },
                  { skill: "R", skillClass: "", skillTxt: "" },
                ]
                holder[index].skillClass = "skill-active"
                holder[index].skillTxt = "skill-p"
                setActive(holder)
              }
              return (
                <div key={index} className="icon-div">
                  <p className={active[index].skillTxt}>
                    {active[index].skill}
                  </p>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/${spell["image"].group}/${spell["image"].full}`}
                    alt={spell.id}
                    className={active[index].skillClass}
                    onClick={() => {
                      setSpell(spell.name, spell.description)
                      activeBtn(index)
                    }}
                  />
                </div>
              )
            })}
          </div>
          <div className="desc-box">
            <div className="desc-content">
              <h2>{activeSpell.title}</h2>
              <p>{`"${activeSpell.desc}"`}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Index
