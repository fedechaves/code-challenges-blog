const CAT_INFO_API = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_INFO_API)
    .then(res => {
      if (!res.ok) throw new Error('error fetching...')
      return res.json()
    })
    .then(data => {
      const { fact } = data
      return fact
    })
    .catch((err) => {
      console.error(err)
    })
}
