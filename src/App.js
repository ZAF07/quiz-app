import env from 'react-dotenv';
import React , {useState, useEffect, useRef} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz';

function App() {


  // alan instance
  const alanInstance = useRef(null);

  // QUESTIONS FROM DB (preferably to be stored in global reducer and context)
  const qdb = [['what is js', 'what are variables?', 'what are data types?', 'what are objects'], ['is this an array?', 'is that also an array?', 'is any value true?', 'can i do something?']]

  const [quizSelected, setQuizSelected] = useState(false);
  const [topic, setTopic] = useState(null)
  const [question, setQuestion] = useState('How do we join two arrays?')
  const [options, setOptions] = useState(qdb);
  let [qnsNumber, SetQnsNumber] = useState(0);
  const [signed, setSign] = useState(false);


  useEffect(() => {

    if (!alanInstance.current) {

      alanInstance.current =  alanBtn({
        key: env.ALAN,
        onCommand: (commandData) => {
  
          if (commandData.command === 'yes') {
            handleNextQs();
          }
  
          if (commandData.answer) {
  
            /* received the selected answer from ALAN AI, should store this in some state to update the user DB if wrong answer
             also use this data to instantly check if answer selected is correct and react accordingly
             vvvvvvvvvvvvvvvv
             */
  
            alert('User selected : ', commandData.answer);
            handleNextQs();
          }
  
          // auto play alan
          if (commandData.command === 'auto') {
            alert('auto');
          }
        }
      })
    }
    // AUTO ALAN
    // alanInstance.current.activate();
    // alanInstance.current.playText(`Hello ${name}! Welcome to the quiz. What topic would you like to practice today?`);
    // alanInstance.current.deactivate();
  }, [])

  // UPDATE THE QUESTION STATE
  const handleNextQs = () => {
    SetQnsNumber(qnsNumber += 1)
    console.log('***&#*(sjsjk');
  }

  //  FEATURE FOR CLIENT SIDE AUTHORISATION (show all quizzes but allow only basics for non log-in)
  const handleStart = (topic) => {
    setQuizSelected(true);
    setSign(true)
    setTopic(topic)
  }

  return (
    <div className="App">
        <h1 style={{color: !signed ? 'red' : 'green'}}>🚀 Quiz App</h1>
  
        {
          !quizSelected &&
          <Home enterQuiz={handleStart} />
        }
        {
          quizSelected &&
          <Quiz topic={topic} question={question} options={options[qnsNumber]} nextQs={handleNextQs}/>
        }

    </div>
  );
}

export default App;


