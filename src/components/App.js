import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
  }, [])

  function handleDelete(id) {
    const remainingListings = listings.filter((listing) => listing.id !== id)
    setListings(remainingListings)
  }
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onHandleDelete={handleDelete} />
    </div>
  )
}

export default App
