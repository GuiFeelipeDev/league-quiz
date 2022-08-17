import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { routesData } from "./data"
import Home from "../pages/home"

const index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={routesData.home} element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default index
