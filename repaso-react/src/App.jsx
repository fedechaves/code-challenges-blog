/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'


function TwitterBox({ user, img, username, initialIsFollowing }) {
  const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing)

  const isText = isFollowing ? 'Siguiendo' : 'Seguir'
  const followingClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  function handleClick() {
    setIsFollowing(!isFollowing)
  }

  return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' 
              src={img} 
              alt="User foto Profile" 
        />
        <div className='tw-followCard-info'>
          <strong>{user}</strong>
          <span className='tw-followCard-infoUserName'>{username}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={followingClass}>
          <span className='tw-followCard-text'>{isText}</span>
          <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  )
}

function App() {


  return (
    <section className='App'>
      <h1>Follow this peeps</h1>

      <TwitterBox 
        user='Fede Chaves'
        username='@fedechaves'
        initialIsFollowing={true}
        img={"https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg"}
      />
      <TwitterBox 
        user='Fede Chaves'
        username='@fedechaves'
        initialIsFollowing={false}
        img={"https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg"}
      />
      <TwitterBox 
        user='Fede Chaves'
        username='@fedechaves'
        initialIsFollowing={false}
        img={"https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg"}
      />
    </section>
  )
}

export default App
