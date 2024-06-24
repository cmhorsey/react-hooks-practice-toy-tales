import React, { useState } from "react"

function ToyForm({ allToys, setAllToys }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleAddToy(newToy) {
    setAllToys([...allToys, newToy])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const toyData = {
      name: formData.name,
      image: formData.image,
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((newToy) => handleAddToy(newToy))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )
}

export default ToyForm
