import React from 'react'
import './App.css'

import NavBar from './components/NavBar'
import HomeText from './components/HomeText'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HomeText />
      <Portfolio />
      <AboutMe />
    </div>
  )
}

export default App
