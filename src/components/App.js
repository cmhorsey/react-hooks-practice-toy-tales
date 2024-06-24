import React, { useState, useEffect } from "react"

import Header from "./Header"
import ToyForm from "./ToyForm"
import ToyContainer from "./ToyContainer"

function App() {
  const [showForm, setShowForm] = useState(false)

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  const [allToys, setAllToys] = useState([])
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
      <ToyContainer allToys={allToys} />
    </>
  )
}

export default App
