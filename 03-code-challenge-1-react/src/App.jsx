import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try{
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, {
        method: "GET",
        header: {
          "Content-Type": "application/json"
        }
      }).then((res) => res.json())
      console.log(data)
      setData(data)
      
    }catch(err) {
      return console.error(err)
    }
  }

  return (
    <div>
      <button 
        style={{ background: "white", color: "black", height: "6rem", width: "12rem"}} 
        onClick={getData}>my app</button>
      {data && (<div>
        aca tu pokemon:
        <h1 style={{ color:"white"}}>{data.name}</h1>
      </div>)}
    </div>
  )
}

export default App
