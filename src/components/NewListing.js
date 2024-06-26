import React from "react"

function NewListing({ showForm }) {
  return (
    <>
      {showForm && (
        <div className="new-listing-form">
          <form></form>
          <label htmlFor="description">Description</label>
          <br />
          <input type="text" id="description" name="description" />
          <br />
          <label htmlFor="location ">Location</label>
          <br />
          <input type="text" id="location" name="location" />
          <br />
          <label htmlFor="price ">Price</label>
          <br />
          <input type="text" id="price" name="price" />
        </div>
      )}
    </>
  )
}

export default NewListing
