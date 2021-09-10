import React, {useEffect, useState} from 'react'


function Quiz(props) {
  // PROBABLY WANT TO USE useContext and useReducer for this one
  const {topic, question, options, nextQs} = props;



useEffect(() => {

}, [])

const optionsLetter = ['A', 'B', 'C', 'D'];

  // RENDERING THE OPTIONS IN LIST
  let currentOptions
  if (options.length) {
    currentOptions= options.map((qs, key) => (
      <li key={key}>{optionsLetter[key]}: {qs}</li>
    ))
  }

  // get new question
  const handleNextQs = () => {
    nextQs()

  }

  return (
    <div>
      {/* CONSUMING THE GLOBAL STATE */}
    
      <h1>{topic}</h1>

      <h3>{question} 🧐</h3>
      <ul>
        {currentOptions? currentOptions: 'No Questions'}
   
      </ul>
      {/* <button onClick={() => nextQs()}>Next</button> */}
      <button onClick={handleNextQs}>Next</button>
      Quiz Component
    </div>
  )
}

export default Quiz
