import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [

{
    userName: 'Canuto',
    name: 'William Villamil',
    isFollowing: true,
},    
{
    userName: 'Sol',
    name: 'Fa Her',
    isFollowing:false,
},
{
    userName:'Wen',
    name: 'Wendy Borondy',
    isFollowing: true,
},
{
    userName:'Lia',
    name: 'Lia Villamil',
    isFollowing: false,
},
{
    userName:'Mar',
    name: 'Mario Luna',
    isFollowing: true,
}
]

export function App (){
    // const [state,setState] = useState(isFollowing) //1 estado actual, cambio estado
    return ( 
        <section className="App">
        {
        users.map(user=>{
            const {userName,name,isFollowing}=user
            return(
                <TwitterFollowCard
                key={userName} //usar key de la base de datos
                userName={userName} 
                initialIsFollowing={isFollowing}
                name={name}
                >
                </TwitterFollowCard>
            )
        })
        }

        </section>
    
    )
}
