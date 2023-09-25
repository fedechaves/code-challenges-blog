import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const App = () => {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    getRandomFact()
      .then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => {
        const { url } = data
        setImage(url)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', placeItems: 'center', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1>Esta es una app de Gatitos!</h1>
      <button onClick={handleClick} style={{ margin: '20px auto' }}>Nuevo fact!</button>
      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        {fact && <p> {fact} </p>}
        {image && <img style={{ maxWidth: '320px', height: 'auto' }} src={`${CAT_PREFIX_IMAGE_URL}${image}`} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}

export default App
