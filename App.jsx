import { useState } from 'react'
import './App.css'
import { Books } from './components/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Books/>
    </>
  )
}

export default App
