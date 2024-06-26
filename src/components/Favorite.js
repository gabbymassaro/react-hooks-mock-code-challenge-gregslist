import React, { useState } from "react"

function Favorite() {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavorite() {
    setIsFavorite((isFavorite) => !isFavorite)
  }
  return (
    <>
      {isFavorite ? (
        <button
          className="emoji-button favorite active"
          onClick={handleFavorite}
        >
          ★
        </button>
      ) : (
        <button className="emoji-button favorite" onClick={handleFavorite}>
          ☆
        </button>
      )}
    </>
  )
}

export default Favorite
