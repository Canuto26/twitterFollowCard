import { useState } from "react"

export function TwitterFollowCard ({userName,name,initialIsFollowing}){
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing) //es igual que lo de abajo
    
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    const text  = isFollowing ? 'Siguiendo' : 'seguir' 
    const buttonClassName = `tw-followCard-button ${isFollowing ? 'is-following' : ''}`;//es lo mismo que abajo

    // const buttonClassName = isFollowing 
    // ? 'tw-followCard-button is-following'
    // : 'tw-followCard-button'

    const handleClick = () => { //cambiar de true a false y de false a true
        setIsFollowing(!isFollowing)
    }
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" 
            // src="https://png.pngtree.com/png-vector/20240620/ourmid/pngtree-cute-boy-cartoon-logo-png-image_12811929.png" 
            src={`https://unavatar.io/${userName}`}
            alt="avatar gato" />
            <div className="tw-followCard-info">
                <strong >{name}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>
        <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followingCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
    </aside>
    </article>
    )
}