import { Link } from "../Link"

export default function About() {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg" alt="profile_pic" />
          <p>Hi! I&apos;m fede and this is a React Router Clone</p>
        </div>
        <Link to={'/'}> Back Home</Link>
      </>
    )
  }