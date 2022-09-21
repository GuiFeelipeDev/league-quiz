import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { routesData } from "./data"
import Home from "../pages/home"
import About from "../pages/about"
import Champions from "../pages/champions"
import Quiz from "../pages/quiz"

const index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={routesData.home} element={<Home />}></Route>
          <Route path={routesData.about} element={<About />}></Route>
          <Route path={routesData.champions} element={<Champions />}></Route>
          <Route path={routesData.quiz} element={<Quiz />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default index
