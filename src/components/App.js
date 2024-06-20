import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [unsortedListings, setUnsortedListings] = useState([])
  const [isSorted, setIsSorted] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  function handleSortByLocation() {
    if (isSorted) {
      setListings(unsortedListings)
    } else {
      const alphabeticalLocation = [...listings].sort((a, b) =>
        a.location.localeCompare(b.location)
      )
      setListings(alphabeticalLocation)
    }
    setIsSorted(!isSorted)
  }

  const handleSearchValueChange = (newSearchValue) => {
    setSearchValue(newSearchValue)
  }

  function handleDeleteItem(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
    setUnsortedListings(updatedListings)
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data)
        setUnsortedListings(data)
      })
  }, [])

  return (
    <div className="app">
      <Header
        onSearchValueChange={handleSearchValueChange}
        sortByLocation={handleSortByLocation}
      />
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
