import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col bg-red-600 h-screen">
     <Navbar />
     <SearchBar/>
    </div>
  )
}

export default App
