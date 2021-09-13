import React, {useEffect, useRef, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

function Quiz(props) {
  console.log('QUIZ RENDERED');

  // alan instance
  const alanInstance = useRef(null);
  const scoreParaRef = useRef();
  const correctAnswerRef = useRef(0)

  if (!alanInstance.current) {

    alanInstance.current = alanBtn({
      onCommand:(commandData) => {
        if (commandData.speak) {
          alanBtn.activate();
          
        }
      }
    })
  }


  // PROBABLY WANT TO USE useContext and useReducer for this one
  const {topic, question, options, nextQs} = props;
  console.log('from qwuix' ,question);

console.log('quiz --> ', question);

//  ALAN SPEAKS AFTER EACH QUIZ COMPLETION
if (!question) {
  scoreParaRef.current.innerHTML = correctAnswerRef.current
  // alanInstance.current.activate();
  // alanInstance.current.playText("Nice work! You've completed the quiz. Want to keep track of how you did? Sign up now!");

};

// console.log('answer match ->>> ', question.correct_answer === question.options[0]);

// CHECK FOR CORRECT ANSWER
if (question) {
  if (question.correct_answer === question.options[0]) {
    // USED REFS SO THAT COMPONENT DONT RERENDER AT EVVEERY CORRECT ANSWER
    correctAnswerRef.current += 1
  }
}

const optionsLetter = ['A', 'B', 'C', 'D'];

  // RENDERING THE OPTIONS IN LIST
  let currentOptions
  if (question && question.options.length) {
    currentOptions= question.options.map((qs, key) => (
      <li key={key}>{optionsLetter[key]}: {qs}</li>
    ))
  };

  let selected;
  if (question && question.options.length) {
    
     selected = question.options.map((a, i) => (
       <>
       
       <option key={a} value={a[i]}>{optionsLetter[i]}</option>
     </>
     )) 
  }

let ifHaveQuestions;
if (question) {
  ifHaveQuestions = (
    <>
      <h1>{topic}</h1> 
      <h3>{question.question} 🧐</h3>
      <ul>
        {currentOptions? currentOptions: 'No Question'}    
      </ul>
      <select>
      {selected}
      </select>
      <button onClick={() => nextQs()}>Next</button>
    </>
  );
}

  const noQuestion = (
    <>
      <h2>Your're done! Want to keep track of how you did? Sign up!</h2>
      <a href='http://localhost:3000'>Back to home</a>
    </>
  )

  return (
    <div>
      {/* CONSUMING THE GLOBAL STATE */}
    
      {/* <h1>{topic}</h1> */}

      {/* {currentOptions? <h3>{question.question} 🧐</h3> : 'None 😫'} */}
       {/* {question && ifHaveQuestions}
       {!question && noQuestion} */}
       {question ? ifHaveQuestions : noQuestion}


      {/* <h3>{question.question} 🧐</h3> */}
      {/* <ul>
        {currentOptions? currentOptions: 'No Question'}
   
      </ul> */}
      {/* <button onClick={() => nextQs()}>Next</button> */}
      {/* <button onClick={() => nextQs()}>Next</button> */}
      <p ref={scoreParaRef}></p>
      Quiz Component
    </div>
  )
}

export default Quiz
