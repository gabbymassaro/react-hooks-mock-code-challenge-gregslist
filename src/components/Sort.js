import React from "react"

function Sort({ setSort }) {
  function handleSort(event) {
    setSort(event.target.value)
  }
  return (
    <>
      <strong> Sort By Location</strong>
      <form>
        <select onChange={handleSort}>
          <option value=""></option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </form>
    </>
  )
}

export default Sort
