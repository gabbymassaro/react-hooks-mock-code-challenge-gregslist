import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((item) => (
          <ListingCard
            key={item.id}
            description={item.description}
            image={item.image}
            location={item.location}
          />
        ))}
      </ul>
    </main>
  )
}

export default ListingsContainer
