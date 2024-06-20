import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])

  function handleDeleteItem(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer
        onHandleDelete={handleDeleteItem}
        listings={listings}
        setListings={setListings}
      />
    </div>
  )
}

export default App
