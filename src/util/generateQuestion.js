import { championData, getRandomChampion } from "./index"
import reactStringReplace from "react-string-replace"

const sortChamp = async (name) => {
  let champs = await championData()
  champs = Object.values(champs)
  const min = Math.ceil(0)
  const max = Math.floor(champs.length - 1)
  const rndNum = Math.floor(Math.random() * (max - min) + min)
  const champion = champs[rndNum]
  if (champion.name === name) sortChamp(name)
  return champion.name
}

const fillOptions = async (temp, name) => {
  for (let i = 0; i < 3; i++) {
    temp = [...temp, await sortChamp(name)]
  }
  return temp
}

const blurbQuestion = async () => {
  let data = await getRandomChampion()
  data = Object.values(data)
  let tempBlurb = data[0].blurb
  tempBlurb = reactStringReplace(
    tempBlurb,
    `${data[0].name}`,
    (match) => "________"
  )
  let question = {
    question: tempBlurb,
    questionType: 2,
    correctAns: data[0].name,
    opts: [data[0].name],
    enunciate: "Fill the Blurb:",
  }
  let temp = await fillOptions(question.opts, data[0].name)
  question = { ...question, opts: temp }

  return question
}

const skillQuestion = async () => {
  let data = await getRandomChampion()
  data = Object.values(data)
  let skills = data[0].spells
  const min = Math.ceil(0)
  const max = Math.floor(skills.length - 1)
  const rndNum = Math.floor(Math.random() * (max - min) + min)
  const skill = skills[rndNum]
  let question = {
    question: skill.name,
    questionType: 3,
    correctAns: data[0].name,
    opts: [data[0].name],
    enunciate: "Wich Champion Belongs the Skill:",
  }
  let temp = await fillOptions(question.opts, data[0].name)
  question = { ...question, opts: temp }
  return question
}

const createTitleQst = async () => {
  let data = await getRandomChampion()
  data = Object.values(data)
  let question = {
    question: data[0].title,
    questionType: 1,
    correctAns: data[0].name,
    opts: [data[0].name],
    enunciate: "Wich Champion Belongs the Title:",
  }
  let temp = await fillOptions(question.opts, data[0].name)
  question = { ...question, opts: temp }

  return question
}

const questionTypes = [
  { id: 1, type: "Title Question" },
  { id: 2, type: "Fill the Blurb" },
  { id: 3, type: "Skill Question" },
]

const sortType = () => {
  const min = Math.ceil(0)
  const max = Math.floor(questionTypes.length)
  const rndNum = Math.floor(Math.random() * (max - min) + min)
  const question = questionTypes[rndNum]
  return question
}

export const createQstData = async () => {
  const selectedType = sortType()
  let tempQuest
  switch (selectedType.id) {
    case 1:
      tempQuest = createTitleQst()
      break
    case 2:
      tempQuest = blurbQuestion()
      break
    case 3:
      tempQuest = skillQuestion()
      break
    default:
      break
  }
  return tempQuest
}
