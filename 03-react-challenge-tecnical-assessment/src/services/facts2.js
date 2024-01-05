const GET_CAT_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(GET_CAT_FACT)
    if (!res.ok) throw new Error('error fetching...')
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (err) {
    console.error(err)
  }
}
