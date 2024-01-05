import { useState, useEffect } from 'react'

export function useCatImage2 ({ data }) {
  const [url, setUrl] = useState()

  useEffect(() => {
    if (!data) return

    const firstWord = data.split(' ').slice(0, 1)[0]
    console.log(firstWord, 'este es el first word')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&json=true`)
      .then(res => {
        if (!res.ok) throw new Error('error fetching...')
        return res.json()
      })
      .then(data => {
        console.log(data, 'esto es url data')
        const id = data._id
        setUrl(`https://cataas.com/cat/${id}`)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [data])

  return { url }
}
