import React from "react"
import Search from "./Search"

function Header({ onSearchValueChange, sortByLocation }) {
  return (
    <header className="header-container">
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search passSearchToHeader={onSearchValueChange} />
      <button onClick={sortByLocation}>Sort By Location</button>
    </header>
  )
}

export default Header
