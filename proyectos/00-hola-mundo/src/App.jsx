import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'



export function App (){
    const [name,setName] = useState('Canuto') //1 estado actual, cambio estado
    return ( 
        <section className="App">
        <TwitterFollowCard  userName={name} name="Robin" />
        <TwitterFollowCard  userName="ManoloSanchez" name="Raven" />
        

        <button onClick={()=> setName('PepitoPerez')}>Cambio nombre</button> {/*boton cambio estado*/}
        </section>
    
    )
}
