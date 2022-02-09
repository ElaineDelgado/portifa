import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Info from './components/Info'
import Contact from './components/Contact'

function App() {
  return (
    <div className="main-container ">  
      <Navbar />   
      <Header />
      <Info />
      <Contact />
      <footer>
        Elaine Delgado Front End Developer 2022
      </footer>
    </div>
  )
}

export default App
