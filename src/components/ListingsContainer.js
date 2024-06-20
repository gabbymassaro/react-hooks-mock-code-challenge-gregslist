import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({
  listings,
  setListings,
  onHandleDelete,
  searchValue,
}) {
  const searchToDisplay = listings.filter((item) => {
    if (searchValue === "") return true

    return item.description.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <main>
      <ul className="cards">
        {searchToDisplay.map((item) => (
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
