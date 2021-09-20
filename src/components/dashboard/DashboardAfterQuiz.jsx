import React from 'react'

function DashboardAfterQuiz({results}) {

  const resultList = results.map(result => (
    <>
      <p style={{'color': result.correct ? 'green': 'red'}}>question: {result.question}</p>
      <p style={{'color': result.correct ? 'green': 'red'}}>answer: {result.answer}</p>
      <p style={{'color': result.correct ? 'green': 'red'}}> selected: {result.selected}</p>
      <hr></hr>
    </>
  ))

  return (
    <div>
        <h1>Results here! </h1>
        {resultList}
    </div>
  )
}

export default DashboardAfterQuiz
