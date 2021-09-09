import env from 'react-dotenv';
import React , {useState, useEffect} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

import Quiz from './components/Quiz';

function App() {

  // QUESTIONS FROM DB
  const qdb = [['what is js', 'what are variables?', 'what are data types?', 'what are objects'], ['is this an array?', 'is that also an array?', 'is any value true?', 'can i do something?']]


  const [qns, setQns] = useState(qdb);
  let [qnsNumber, SetQnsNumber] = useState(0)


  useEffect(() => {
    alanBtn({
      key: env.ALAN,
      onCommand: (commandData) => {

        if (commandData.command === 'yes') {
          handleNextQs();
        }

        if (commandData.answer) {
          console.log('User selected : ', commandData.answer);
          handleNextQs();
        }
      }
    })
  }, [])

  // UPDATE THE QUESTION STATE
  const handleNextQs = () => {
    SetQnsNumber(qnsNumber += 1)
  }


  return (
    <div className="App">
      Quiz App
      <Quiz questions={qns[qnsNumber]} nextQs={handleNextQs}/>
    </div>
  );
}

export default App;


