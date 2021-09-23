import env from 'react-dotenv';
import React , {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  useLocation,
  // useParams
} from 'react-router-dom';
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from 'axios';

import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz';
import Learn from './components/learn/Learn';

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

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


  useEffect(() => {

    if (!alanInstance.current && currentPage === '/') {

      alanInstance.current =  alanBtn({
        key: env.ALAN,
        onCommand: (commandData) => {
  
          if (commandData.startTopic) {
            console.log('startr command --> ', commandData.startTopic);
            // handleNextQs();
            handleStart(commandData.startTopic)
          }
        }
      });
    }

      document.addEventListener('keydown', (e) => {
      const keyCode = e.code;

      if (keyCode === 'Space') {
        if (alanInstance.current.isActive()) {
          // alert('actiuve')
           alanInstance.current.deactivate()
        } else {
          alanInstance.current.activate()
          // alanInstance.current.playText('I have arrived')
        }
      }
    })

  }, [])

  if (alanInstance.current) {

    if (quizSelected || currentPage !== '/') {
      alanInstance.current.deactivate()
      alanInstance.current.remove()
    }
  }
  console.log('THIS IS THE CURRENT PAGE -> ', currentPage);



  //  FEATURE FOR CLIENT SIDE AUTHORISATION (show all quizzes but allow only basics for non log-in)
  const handleStart = (topic) => {

       axios.get(`http://localhost:5000/api/${topic}`)
    .then(({data}) => {
      setQuestion(data)
      console.log(' RECEIVED FROM DB *** -> ', data);
    })
    setQuizSelected(true);
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
            <Home enterQuiz={handleStart}/>
          }
          {
            quizSelected &&
            question &&
            currentPage === '/' &&
            <Quiz topic={topic} questionFromDB={question} questionNum={qnsNumber} nextQs={handleNextQs} alan={alanInstance.current}/>
          }

          <Switch>
            {/* <Redirect exact from='/' to='/quiz/:start' />  */}
            <Route exact path="/profile">
              {'profile page'}
            </Route>
            <Route exact path="/learn/:topic">
              <Learn />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;


