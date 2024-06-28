import React, { useState } from "react"

function Favorite() {
  const [favorite, setFavorite] = useState(false)

  function handleClick(event) {
    setFavorite(!favorite)
  }
  return (
    <>
      {favorite ? (
        <button className="emoji-button favorite active" onClick={handleClick}>
          ★
        </button>
      ) : (
        <button className="emoji-button favorite" onClick={handleClick}>
          ☆
        </button>
      )}
    </>
  )
}

export default Favorite
