/* eslint-disable react/prop-types */
import './twitterButton.css'

export const TwitterButton = ({ img, name, userName }) => {
  return (
    <article className="article">
        <header>
            <img src={img} alt={userName} />
            <div>   
                <strong>{name}</strong>
                <span>{userName}</span>
            </div>
        </header>
        <aside>    
            <button>follow</button>  
        </aside>
    </article>
  )
}

