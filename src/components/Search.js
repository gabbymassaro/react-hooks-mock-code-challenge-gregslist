import React, { useState } from "react"

function Search({ passSearchToHeader }) {
  const [searchInput, setSearchInput] = useState("")

  function handleInput(e) {
    setSearchInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    passSearchToHeader(searchInput)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={handleInput}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
