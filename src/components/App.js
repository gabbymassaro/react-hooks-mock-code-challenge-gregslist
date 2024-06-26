import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
  }, [])

  function handleDelete(id) {
    const remainingListings = listings.filter((listing) => listing.id !== id)
    setListings(remainingListings)
  }

  const filterListings = listings.filter((listing) => {
    const listingDescription = listing.description.toLowerCase()

    return listingDescription.startsWith(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer
        listings={filterListings}
        onHandleDelete={handleDelete}
      />
    </div>
  )
}

export default App
