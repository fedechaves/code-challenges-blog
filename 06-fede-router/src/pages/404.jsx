import { Link } from "../Link"

export default function Page404 () {
    return (
        <>
            <h1>This is not Fine</h1>
            <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Gif fine dog" />
            <Link to='/'>Back to Home</Link>
        </>
    )
}