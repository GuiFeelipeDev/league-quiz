import React from "react"
import Header from "../../components/header"
import { titles } from "./data"
import SearchBar from "../../components/searchBar"
import Card from "../../components/card"
import Footer from "../../components/footer"
import { championData } from "../../util"
const Index = () => {
  const [champData, setChampData] = React.useState([])

  const getChampion = async () => {
    const champs = await championData()
    setChampData(Object.values(champs))
  }

  React.useEffect(() => {
    getChampion()
  }, [])

  return (
    <>
      <Header />
      <section className="champions-section">
        <div className="champions-main">
          <h1>{titles.main}</h1>
          <SearchBar />
          <select className="select-main" placeholder="Filter by class">
            <option value="0">Filter by class</option>
          </select>
          <div className="card-section">
            {champData?.map((champ, index) => {
              return (
                <Card
                  key={index}
                  id={champ.id}
                  name={champ.name}
                  tags={champ.tags}
                />
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Index
