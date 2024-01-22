import { useCatFact3 } from './hooks/useCatFact3'
import { useCatImage3 } from './hooks/useCatImage3'

const App3 = () => {
  const { info, refreshRandomFact } = useCatFact3()
  const { url } = useCatImage3({ info })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <article style={{ display: 'grid', placeItems: 'center' }}>
      <h1>Hey this is a kitty project :D</h1>
      <img src={url} alt='imagen de gato' />
      {info && <p>{info}</p>}
      <button onClick={handleClick}> Uno nuevo uno nuevo uno nuevo</button>
    </article>
  )
}

export default App3
