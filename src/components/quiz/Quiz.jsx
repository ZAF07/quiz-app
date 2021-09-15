import React, {useEffect, useRef, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

// import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);


  // const code = `function main(input {
  //   return 'hello world'
  // }        
  //   `;


  const code = `function main(input\n {\n  return 'hello world' \n }`;

    

function Quiz({topic, options, nextQs, qNa, qNum}) {
  console.log('QUIZ RENDERED');

  const alanInstance = useRef(null);
  const scoreParaRef = useRef();
  const correctAnswerRef = useRef()

  if (qNa && qNum < qNa.questionsResults.length){
    correctAnswerRef.current = qNa.questionsResults[qNum].answer
    scoreParaRef.current.innerHTML = correctAnswerRef.current
  }
  console.log('answer -> ', qNum);
  if (qNa && qNum >= qNa.questionsResults.length) {
    scoreParaRef.current.innerHTML = `${qNum} score`
  }


  useEffect(() => {

    if (!alanInstance.current) {
    
      alanInstance.current = alanBtn({
        onCommand:(commandData) => {
          if (commandData.speak) {
            alanBtn.activate();
            
          }
        }
      })
    }
  }, [])

  // console.log('from qwuix' ,question);
  console.log('***** FROM QUIZ --> ', qNa);
  console.log('qNum --> ', qNum);

// console.log('quiz --> ', question);

//  ALAN SPEAKS AFTER EACH QUIZ COMPLETION
// if (!question) {
//   scoreParaRef.current.innerHTML = correctAnswerRef.current
//   // alanInstance.current.activate();
//   // alanInstance.current.playText("Nice work! You've completed the quiz. Want to keep track of how you did? Sign up now!");

// };

const optionsLetter = ['A', 'B', 'C', 'D'];

  let selected;
  if (qNa && qNa.choicesResults.length) {  
     selected = qNa.choicesResults.map((a, i) => (
       <>
       <option key={a} value={a[i]}>{optionsLetter[i]}</option>
     </>
     )) 
  }

  const noQuestion = (
    <>
      <h2>Your're done! Want to keep track of how you did? Sign up!</h2>
      <a href='http://localhost:3000'>Back to home</a>
    </>
  )

  const codeSnippet = (code, need) => {
    if (need) {
      return (
        <div style={{marginLeft: '15%', marginRight: '15%'}}>
          <SyntaxHighlighter language="javascript" style={docco}>
          {need}
          </SyntaxHighlighter>
        </div>
      )
    }
    return null
  }

  const h = (id) => {
    const choicesList = qNa.choicesResults.filter((choice) => choice.question_id === id);

    let currentOptions
 
      currentOptions= choicesList.map((qs, key) => (
        <li key={key}>{optionsLetter[key]}: {qs.choice}</li>
    )) 

    console.log('thisis vchia --<> ', choicesList);
    return (
      <>
      <small>{qNa.questionsResults[qNum].answer}</small>
      <h1>{topic}</h1> 
      <h3>{qNa.questionsResults[qNum].question} 🧐</h3>
      {codeSnippet(code, qNa.questionsResults[qNum].require_snippet)}
      <ul>
        {currentOptions? currentOptions: 'No Question'}    
      </ul>
      <select>
      {selected}
      </select>
      <button onClick={() => nextQs()}>Next</button>
      <hr/>
      {/* <h1>require snippet: {qNa.questionsResults[0].require_snippet}</h1>
      <h1>question id: {qNa.questionsResults[0].question_id}</h1> */}
      </>
    )
  }

  if (qNa && qNum > qNa.questionsResults.length) {
    scoreParaRef.current.innerHTML = qNum
  }

  return (
    <div>
      { qNa && qNum < qNa.questionsResults.length ? h(qNa.questionsResults[qNum].question_id) : noQuestion}
      
   
      <p ref={scoreParaRef}>a</p>


      {/* <div style={{marginLeft: '15%', marginRight: '15%'}}>
        <SyntaxHighlighter language="javascript" style={docco}>
        {code}
        </SyntaxHighlighter>
      </div> */}

      Quiz Component
    </div>
  )
}

export default Quiz
