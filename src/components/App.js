import React, { useState, useEffect } from "react"

import Header from "./Header"
import ToyForm from "./ToyForm"
import ToyContainer from "./ToyContainer"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [allToys, setAllToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  const getToys = () => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then(setAllToys)
  }

  useEffect(() => {
    getToys()
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm setAllToys={setAllToys} allToys={allToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer allToys={allToys} setAllToys={setAllToys} />
    </>
  )
}

export default App
