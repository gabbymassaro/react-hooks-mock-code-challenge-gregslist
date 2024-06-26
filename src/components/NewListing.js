import React, { useRef } from "react"

function NewListing({ showForm, onItemFormSubmit }) {
  const descriptionRef = useRef()
  const locationRef = useRef()
  const priceRef = useRef()

  function getFormValues(event) {
    event.preventDefault()
    const newListing = {
      description: descriptionRef.current.value,
      location: locationRef.current.value,
      price: priceRef.current.value,
    }
    onItemFormSubmit(newListing)
  }
  return (
    <>
      {showForm && (
        <div className="new-listing-form">
          <form onSubmit={getFormValues}>
            <label htmlFor="description">Description</label>
            <br />
            <input
              type="text"
              id="description"
              name="description"
              ref={descriptionRef}
            />
            <br />
            <label htmlFor="location ">Location</label>
            <br />
            <input
              type="text"
              id="location"
              name="location"
              ref={locationRef}
            />
            <br />
            <label htmlFor="price ">Price</label>
            <br />
            <input type="text" id="price" name="price" ref={priceRef} />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  )
}

export default NewListing
