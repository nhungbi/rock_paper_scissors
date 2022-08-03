import { useState } from 'react'
import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import GamePage from './pages/GamePage' 
import HomePage from './pages/HomePage' 




function App() {

  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path= '/game' element = {<GamePage/>} />
      </Routes>
    </Router>
    
    </div>
  )
}

export default App
