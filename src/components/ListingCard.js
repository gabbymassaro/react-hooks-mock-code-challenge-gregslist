import React from "react"
import Favorite from "./Favorite"
import Delete from "./Delete"

function ListingCard({
  listing: { id, description, image, location },
  onDelete,
}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <Favorite />
        <strong>{description}</strong>
        <span> · {location}</span>
        <Delete id={id} onDelete={onDelete} />
      </div>
    </li>
  )
}

export default ListingCard
