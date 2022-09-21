import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

const Index = ({ searchFilter }) => {
  return (
    <>
      <section className="search-base">
        <form action="">
          <input
            onChange={(e) => {
              searchFilter(e.target.value)
            }}
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <button className="search-button" onClick={(e) => e.preventDefault()}>
            <AiOutlineSearch />
          </button>
        </form>
      </section>
    </>
  )
}

export default Index
