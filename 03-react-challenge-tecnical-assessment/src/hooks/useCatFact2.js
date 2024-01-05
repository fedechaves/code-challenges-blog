import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts2'

export const useCatFact2 = () => {
  const [data, setData] = useState()

  const refreshRandomFact = () => {
    getRandomFact()
      .then(newFact => setData(newFact))
  }

  useEffect(refreshRandomFact, [])

  return { data, refreshRandomFact }
}
