import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'

function App() {

  return (
    <div className="App flex flex-col bg-blue-400 h-screen">
     <SearchBar/>
    </div>
  )
}

export default App
