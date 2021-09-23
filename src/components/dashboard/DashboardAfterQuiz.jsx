import React from 'react';
import {Button, Card, Avatar} from '@material-ui/core';
import correct from '../../images/correct.gif';
import wrong from '../../images/wrong.png';

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
  } else {
    finalScoreCalculation = (
      <>
      <h2>Practice some more! 😤</h2>
      </>
    )
  }

  const resultList = results.map((result, i) => (
    <Card raised style={{'marginBottom': '2%', 'padding': '2%'}}>
      <h2 key={result.answer} style={{'color': result.correct ? 'green': 'red'}}>Question #{i + 1}: {result.question}</h2>
      <p key={result.question} style={{'color': 'green'}}>Correct Answer: {result.answer}</p>
      <p key={result.selected.split('') } style={{'color': result.correct ? 'green': 'red'}}> You Selected: {result.selected}</p>
      {/* <hr></hr> */}
      { result.correct && 
        <Avatar alt='correct' src={correct}/>
      }
      { !result.correct && <Avatar alt='wrong' src={wrong}/>}
    </Card>

  ))

  return (
    <div style={{
      'paddingLeft': '5%',
      'paddingRight': '5%',
      'paddingBottom': '3%'
    }}>
      <h1>Here are your results 🖖:  </h1>
      {finalScoreCalculation}
      <h1 style={{'color': finalScore >= 3 ? 'green': 'red'}}>You scored {finalScore / 5 * 100}%</h1>
      {resultList}
      <Button variant='contained' color='secondary'> 
        <a style={{'color': '#fff', 'textDecoration': 'none'}} href='https://software-engineering-quiz.netlify.app/'>Back to home</a>
      </Button>
    </div>
  )
}

export default DashboardAfterQuiz
