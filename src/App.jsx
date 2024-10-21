import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {

  let [ watches,setWatches ] = useState([])

useEffect( () => {
  fetch('watches.json')
  .then( res => res.json() )
  .then( data => setWatches(data) )
} , [] )

  // const watches = [
  //   { id: 1, name: "Omega Speedmaster", price: 4500 },
  //   { id: 2, name: "Rolex Submariner", price: 8000 },
  //   { id: 3, name: "Tag Heuer Carrera", price: 3500 },
  //   { id: 4, name: "Breitling Navitimer", price: 5200 },
  //   { id: 5, name: "Patek Philippe Nautilus", price: 30000 }
  // ];

  return (
    <>
      <h1>Vite + React</h1>
     { watches.map( watch => <Watch key={watch.id} watch={watch} ></Watch> ) }
    </>
  )
}

export default App
