// IMPORT createContext from react
// THIS IS TO CREATE A CONTEXT
import React, {createContext} from 'react';

// EXPORT CONTEXT CREATED TO MAKE ITS PROVIDER OBJECT AVAILABLE TO CHILD COMPONENTS
export const StateContext = createContext();

// REDUCERS
// initial state
const quizzes = {};

// reducers 
const quizReducers = (state, action) => {
  switch (action.type) {
    case 'NEW_QUESTION':
      return {
        question: 'new question arrived',
        answer: 'new answer arrived',
        options: action.payload
       }

    default:
      break;
  }
}



// SET THE PROVIDER AS A HIGHER ORDER FUNCTION AND WRAP CHILD COMPONENTS IN BETWEEN THIS PARENT COMPONENT
 const StateProvider = ({children}) => {
  return (
    <StateContext.Provider value={{name: 'zaffere', quiz: quizzes, quizReducer: quizReducers}}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;