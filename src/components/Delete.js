import React from "react"

function Delete({ id, deleteListing }) {
  function fetchDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => deleteListing(id))
  }
  return (
    <button className="emoji-button delete" onClick={fetchDelete}>
      🗑
    </button>
  )
}

export default Delete
