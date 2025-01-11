import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const Button = ({text}) => {
  return(
    <button>esto es: {text}</button>
  )
}
createRoot(document.getElementById('root')).render(
  
  <reactFragment>
  <Button text = "button 1"/>
  <Button text = "button 2"/>
  <Button text = "button 3"/>
  <Button text = "button 4"/>
  </reactFragment>
  
  
)
