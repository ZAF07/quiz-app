import React from 'react';

import { 
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core';

function Home(props) {

  const {enterQuiz} = props;
  return (
    <div>
      <h1>Let's start to learn !</h1>

      <Card sx={{minWidth: 275}} >
        <CardContent>
          <Typography>
            Explain Quiz Here
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => enterQuiz('javascript')}>Launch Javascript</Button>
        </CardActions>
      </Card>

      <button onClick={() => enterQuiz('javascript')}>Javascript</button>
      <a href='/quiz/javascript'>Js</a>

      <button onClick={() => enterQuiz('Python 🐍')}>Pyhton</button>

    </div>
  )
}

export default Home
