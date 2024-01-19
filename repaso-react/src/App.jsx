import './App.css'

function TwitterBox({ user, img, username, isFollowing }) {
  return(
    <article className='tw-followCard'>
      <div className='tw-followCard-header'>
        <img className='tw-followCard-avatar' height={150} src="https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg" alt="User foto Profile" />
      </div>
      <div className='tw-followCard-info'>
        <strong>{user}</strong>
        <span className='tw-followCard-infoUserName'>{username}</span>
      </div>
      <button className='tw-followCard-button'>Seguir</button>
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
      />
      <TwitterBox 
        user='Fede Chaves'
        username='@fedechaves'
      />
      <TwitterBox 
        user='Fede Chaves'
        username='@fedechaves'
      />
    </section>
  )
}

export default App
