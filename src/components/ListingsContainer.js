import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings, setListings, onHandleDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((item) => (
          <ListingCard
            key={item.id}
            id={item.id}
            description={item.description}
            image={item.image}
            location={item.location}
            listings={listings}
            setListings={setListings}
            onDeleteItem={onHandleDelete}
          />
        ))}
      </ul>
    </main>
  )
}

export default ListingsContainer
