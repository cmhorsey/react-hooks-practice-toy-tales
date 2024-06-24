import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ allToys, setAllToys }) {
  return (
    <div id="toy-collection">
      {allToys.map((toy) => {
        return (
          <ToyCard
            key={toy.id}
            toy={toy}
            allToys={allToys}
            setAllToys={setAllToys}
          />
        )
      })}
    </div>
  )
}

export default ToyContainer
