import React from 'react';
import { makeStyles } from '@material-ui/core/styles'


import jsImg from '../../images/javascript.png';
import bckEnd from '../../images/serverside.png';
import sqlImg from '../../images/sql.png';
import reactImg from '../../images/react.png';

import { 
  Avatar,
  Grid,
  Chip,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core';


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
  hov: {
  '&:hover': {
    position: 'relative',
    transform: 'scale(1.1)',
    transition: '.1s',
    },
    transition: '.6s',
  },


}))

function Home(props) {

  const styles = useStyles();

  const {enterQuiz} = props;
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

      <Grid container className={styles.container} direction="column">

        <Grid item md={12}>
          <Typography variant="h2">Let's start to learn !</Typography>
        </Grid>

        <Grid container className={styles.container} spacing={5}>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Avatar alt='js' src={jsImg} />
                <Typography variant='h6'>
                  Basics
                </Typography>
                <Typography variant='caption'>Train fundamentals with javascript</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' onClick={() => enterQuiz('javascript')}>
                  <Typography variant='caption'>Launch Javascript Quiz</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Avatar alt='bckend' src={bckEnd} />
                <Typography variant='h6'>
                  Serverside
                </Typography>
                <Typography variant='caption'>Train your skills in Serverside programming</Typography>
              </CardContent>
              <CardActions>
                  <Button variant='outlined' onClick={() => enterQuiz('serverside')}>
                  <Typography variant='caption'>Launch Serverside Quiz</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Avatar alt='bckend' src={sqlImg} />
                <Typography variant='h6'>
                  SQL
                </Typography>
                <Typography variant='caption'>Train your skills in SQL</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' onClick={() => enterQuiz('serverside')}>
                  <Typography variant='caption'>Launch SQL Quiz</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Avatar alt='react' src={reactImg} />
                <Typography variant='h6'>
                  Explain Quiz Here
                </Typography>
                <Typography variant='caption'>Train your skills in SQL</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' onClick={() => enterQuiz('serverside')}>
                  <Typography variant='caption'>Launch React Quiz</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Avatar alt='react' src={reactImg} />
                <Typography variant='h6'>
                  React JS
                </Typography>
                <Typography variant='caption'>Train your skills in SQL</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' onClick={() => enterQuiz('serverside')}>
                  <Typography variant='caption'>Launch React Quiz</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>

      {/* <button onClick={() => enterQuiz('javascript')}>Javascript</button> */}
      <a href='/quiz/javascript'>Js</a>

      {/* <button onClick={() => enterQuiz('Python 🐍')}>Pyhton</button> */}
    </Grid>

    </div>
  )
}

export default Home
