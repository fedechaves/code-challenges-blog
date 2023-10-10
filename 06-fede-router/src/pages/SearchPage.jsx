import { useEffect } from "react"

export default function SearchPage ({ routeParams }) {
    useEffect(() => {
        document.title = `your search: ${routeParams.query}`
    }, [routeParams.query])

    return (
        <>
            <h1>Searching {routeParams.query}</h1>
        </>
    )
}