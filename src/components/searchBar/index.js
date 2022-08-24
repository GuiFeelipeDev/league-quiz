import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

const Index = () => {
  return (
    <>
      <section className="search-base">
        <form action="">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <AiOutlineSearch />
          </button>
        </form>
      </section>
    </>
  )
}

export default Index
