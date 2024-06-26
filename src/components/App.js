import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

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

  const sortedAndFilteredListings = sort
    ? filterListings.sort((a, b) => {
        return a[sort].localeCompare(b[sort])
      })
    : filterListings

  const handleAddListing = (newListing) => {
    setListings([...listings, newListing])
  }

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
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        onAddListing={handleAddListing}
        onItemFormSubmit={onItemFormSubmit}
      />
      <ListingsContainer
        listings={sortedAndFilteredListings}
        onHandleDelete={handleDelete}
      />
    </div>
  )
}

export default App
