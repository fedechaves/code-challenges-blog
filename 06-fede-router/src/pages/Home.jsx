import { Link } from "../Link"

export default function Home () {
    return (
      <>
        <h1>Home</h1>
        <p>This is a SPA to create a React Router from scratch.</p>
        <Link to={'/about'}> About me</Link>
      </>
    )
  }