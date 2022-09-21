import React from "react"
import Header from "../../components/header"
import { titles } from "./data"
import SearchBar from "../../components/searchBar"
import Card from "../../components/card"
import Footer from "../../components/footer"
import { championData } from "../../util"
const Index = () => {
  const [champData, setChampData] = React.useState([])
  const [dataHolder, setDataHolder] = React.useState([])
  const [filterHolder, setFilterHolder] = React.useState([])
  const [allClasses, setAllClasses] = React.useState([])
  const [selectValue, setSelectValue] = React.useState("0")
  const [filterValue, setFilterValue] = React.useState("")
  const getChampion = async () => {
    const champs = await championData()
    setChampData(Object.values(champs))
    setDataHolder(Object.values(champs))
    setFilterHolder(Object.values(champs))
    getClasses()
  }

  const filterClass = (value) => {
    if (value === "0") {
      setChampData(dataHolder)
      setFilterHolder(dataHolder)
      return
    }
    let filtered = dataHolder.filter(
      (item) => item.tags[0] === value || item.tags[1] === value
    )
    setChampData(filtered)
    setFilterHolder(filtered)
  }
  const searchFilter = (value) => {
    if (value.length === 0) {
      setChampData(filterHolder)
      return
    }
    let filtered = filterHolder.filter(
      (item) => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
    setChampData(filtered)
    setFilterValue(value)
  }
  const getClasses = () => {
    let setClasses = []
    dataHolder?.forEach((element) => {
      setClasses = [...setClasses, element.tags[0]]
    })
    setAllClasses([...new Set(setClasses)])
  }
  React.useEffect(() => {
    getChampion()
  }, [])
  React.useEffect(() => {
    searchFilter(filterValue)
  }, [filterHolder])
  React.useEffect(() => {
    setChampData(champData)
    getClasses()
  }, [champData])
  return (
    <>
      <Header />
      <section className="champions-section">
        <div className="champions-main">
          <h1>{titles.main}</h1>
          <SearchBar searchFilter={searchFilter} />
          <select
            className="select-main"
            value={selectValue}
            onChange={(e) => {
              setSelectValue(e.target.value)
              filterClass(e.target.value)
            }}
          >
            <option value="0">Filter by class</option>
            {allClasses?.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            })}
          </select>
          <div className="card-section">
            {champData.length === 0 && <h2>Champion not Found...</h2>}
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
