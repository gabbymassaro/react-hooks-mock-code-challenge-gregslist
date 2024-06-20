import React, { useState } from "react"

function ListingCard({
  id,
  description,
  image,
  location,
  listings,
  setListings,
  onDeleteItem,
}) {
  const [starState, setStarState] = useState(false)

  function handleStarClick() {
    setStarState((starState) => !starState)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeleteItem(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {starState === true ? (
          <button
            className="emoji-button favorite active"
            onClick={handleStarClick}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStarClick}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  )
}

export default ListingCard
