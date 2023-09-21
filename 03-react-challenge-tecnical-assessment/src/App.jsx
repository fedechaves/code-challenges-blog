import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${fristWord}?size=50&color=red&json=true`

const App = () => {
  const [fact, setFact] = useState('lorem ipsum cat')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>Esta es una app de Gatitos!</h1>
      {fact && (
        <p> {fact} </p>
      )}
    </main>
  )
}

export default App
