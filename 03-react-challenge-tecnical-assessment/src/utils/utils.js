export async function fetchApi (url) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}
