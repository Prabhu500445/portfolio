import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nev from './component/Nev'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:"yellow"}}>
    <Nev></Nev>
    </div>
  )
}

export default App
