import { useEffect, useState } from 'react'

const CAT_PREFIX_URL = 'https://cataas.com/cat/'

export const useCatImage3 = ({ info }) => {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if (!info) return

    const firstWord = info.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => {
        const { _id } = data
        setUrl(`${CAT_PREFIX_URL}${_id}?size=50`)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [info])

  return { url }
}
