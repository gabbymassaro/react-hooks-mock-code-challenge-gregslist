import React, { useState } from "react"
import Search from "./Search"

function Header({ onSearchValueChange, sortByLocation }) {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <header className="header-container">
        <h1>
          <span className="logo" role="img">
            ☮
          </span>
          gregslist
        </h1>
        <Search passSearchToHeader={onSearchValueChange} />
        <div className="button-container">
          <button onClick={sortByLocation}>Sort By Location</button>
          <button onClick={handleShowForm}>Create Listing{showForm}</button>
        </div>
      </header>
      {showForm && (
        <form className="new-listing-form">
          <label htmlFor="description">Description</label>
          <br />
          <input type="text" id="description" name="description" />
          <br />
          <label htmlFor="image">Image</label>
          <br />
          <input type="text" id="image" name="image" />
          <br />
          <label htmlFor="location">Location</label>
          <br />
          <input type="text" id="location" name="location" />
        </form>
      )}
    </>
  )
}

export default Header
