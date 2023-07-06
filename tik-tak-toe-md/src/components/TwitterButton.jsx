/* eslint-disable react/prop-types */
import { useState } from 'react'
import './twitterButton.css'

export const TwitterButton = ({ img, name, userName, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
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
            <button id='#article-button'>follow</button>  
        </aside>
    </article>
  )
}

