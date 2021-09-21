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
import Resources from './components/resources/Resources';

function App() {

console.log('((((())))) app rendered )))))');
  // alan instance
  const alanInstance = useRef(null);
  const currentPage = window.location.pathname;

  const [quizSelected, setQuizSelected] = useState(false);
  const [topic, setTopic] = useState(null)
  const [question, setQuestion] = useState(null)
  // SEND QUESTIONS, ANSWER AND OPTIONS
  let [qnsNumber, SetQnsNumber] = useState(0);
  const [signed, setSign] = useState(false);


  useEffect(() => {

    if (!alanInstance.current && currentPage === '/') {

      alanInstance.current =  alanBtn({
        key: env.ALAN,
        onCommand: (commandData) => {
  
          // if (commandData.command === 'yes') {
          //   handleNextQs();
          // }
  
          if (commandData.answer) {
  
            /* received the selected answer from ALAN AI, should store this in some state to update the user DB if wrong answer
             also use this data to instantly check if answer selected is correct and react accordingly
             vvvvvvvvvvvvvvvv
             */
  
            // alert('User selected : ', commandData.answer);
            console.log('ANSWERED 434344');
            handleNextQs();
          }
  
          // auto play alan
          if (commandData.startQ) {
            handleStart(commandData.startQ)
          }
        }
      })
      // // AUTO ALAN
      // alanInstance.current.activate();
      // alanInstance.current.playText(`Hello effy! Welcome to the quiz. What topic would you like to practice today?`);
      // // alanInstance.current.deactivate();
    }
  }, [])



  //  FEATURE FOR CLIENT SIDE AUTHORISATION (show all quizzes but allow only basics for non log-in)
  const handleStart = (topic) => {

       axios.get(`http://localhost:5000/api/${topic}`)
    .then(({data}) => {
      setQuestion(data)
      console.log(' RECEIVED FROM DB *** -> ', data);
    })
    setQuizSelected(true);
    setSign(true)
    setTopic(topic)
  }

  const handleNextQs = () => {
    SetQnsNumber(qnsNumber + 1);
  }

  return (
    <Router>
      <div className="App">
          {/* <h1 style={{color: !signed ? 'red' : 'green'}}>🚀 Quiz App</h1> */}
    
          {
            !quizSelected &&
            currentPage === '/' &&
            <Home enterQuiz={handleStart} />
          }
          {
            quizSelected &&
            currentPage === '/' &&
            <Quiz topic={topic} questionFromDB={question} questionNum={qnsNumber} nextQs={handleNextQs}/>
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


