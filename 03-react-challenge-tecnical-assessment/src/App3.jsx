import { useEffect, useState } from 'react'

const CAT_INFO_API = 'https://catfact.ninja/fact'
// const CAT_IMG_API = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_URL = 'https://cataas.com/cat/'

const App3 = () => {
  const [info, setInfo] = useState(null)
  const [url, setUrl] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(CAT_INFO_API)
      .then(res => {
        if (!res.ok) {
          setError('no se ha podido recuperar la cita')
        }
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setInfo(fact)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (!info) return

    const firstWord = info.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { _id } = data
        setUrl(_id)
      })
  }, [info])

  return (
    <article style={{ display: 'grid', placeItems: 'center' }}>
      <h1>Hey this is a kitty project :D</h1>
      <img src={url ? `${CAT_PREFIX_URL}${url}?size=50` : ''} alt='imagen de gato' />
      {info &&
        <p>{info}</p>}
      {error && <span>{error}</span>}
    </article>
  )
}

export default App3
