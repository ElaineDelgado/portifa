import React from 'react' 
import sakura from '../sakurapng.png'

const Header = () => {
  return (
    <header className="App-header">      
      <div className='apresentacao'>
        <img src={sakura}className="App-logo" alt="logo" />
        <code><h1> Elaine Delgado </h1></code> 
        <p> &#60; front end developer &#47;&#62;</p>
      </div>
    </header>
  )
}

export default Header