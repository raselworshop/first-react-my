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
      <Device name='Laptop' price='55'></Device>
      <Device name='Mobile' price='32'></Device>
      <Device name='Watch' price='3'></Device>
      <Person></Person>
      <Student grade='A' score='90 +'></Student>
      <Student grade={12} score='85'></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device (props){
  // console.log(props)
  return(
    <div>
      <h2>This Device: {props.name}, price: {props.price}</h2>
    </div>
  )
}

function Person (){
  const age = 15;
  const money=10;
  const person={name:'Rasel', age:'24'}
  return <h3>hi, welcome to react, I learning react, I am {person.name} my age: {age + money}</h3>
}

function Student ({grade=0, score=0}){
  console.log(score, grade)
  return <div className='student'>
    <h3>Info for this student</h3>
    <p>Grade: {grade} </p>
    <p>Scores: {score} </p>
  </div>
}

function Developer(){
  const developerStyle = {
    border: '2px solid blue',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
  }
  return (
    <div style={developerStyle}>
      <h4>Devoloper vai</h4>
      <p>Coding:</p>
    </div>
  )
}

export default App
