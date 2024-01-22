import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts3'

export const useCatFact3 = () => {
  const [info, setInfo] = useState(null)

  const refreshRandomFact = () => {
    getRandomFact()
      .then(newFact => setInfo(newFact))
  }

  useEffect(refreshRandomFact, [])

  return { info, refreshRandomFact }
}
