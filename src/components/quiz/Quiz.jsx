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

    

function Quiz({topic, nextQs, questionFromDB, questionNum}) {
  console.log('QUIZ RENDERED');

  const alanInstance = useRef(null);
  const scoreParaRef = useRef();
  const correctAnswerRef = useRef()

  if (questionFromDB && questionNum < questionFromDB.questionsResults.length){
    correctAnswerRef.current = questionFromDB.questionsResults[questionNum].answer
    scoreParaRef.current.innerHTML = correctAnswerRef.current
  }
  console.log('answer -> ', questionNum);
  if (questionFromDB && questionNum >= questionFromDB.questionsResults.length) {
    scoreParaRef.current.innerHTML = `${questionNum} score`
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
  console.log('***** FROM QUIZ --> ', questionFromDB);
  console.log('questionNum --> ', questionNum);

// console.log('quiz --> ', question);

//  ALAN SPEAKS AFTER EACH QUIZ COMPLETION
// if (!question) {
//   scoreParaRef.current.innerHTML = correctAnswerRef.current
//   // alanInstance.current.activate();
//   // alanInstance.current.playText("Nice work! You've completed the quiz. Want to keep track of how you did? Sign up now!");

// };

const optionsLetter = ['A', 'B', 'C', 'D'];

  let selected;
  if (questionFromDB && questionFromDB.choicesResults.length) {  
     selected = questionFromDB.choicesResults.map((a, i) => (
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

  const questionAndChoices = (id) => {
    const choicesList = questionFromDB.choicesResults.filter((choice) => choice.question_id === id);

    let currentOptions
 
      currentOptions= choicesList.map((qs, key) => (
        <li key={key}>{optionsLetter[key]}: {qs.choice}</li>
    )) 

    console.log('thisis vchia --<> ', choicesList);
    return (
      <>
      <small>{questionFromDB.questionsResults[questionNum].answer}</small>
      <h1>{topic}</h1> 
      <h3>{questionFromDB.questionsResults[questionNum].question} 🧐</h3>
      {codeSnippet(code, questionFromDB.questionsResults[questionNum].require_snippet)}
      <ul>
        {currentOptions? currentOptions: 'No Question'}    
      </ul>
      <select>
      {selected}
      </select>
      <button onClick={() => nextQs()}>Next</button>
      <hr/>
      {/* <h1>require snippet: {questionFromDB.questionsResults[0].require_snippet}</h1>
      <h1>question id: {questionFromDB.questionsResults[0].question_id}</h1> */}
      </>
    )
  }

  if (questionFromDB && questionNum > questionFromDB.questionsResults.length) {
    scoreParaRef.current.innerHTML = questionNum
  }

  return (
    <div>
      { questionFromDB && questionNum < questionFromDB.questionsResults.length ? questionAndChoices(questionFromDB.questionsResults[questionNum].question_id) : noQuestion}
      
   
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
