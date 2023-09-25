import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const App = () => {
  const { fact, refreshRandomFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', placeItems: 'center', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1>Esta es una app de Gatitos!</h1>
      <button onClick={handleClick} style={{ margin: '20px auto' }}>Nuevo fact!</button>
      {fact && <p> {fact} </p>}
      {image && <img style={{ maxWidth: '320px', height: 'auto' }} src={`${CAT_PREFIX_IMAGE_URL}${image}`} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App
