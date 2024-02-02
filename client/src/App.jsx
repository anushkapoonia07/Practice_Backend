import {useEffect, useState } from 'react'
import './App.css'

function App() {
  const[myMessage, setMyMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:7000").then((res) => res.json())
    .then((data) => setMyMessage(data.message))
  }, [])

  return (
    <>
      <h1>{myMessage}</h1>
    </>
  )
}

export default App
