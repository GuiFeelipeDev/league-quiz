import api from "../services/api"
import axios from "axios"

const getVersion = async () => {
  const response = await axios.get(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  )
  const version = await response.data[0]
  return version
}

export const championData = async () => {
  const version = await getVersion()
  const response = await api.get(`${version}/data/en_US/champion.json`)
  const data = await response.data.data
  return data
}

export const getRandomChampion = async () => {
  try {
    const data = await championData()
    const champs = Object.keys(data)

    const min = Math.ceil(0)
    const max = Math.floor(champs.length - 1)
    const rndNum = Math.floor(Math.random() * (max - min) + min)
    const champSelected = champs[rndNum]

    const response = await api.get(
      `12.15.1/data/en_US/champion/${champSelected}.json`
    )
    const champData = await response.data.data
    return champData
  } catch (error) {
    console.log(error)
  }
}
