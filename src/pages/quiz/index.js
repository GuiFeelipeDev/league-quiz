import arrayShuffle from "array-shuffle"
import React from "react"
import { useNavigate } from "react-router-dom"
import { createQstData } from "../../util/generateQuestion"
import Modal from "../../components/incorrectsModal"
const Index = () => {
  let navigate = useNavigate()
  const [quizData, setQuizData] = React.useState()
  const [activeQuestion, setActiveQuestion] = React.useState(0)
  const [correctAnswers, setCorrectAnswers] = React.useState(0)
  const [incorrectAns, setIncorrectAns] = React.useState([])
  const [result, setResult] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)
  const getQuestion = async () => {
    let questionData = []
    for (let i = 0; i < 5; i++) {
      questionData = [...questionData, await createQstData()]
    }
    console.log(questionData)
    setQuizData(questionData)
  }
  const questionSub = (resp) => {
    if (resp === quizData[activeQuestion].correctAns) {
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setIncorrectAns([
        ...incorrectAns,
        {
          enunciate: quizData[activeQuestion].enunciate,
          question: quizData[activeQuestion].question,
          correctAns: quizData[activeQuestion].correctAns,
        },
      ])
    }
    if (activeQuestion === quizData.length - 1) {
      setResult(true)
      console.log(incorrectAns)
      return
    }
    setActiveQuestion(activeQuestion + 1)
  }
  React.useEffect(() => {
    getQuestion()
  }, [])
  return (
    <>
      {modalOpen && <Modal data={incorrectAns} setModalOpen={setModalOpen} />}
      <div className="quiz-background"></div>
      <div className="quiz-background-style">
        <div className="quiz-header">
          <div className="quiz-header-content">
            <h1 className="site-logo" onClick={() => navigate("/")}>
              League
            </h1>
            {quizData && (
              <h2>{`0${activeQuestion + 1}/0${quizData.length}`}</h2>
            )}
          </div>
        </div>
        {result ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              minHeight: "400px",
              justifyContent: "space-around",
            }}
          >
            <h1 style={{ fontSize: "60px" }}>Congratulations</h1>
            <h2>
              Your final score is: {`0${correctAnswers}/0${quizData.length}`}
            </h2>
            {incorrectAns.length > 0 && (
              <button
                className="header-button"
                onClick={() => setModalOpen(true)}
              >
                Incorrects
              </button>
            )}
            <button
              className="header-button"
              onClick={() => window.location.reload()}
            >
              Play Again
            </button>
          </div>
        ) : (
          quizData && (
            <div className="question-section">
              <div className="enunciate">
                <h2 className="question-enunciate">
                  {quizData[activeQuestion].enunciate}
                </h2>
                <p className="question-paragraph">{`"${quizData[activeQuestion].question}"`}</p>
              </div>
              <div className="alternatives">
                {arrayShuffle(quizData[activeQuestion].opts).map(
                  (item, index) => {
                    return (
                      <button
                        className="header-button"
                        style={{ width: "260px" }}
                        onClick={() => questionSub(item)}
                        key={index}
                      >
                        {item}
                      </button>
                    )
                  }
                )}
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default Index
