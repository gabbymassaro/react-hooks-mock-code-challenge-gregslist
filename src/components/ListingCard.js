import React, { useState } from "react"

function ListingCard({ description, image, location }) {
  const [starState, setStarState] = useState(false)

  function handleStarClick() {
    setStarState((starState) => !starState)
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  )
}

export default ListingCard
