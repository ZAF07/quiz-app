import React, {useEffect, useContext, useReducer} from 'react'
// IMPORT THE CONTEXT
import { StateContext } from '../store/store';

function Quiz(props) {
  // PROBABLY WANT TO USE useContext and useReducer for this one
  const {questions, nextQs} = props;


useEffect(() => {
  // MAKE API CALL FOR QUESTIONS HERE THEN UPDATE GLOBAL STATE
  dispatch({type: 'NEW_QUESTION', payload: ['what', 'when', 'where']})
}, [])

  //  DESTRUCTURE THE CONTEXT TAKEN FROM THE EXPORTED CREATED CONTEXT
  const {name, quiz, quizReducer} = useContext
  (StateContext);

  //  DISPATCH ACTION AND QUIZ STATE
  const [state, dispatch] = useReducer(quizReducer, quiz);
  console.log(state);

  // RENDERING THE OPTIONS IN LIST
  let currentQns;
  if (state.options) {
    const options = state.options;
    // console.log(options);
    currentQns = options.map(qns => (
      <li>{qns}</li>
    ))
  }

  // get new question
  const handleNextQs = () => {
    dispatch({type: 'NEW_QUESTION', payload: [
    'How do you pass variables to functions?',
    'What is a setTimeout()?',
    'How do you make a function async?',
    'Is null a valid value?'
  ]})
  }


  return (
    <div>
      {/* CONSUMING THE GLOBAL STATE */}
      <p>Hello {name}</p>
      <h1>JavaScript 🍌</h1>

      <h3>{state.question} ? 🧐</h3>
      <ul>
        {currentQns ? currentQns : 'No Questions'}
      </ul>
      {/* <button onClick={() => nextQs()}>Next</button> */}
      <button onClick={handleNextQs}>Next</button>
      Quiz Component
    </div>
  )
}

export default Quiz
