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

  function onItemFormSubmit(listing) {
    fetch("http://localhost:6001/listings", {
      method: "POST",
      body: JSON.stringify(listing),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then((data) => {
        setListings([data, ...listings])
      })
  }

  return (
    <div className="app">
      <Header
        onSearchValueChange={handleSearchValueChange}
        sortByLocation={handleSortByLocation}
        onItemFormSubmit={onItemFormSubmit}
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
