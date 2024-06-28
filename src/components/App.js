import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  const filterListings = listings.filter((listing) => {
    if (search === "") return true

    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  const sortAndFilterListings = filterListings.slice().sort((a, b) => {
    if (sort === "asc") {
      return a.location.localeCompare(b.location)
    } else if (sort === "desc") {
      return b.location.localeCompare(a.location)
    } else {
      return 0
    }
  })

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
  }, [fetchTrigger])

  return (
    <div className="app">
      <Header setSearch={setSearch} setSort={setSort} />
      <ListingsContainer
        listings={sortAndFilterListings}
        onDelete={toggleFetchTrigger}
      />
    </div>
  )
}

export default App
