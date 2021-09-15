import React from 'react';


function Home(props) {

  const {enterQuiz} = props;
  return (
    <div>
      <h1>Let's start to learn !</h1>

      <button onClick={() => enterQuiz('javascript')}>Javascript</button>
      <a href='/quiz/javascript'>Js</a>

      <button onClick={() => enterQuiz('Python 🐍')}>Pyhton</button>

    </div>
  )
}

export default Home
