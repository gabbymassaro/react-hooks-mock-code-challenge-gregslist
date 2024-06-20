import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const handleSearchValueChange = (newSearchValue) => {
    setSearchValue(newSearchValue)
  }

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
      <Header onSearchValueChange={handleSearchValueChange} />
      <ListingsContainer
        onHandleDelete={handleDeleteItem}
        listings={listings}
        setListings={setListings}
        searchValue={searchValue}
      />
    </div>
  )
}

export default App
