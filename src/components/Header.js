import React from "react"
import Search from "./Search"

function Header({ onSearchValueChange }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search passSearchToHeader={onSearchValueChange} />
    </header>
  )
}

export default Header
