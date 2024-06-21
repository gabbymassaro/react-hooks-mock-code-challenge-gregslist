import React, { useRef, useState } from "react"
import Search from "./Search"
import { v4 as uuid } from "uuid"

function Header({ onSearchValueChange, sortByLocation, onItemFormSubmit }) {
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const locationRef = useRef(null)

  let description
  let image
  let location

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  function getDescription(event) {
    description = event.target.value
  }

  function getImage(event) {
    image = event.target.value
  }

  function getLocation(event) {
    location = event.target.value
  }

  function getFormInput(event) {
    event.preventDefault()
    const newListing = {
      id: uuid(),
      description: description,
      image: image,
      location: location,
    }
    onItemFormSubmit(newListing)

    if (formRef.current) {
      formRef.current.reset()
    }
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
        <form
          className="new-listing-form"
          onSubmit={getFormInput}
          ref={formRef}
        >
          <label htmlFor="description">Description</label>
          <br />
          <input
            type="text"
            id="description"
            name="description"
            onChange={getDescription}
            ref={descriptionRef}
          />
          <br />
          <label htmlFor="image">Image </label>
          <br />
          <input
            type="text"
            id="image"
            name="image"
            onChange={getImage}
            ref={imageRef}
          />
          <br />
          <label htmlFor="location">Location</label>
          <br />
          <input
            type="text"
            id="location"
            name="location"
            onChange={getLocation}
            ref={locationRef}
          />
          <br />
          <input type="submit" id="submit" name="submit" value="Submit" />
        </form>
      )}
    </>
  )
}

export default Header
