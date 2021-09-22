import React, {useEffect, useRef, useState} from 'react';
import env from 'react-dotenv';
import { makeStyles } from '@material-ui/core/styles'
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Grid,
  Typography,
  Chip,
  Avatar
} from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web';

// import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import {atelierCaveDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import javascript from '../../images/javascript.png';
import serverside from '../../images/serverside.png';
import sqlImg from '../../images/sql.png';

import DashboardAfterQuiz from '../dashboard/DashboardAfterQuiz';


//  CUSTOM STYLES
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    paddingTop: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  rocketContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  rocketAndSignIn: {
    padding: '3%',
  },



}))


SyntaxHighlighter.registerLanguage('javascript', js);

const code = `function main(input\n {\n  return 'hello world' \n }`;

// COMPONENT
// function Quiz({topic, nextQs, questionFromDB, questionNum}) {
function Quiz({topic, questionFromDB, alan}) {
  console.log('QUIZ RENDERED');

  const styles = useStyles()

  const [value, setValue] = useState(null)
  const [results, setResults] = useState([])
  const alanInstance = useRef(null);
  const correctAnswerRef = useRef()
  const trackScoreRef = useRef(0);
  // const questionNum = useRef(0);
  let [questionNum, setQuestionNum] = useState(0);

  const valueRef = useRef()
  const resultRef = useRef([])

const answersRef = useRef()


// ABSTRACTING THE CORRECT ANSWER
  if (questionFromDB && questionNum < questionFromDB.questionsResults.length){
    correctAnswerRef.current = questionFromDB.questionsResults[questionNum].answer;
    // scoreParaRef.current.innerHTML = correctAnswerRef.current;
  }

    // DISPLAY SCORE 
  // if (questionFromDB && questionNum > questionFromDB.questionsResults.length) {
  //   scoreParaRef.current.innerHTML = 'questionNum'
  // }

  console.log('answer -> ', questionNum);
  // DISPLAY trackScoreRef.current value AFTER END OF QUIZ
  // if (questionFromDB && questionNum >= questionFromDB.questionsResults.length) {
  //   // scoreParaRef.current.innerHTML = `${trackScoreRef.current} score at ref`
  // }

   useEffect(() => {
     console.log('ALAN AVBJUVUJBV --> ', alan);

 
    if (!alanInstance.current) {
    
      alanInstance.current = alanBtn({

        key: env.ALAN,
        onCommand:(commandData) => {
          // if (commandData.speak) {
          //   alanBtn.activate();
            
          // }
          if (commandData.answer) {
            // handleAnswerSelected()
            console.log('ALAN SAYS ', commandData.answer);
            const userSelect = commandData.answer
            const index = Number(userSelect)
            // handleAlan(index)
            const userAnswer = answersRef.current[index].choice
            handleAnswerSelected(userAnswer)
          }

          if (commandData.readingQuestion) {
            alanInstance.current.activate()
            alanInstance.current.playText(questionFromDB.questionsResults[questionNum].question)
          }

          if (commandData.readChoices) {

            //  CONSTRUCT THE CHOICES FOR ALAN TO READ
            const toReadChoices = []
            const letter = ['ayy', 'b', 'see', 'd']
               answersRef.current.forEach((choice, i) => {
                toReadChoices.push(`${letter[i]}: ${choice.choice}`)
              })

            alanInstance.current.activate()
            let count = 0;
            while (count < toReadChoices.length) {
              alanInstance.current.playText(toReadChoices[count])
              count += 1
            }
          }

          // READ SPECIFIC CHOICE
          if (commandData.readA) {
            alanInstance.current.activate()
            alanInstance.current.playText(`Ayy is ${answersRef.current[0].choice}`)
          }
          if (commandData.readB) {
            alanInstance.current.activate()
            alanInstance.current.playText(`b is ${answersRef.current[1].choice}`)
          }
          if (commandData.readC) {
            alanInstance.current.activate()
            alanInstance.current.playText(`see is ${answersRef.current[2].choice}`)
          }
          if (commandData.readD) {
            alanInstance.current.activate()
            alanInstance.current.playText(`d is ${answersRef.current[3].choice}`)
          }

          //  AFTER QUIZ, RETURN HOME COMMAND
          if (commandData.backHome) {
            setTimeout(window.location.reload(), 5000)
            // window.location.reload();
          }

        }
      })

      // // alanInstance.current.deactivate();
    }
   }, [])

             if (questionFromDB && questionNum >= questionFromDB.questionsResults.length) {
            alanInstance.current.activate()
            alanInstance.current.playText('Nice work! You\'ve completed the quiz. Check out how you did!')
          }

          //   if (questionFromDB && questionNum < questionFromDB.questionsResults.length && alanInstance.current) {
          //   console.log('QUESTON HERE ALANNNNN');
          //   // alanInstance.current.activate()
          //   alanInstance.current.playText(questionFromDB.questionsResults[questionNum].question)
          // }


        
      // if (questionFromDB && questionFromDB.questionsResults.length) {
      //   console.log('its here');
      //           // // AUTO ALAN
      //     alanInstance.current.activate();
      //     alanInstance.current.playText(questionFromDB.questionsResults[questionNum].question);
      // }

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
  let selection;
  if (questionFromDB && questionFromDB.choicesResults.length) {  
     selection = questionFromDB.choicesResults.map((a, i) => (
       <>
       <option key={i} value={a[i]}>{optionsLetter[i]}</option>
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
          <SyntaxHighlighter language="javascript" style={atelierCaveDark}>
          {need}
          </SyntaxHighlighter>
        </div>
      )
    }
    return null
  }


  // DISPLAYING THE CURRENT QUESTION AND CHOICES
  const questionAndChoices = (id) => {

    // CHOICES/ OPTIONS FOR THE CURRENT QUESTION
    const choicesList = questionFromDB.choicesResults.filter((choice) => choice.question_id === id);
    
    // ADD ANSWER TO THE CHOICES LIST
      choicesList.push({choice: questionFromDB.questionsResults[questionNum].answer})
      console.log('choicesList -> ', choicesList);
    

        answersRef.current = choicesList
     

      // MAPPING CURRENT CHOICES INTO RADIO BUTTONS
      let currentOptions
    //   currentOptions = choicesList.map((qs, key) => (
    //     <>
    //        <FormControlLabel key={qs} value={qs.choice} control={<Radio />} label={qs.choice} />
    //     </>
    // )) 
      
        currentOptions = choicesList.map((qs, key) => {
          // answersRef.current.push(qs)
          return (
              <>
                <small>{optionsLetter[key]}</small>
                <FormControlLabel key={qs} value={qs.choice} control={<Radio />} label={qs.choice}
                className='selected-choice-from-alan'
                />
              </>
          )

        })

        let topicLogo;
        switch (topic) {
          case 'javascript':
            topicLogo = javascript
            break;
          case 'serverside':
            topicLogo = serverside
            break
          case 'sql':
            topicLogo = sql  
            break
          default:
            topicLogo = javascript
            break;
        }
     

        const currentQuestion = questionFromDB.questionsResults[questionNum].question 
        // if question, Alan to read
        // if (currentQuestion) {
        //   alanInstance.current.activate();
        //   alanInstance.current.playText(currentQuestion)
        // }

        console.log('thisis vchia --<> ', choicesList);
    return (
      <>
      <h3><span><Avatar alt='logo' src={topicLogo} /></span>{currentQuestion}</h3>
      {codeSnippet(code, questionFromDB.questionsResults[questionNum].require_snippet)}

          <FormControl component="fieldset">
            <FormLabel component="legend">Answers:</FormLabel>
            <RadioGroup
              value={value}
              name="radio-buttons-group"
              onChange={handleChange}
            >
             {currentOptions? currentOptions: 'No Question'} 
            </RadioGroup>
          </FormControl>
      
      <select>
      {selection}
      </select>
      <button onClick={() => handleAnswerSelected()}>Next</button>
      <hr/>
      {/* <h1>require snippet: {questionFromDB.questionsResults[0].require_snippet}</h1>
      <h1>question id: {questionFromDB.questionsResults[0].question_id}</h1> */}
      </>
    )
  }

  const handleAlan = (index) => {
    // alert('haha')
    const i = Number(index);
    const answer = correctAnswerRef.current;
    const userAnswer = answersRef.current[i].choice
    console.log('USER ANSWER ALAN -> ', userAnswer);
    console.log('CORRECT ANSWER ALAN -> ', answer === userAnswer);
        if (correctAnswerRef.current === userAnswer) {
      trackScoreRef.current ++;
      console.log('correct -> ', trackScoreRef.current);
      // CREATE RESULT OBJECT
      setResults((prev => {
        const result = {
          question: questionFromDB.questionsResults[questionNum].question,
          answer: questionFromDB.questionsResults[questionNum].answer,
          selected: userAnswer,
          correct: true
        }
        return [...prev, result]
      }))

        // const result = {
        //   question: questionFromDB.questionsResults[questionNum.current].question,
        //   answer: questionFromDB.questionsResults[questionNum.current].answer,
        //   selected: value,
        //   correct: true
        // }
      // resultRef.current = [...resultRef.current, result]

    } else {
      console.log(questionNum);
      setResults((prev => {
        const result = {
          question: questionFromDB.questionsResults[questionNum].question,
          answer: questionFromDB.questionsResults[questionNum].answer,
          selected: userAnswer,
          correct: false,
        }
        return [...prev, result];
      }))
    }
    // questionNum.current ++;
    setQuestionNum( questionNum ++)
  }

  // HANDLE FUNCTION FOR RADIO BUTTON
  const handleChange = (e) => {
    console.log('value/valueRef changed in the handleChange function (RadioGroup');
    setValue(e.target.value);
    // valueRef.current = e.target.value
  }

  // IF USER SELECTS CORRECT ANSWER, ADD 1 TO SCORE AND INCREMENT CURRENT QUESTION REF
  const handleAnswerSelected =  (userSelecteds) => {
    answersRef.current = []

    const userChoice = userSelecteds ? userSelecteds : value;
    console.log('@@@ userChoice -> ', userChoice);

    console.log('answeres ref in handleSelected -> ', answersRef.current);

    console.log('checking answer --> ', correctAnswerRef.current === value);
    
    if (correctAnswerRef.current === userChoice) {
      trackScoreRef.current ++;
      console.log('correct -> ', trackScoreRef.current);
      // CREATE RESULT OBJECT
      setResults((prev => {
        const result = {
          question: questionFromDB.questionsResults[questionNum].question,
          answer: questionFromDB.questionsResults[questionNum].answer,
          selected: userChoice,
          correct: true
        }
        return [...prev, result]
      }))
      // questionNum.current +
    setQuestionNum( questionNum += 1)

    } else {
      console.log(questionNum);
      setResults((prev => {
        const result = {
          question: questionFromDB.questionsResults[questionNum].question,
          answer: questionFromDB.questionsResults[questionNum].answer,
          selected: userChoice,
          correct: false,
        }
        return [...prev, result];
      }))
      // questionNum.current ++;
    setQuestionNum( questionNum += 1)
    }

  }

  return (
    <div>

              <Grid container columns={12}  className={styles.rocketContainer}>
          <Grid item className={styles.rocketAndSignIn}>
          <Typography variant='h1'>🚀</Typography>
          </Grid>
          <Grid item className={styles.rocketAndSignIn}>
            <Chip label='Sign In' variant='outlined' onClick={() => alert('Signed In')}/>
          </Grid>
        </Grid>

      { questionFromDB && questionNum < questionFromDB.questionsResults.length ? questionAndChoices(questionFromDB.questionsResults[questionNum].question_id) : noQuestion}
   
      {/* <p ref={scoreParaRef}>a</p> */}
      {/* {
      questionFromDB
      &&
      questionNum.current >= questionFromDB.questionsResults.length
      &&
      <p>{trackScoreRef.current}</p>
      } */}

      {
        questionFromDB
        &&
        questionNum >= questionFromDB.questionsResults.length
        &&
        <DashboardAfterQuiz results={results} finalScore={trackScoreRef.current} />
        // <DashboardAfterQuiz results={resultRef.current} finalScore={trackScoreRef.current} />
      }

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
