import React, { useEffect, useState } from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ allToys }) {
  return (
    <div id="toy-collection">
      {allToys.map((toy) => {
        return <ToyCard key={toy.id} toy={toy} />
      })}
    </div>
  )
}

export default ToyContainer
