import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person (){
  const age = 15;
  const money=10;
  const person={name:'Rasel', age:'24'}
  return <h3>hi, welcome to react, I learning react, I am {person.name} my age: {age + money}</h3>
}

function Student (){
  return <div>
    <h3>Info for this student</h3>
    <p>Name: </p>
    <p>Age:</p>
  </div>
}

export default App
