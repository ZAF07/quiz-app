import React from 'react'

function DashboardAfterQuiz({results, finalScore}) {

  let finalScoreCalculation;
  if (finalScore >= 4) { 
    finalScoreCalculation = (
      <h2>Amazing! You're really close to hitting full marks! Get ready for take off! ⭐️</h2>
    )
  } else if (finalScore > 2) {
    
        finalScoreCalculation = (
          <>
            <h2>Well done, your're halfway there! Keep practicing and come back next time to try hit full score 💪</h2>
          </>
        )
  }

  const resultList = results.map(result => (
    <>
      <h2 key={result.answer} style={{'color': result.correct ? 'green': 'red'}}>Question: {result.question}</h2>
      <p key={result.question} style={{'color': 'green'}}>Correct Answer: {result.answer}</p>
      <p key={result.selected.split('') } style={{'color': result.correct ? 'green': 'red'}}> You Selected: {result.selected}</p>
      <hr></hr>
    </>
  ))

  return (
    <div>
      {finalScoreCalculation}
      <h1>Results here! </h1>
      <h3>You scored {finalScore / 5 * 100}%</h3>
      {resultList}
    </div>
  )
}

export default DashboardAfterQuiz
