import { useState, useEffect } from 'react'
import './appStyle.css'

const GET_CAT_FACT = 'https://catfact.ninja/fact'
// const GET_CAT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&json=true`

const App2 = () => {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(GET_CAT_FACT)
      .then(res => res.json())
      .then((data) => {
        const { fact } = data
        setData(fact)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  console.log(data)
  return (
    <main>
      <h1>Cat Api Proyect</h1>
      <img src='' alt='' />
      <p>paragraph</p>
    </main>
  )
}

export default App2
