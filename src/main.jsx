import React from 'react'
import ReactDOM  from 'react-dom'
import App from './appport'
import './main.css'

function Advance(){
  return(
    <div className='nav-bar'>

    <App className='bg-black w-screen h-screen'/>
    
    </div>
  )
}

ReactDOM.render(<Advance/>,document.getElementById('root'))