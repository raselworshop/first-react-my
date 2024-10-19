import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'
import BookStore from './BookStore'

function App() {

  const books=[
    {id: 1, name:'Biology', price:170, edition: 2019},
    {id: 2, name:'Physics', price:160, edition: 2013},
    {id: 3, name:'Heigher Math', price:150, edition: 2019},
    {id: 4, name:'General Math', price:140, edition: 2013},
    {id: 5, name:'Chemestry', price:110, edition: 2016},
    {id: 6, name:'English', price:120, edition: 2013},
    {id: 7, name:'Bangla', price:130, edition: 2014},
  ]

  const actors = ['shakib', 'rubel', 'shakil', 'raj rajjak', 'bappi', 'salman shah']

  const singers = [
    {id: 1, name: 'Dr. Mahfujur Rahman', age:48},
    {id: 2, name: 'Eva Rahman', age:28},
    {id: 3,name: 'Shuvro dev', age:38},
    {id: 4, name: 'Pritom', age:29},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer=> <Singers singer={singer}></Singers>)
      }
      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }

      {/* <Todo task='Learn React' isDone={true}></Todo>
      <Todo task='Concepts for React' isDone={false}></Todo>
      <Todo task='Concepts for JSX' isDone={true}></Todo> */}

      {/* <Device name='Laptop' price='55'></Device>
      <Device name='Mobile' price='32'></Device>
      <Device name='Watch' price='3'></Device>
      <Person></Person>
      <Student grade='A' score='90 +'></Student>
      <Student grade={12} score='85'></Student>
      <Student></Student>
      <Developer></Developer> */}
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
