import React, {useEffect, useRef, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

// import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);


  const code = `function main(input {
    return 'hello world'
  }        
    `;

    

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
  const {topic, question, options, nextQs, qNa, qNum} = props;
  console.log('from qwuix' ,question);
  console.log(qNa);

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
    console.log('correct', correctAnswerRef.current)
  }
}

const optionsLetter = ['A', 'B', 'C', 'D'];

  // RENDERING THE OPTIONS IN LIST
  let currentOptions
  // if (question && question.options.length) {
  //   currentOptions= question.options.map((qs, key) => (
  //     <li key={key}>{optionsLetter[key]}: {qs}</li>
  //   ))
  // };
    if (qNa && qNa.choicesResults.length) {
    currentOptions= qNa.choicesResults.map((qs, key) => (
      <li key={key}>{optionsLetter[key]}: {qs.choice}</li>
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
// if (question) {
//   ifHaveQuestions = (
//     <>
//       <h1>{topic}</h1> 
//       <h3>{question.question} 🧐</h3>
//       <ul>
//         {currentOptions? currentOptions: 'No Question'}    
//       </ul>
//       <select>
//       {selected}
//       </select>
//       <button onClick={() => nextQs()}>Next</button>
//     </>
//   );
// }
if (qNa && qNum < qNa.questionsResults.length) {
  ifHaveQuestions = (
    <>
      <h1>{topic}</h1> 
      {/* <h3>{qNa.questionsResults.shift().question} 🧐</h3> */}
      <h3>{qNa.questionsResults[qNum].question} 🧐</h3>
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
       { qNa && qNum < qNa.questionsResults.length ? ifHaveQuestions : noQuestion}


      {/* <h3>{question.question} 🧐</h3> */}
      {/* <ul>
        {currentOptions? currentOptions: 'No Question'}
   
      </ul> */}
      {/* <button onClick={() => nextQs()}>Next</button> */}
      {/* <button onClick={() => nextQs()}>Next</button> */}
      <p ref={scoreParaRef}></p>


      <div style={{marginLeft: '15%', marginRight: '15%'}}>
        <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
      </div>

      Quiz Component
    </div>
  )
}

export default Quiz
