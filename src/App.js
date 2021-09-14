import env from 'react-dotenv';
import React , {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from 'axios';

import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz';

import questions from './utils/questions';
import Resources from './components/resources/Resources';

function App() {


  // alan instance
  const alanInstance = useRef(null);
  const currentPage = window.location.pathname;

  // QUESTIONS FROM DB (preferably to be stored in global reducer and context)
  const qdb = [['what is js', 'what are variables?', 'what are data types?', 'what are objects'], ['is this an array?', 'is that also an array?', 'is any value true?', 'can i do something?']]

  const [quizSelected, setQuizSelected] = useState(false);
  const [topic, setTopic] = useState(null)
  const [question, setQuestion] = useState('How do we join two arrays?')
  const [options, setOptions] = useState(qdb);
  // SEND QUESTIONS, ANSWER AND OPTIONS
  const [currQuestion, setCurrQuestion] = useState(null);
  let [qnsNumber, SetQnsNumber] = useState(0);
  const [signed, setSign] = useState(false);

  console.log('hopme' ,currQuestion);

  useEffect(() => {

    axios.get('http://localhost:5000')
    .then(({data}) => {
      console.log(data);
    })

    if (!alanInstance.current && currentPage === '/') {

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
  
            // alert('User selected : ', commandData.answer);
            handleNextQs();
          }
  
          // auto play alan
          if (commandData.startQ) {
            handleStart(commandData.startQ)
          }
        }
      })
    }
    // AUTO ALAN
    // alanInstance.current.activate();
    // alanInstance.current.playText(`Hello effy! Welcome to the quiz. What topic would you like to practice today?`);
    // alanInstance.current.deactivate();
  }, [])

  // UPDATE THE QUESTION STATE
  const handleNextQs = () => {
    SetQnsNumber(qnsNumber += 1)
    console.log('***&#*(sjsjk -> ',qnsNumber );
  }

  //  FEATURE FOR CLIENT SIDE AUTHORISATION (show all quizzes but allow only basics for non log-in)
  const handleStart = (topic) => {
    setQuizSelected(true);
    setSign(true)
    setTopic(topic)
    setCurrQuestion(questions[qnsNumber]);
  }


  return (
    <Router>
      <div className="App">
          <h1 style={{color: !signed ? 'red' : 'green'}}>🚀 Quiz App</h1>
    
          {
            !quizSelected &&
            currentPage === '/' &&
            <Home enterQuiz={handleStart} />
          }
          {
            quizSelected &&
            currentPage === '/' &&
            <Quiz topic={topic} question={questions[qnsNumber]} options={options[qnsNumber]} nextQs={handleNextQs}/>
          }
          <Switch>
            {/* <Redirect exact from='/' to='/quiz/:start' />  */}
            <Route exact path="/profile">
              {'profile page'}
            </Route>
            <Route exact path="/resources/:javascript">
              <Resources />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;


