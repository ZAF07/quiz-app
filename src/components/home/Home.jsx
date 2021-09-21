import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import { 
  Grid,
  Chip,
  AppBar,
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
    transition: '.6s',
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

        <Grid container lg={12} className={styles.container} spacing={5}>

          <Grid item>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Typography variant='h6'>
                  Basics
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' onClick={() => enterQuiz('javascript')}>
                  <Typography variant='caption'>Launch Javascript</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Typography variant='h6'>
                  Backend
                </Typography>
              </CardContent>
              <CardActions>
                  <Button variant='outlined' onClick={() => enterQuiz('backend')}>
                  <Typography variant='caption'>Launch Backend</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Typography variant='h6'>
                  Explain Quiz Here
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => enterQuiz('javascript')}>Launch Javascript</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Typography variant='h6'>
                  Explain Quiz Here
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => enterQuiz('javascript')}>Launch Javascript</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Typography variant='h6'>
                  Explain Quiz Here
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => enterQuiz('javascript')}>Launch Javascript</Button>
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
