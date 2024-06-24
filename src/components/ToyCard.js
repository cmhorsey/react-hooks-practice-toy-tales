import React, { useState } from "react"

function ToyCard({ toy, allToys, setAllToys }) {
  const { name, id, image, likes } = toy
  const [toyLikes, setToyLikes] = useState(likes)

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(handleDelete(id))
  }

  function handleDelete(deletedToyId) {
    const updatedToys = allToys.filter((toy) => toy.id !== deletedToyId)
    setAllToys(updatedToys)
  }

  function handleLikeClick() {
    setToyLikes(toyLikes + 1)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toyLikes,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        handleUpdate(updatedToy)
      })
  }

  function handleUpdate(updatedToy) {
    const updatedToys = allToys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    )
    setAllToys(updatedToys)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={handleDeleteClick} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  )
}

export default ToyCard
