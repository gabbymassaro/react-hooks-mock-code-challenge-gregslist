import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  const filterListings = listings.filter((listing) => {
    if (search === "") return true

    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
  }, [fetchTrigger])

  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <ListingsContainer
        listings={filterListings}
        onDelete={toggleFetchTrigger}
      />
    </div>
  )
}

export default App
