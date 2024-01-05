import { useCatFact2 } from './hooks/useCatFact2'
import { useCatImage2 } from './hooks/useCatImage2'
import './appStyle.css'

const App2 = () => {
  const { data, refreshRandomFact } = useCatFact2()
  const { url } = useCatImage2({ data })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>Cat Api Proyect</h1>
      {url && <img src={url} alt='this is a cat fact' />}
      {data && <p>{data}</p>}
      <button onClick={handleClick}>tirame otro facto</button>
    </main>
  )
}

export default App2
