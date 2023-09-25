import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const App = () => {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
      .catch((err) => {
        console.error(err)
      })
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

  return (
    <main style={{ display: 'flex', flexDirection: 'column', placeItems: 'center', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1>Esta es una app de Gatitos!</h1>
      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        {fact && <p> {fact} </p>}
        {image && <img style={{ maxWidth: '320px', height: 'auto' }} src={`${CAT_PREFIX_IMAGE_URL}${image}`} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}

export default App
