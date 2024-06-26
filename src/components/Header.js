import React, { useState } from "react"
import Search from "./Search"
import Sort from "./Sort"
import NewListing from "./NewListing"

function Header({ setSearch, setSort }) {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }
  return (
    <>
      <header>
        <h1>
          <span className="logo" role="img">
            ☮
          </span>
          gregslist
        </h1>
        <Search setSearch={setSearch} />
        <Sort setSort={setSort} />
        <button onClick={handleShowForm}>Add New Listing</button>
      </header>
      <NewListing showForm={showForm} setShowForm={setShowForm} />
    </>
  )
}

export default Header
