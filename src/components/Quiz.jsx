import React from 'react'


function Quiz(props) {
  const {questions, nextQs} = props;



  let currentQns;
  if (questions) {
    currentQns = questions.map(qns => (
      <li>{qns}</li>
    ))
  }



  return (
    <div>
      <h1>JavaScript 🍌</h1>

      <h3>What is ES6 ? 🧐</h3>
      <ul>
        {currentQns ? currentQns : 'No Questions'}
      </ul>
      <button onClick={() => nextQs()}>Next</button>
      Quiz Component
    </div>
  )
}

export default Quiz
