import { useState } from 'react'
import './App.css'
import LightTraffic from './Components/Lighttraffic';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LightTraffic />
    </>
  )
}

export default App
