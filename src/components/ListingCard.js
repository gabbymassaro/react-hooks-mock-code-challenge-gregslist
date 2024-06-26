import React from "react"
import Favorite from "./Favorite"
import Delete from "./Delete"

function ListingCard({
  listing: { id, image, description, location },
  onHandleDelete,
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
        <Delete id={id} deleteListing={onHandleDelete} />
      </div>
    </li>
  )
}

export default ListingCard
