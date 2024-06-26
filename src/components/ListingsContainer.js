import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings, onHandleDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            listings={listings}
            onHandleDelete={onHandleDelete}
          />
        ))}
      </ul>
    </main>
  )
}

export default ListingsContainer
