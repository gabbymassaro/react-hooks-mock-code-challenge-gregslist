import React from "react"

function Delete({ id, onDelete }) {
  const handleDelete = (event) => {
    event.preventDefault()
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(onDelete(id))
  }
  return (
    <button className="emoji-button delete" onClick={handleDelete}>
      🗑
    </button>
  )
}

export default Delete
