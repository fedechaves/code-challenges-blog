export async function fetchApi (url) {
  fetch(url)
    .then(res => res.json())
}
