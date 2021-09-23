import React, {forwardRef, useState} from 'react';

import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import jsImg from '../../images/javascript.png';
import bckEnd from '../../images/serverside.png';
import sqlImg from '../../images/sql.png';
import reactImg from '../../images/react.png';
import dsa from '../../images/dsa.png';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//  CUSTOM STYLES
const useStyles = makeStyles((theme) => ({
  dialogContent: {
   display: 'flex',
   flexDirection: 'column'
  },
  topicCards: {
    marginBottom: '4%',
  }
}))


function DialogLearn({openLearn}) {

  const styles = useStyles()

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const enterQuiz = () => {
    alert('Start Learning')
    
  }

  if (openLearn) {
    setOpen(true)
  }

  return (
     <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Learn 📚
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Resources for your learning 📚"}</DialogTitle>
        <DialogContent>
        <DialogTitle>{"These are the topics we currently have 📝"}</DialogTitle>
        <DialogContentText id="alert-dialog-slide-description">

           <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"  className={styles.dialogContent}>
            {/* HOME PAGE COMMANDS */}
            <Avatar alt='js' src={jsImg} />
              <Typography variant='caption' className={styles.topicCards}>
                JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions (Learning Javascript alone does not make you a Software Engineer, but we choose Javascript as our base language because of its popularity 🖖)
            </Typography>

              {/* QUIZ PAGE COMMANDS */}
            <Avatar alt='js' src={sqlImg}/>
            <Typography variant='caption'>
               Here you will learn about SQL (Structured Query Language).
            </Typography>
              <Typography variant='caption' className={styles.topicCards}>
               SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system
            </Typography>
            
            {/* AFTER QUIZ COMMANDS */}
            <Avatar alt='js' src={bckEnd}/>
            <Typography variant='caption' className={styles.topicCards}>
               Server-side scripting is a technique used in web development which involves employing scripts on a web server which produces a response customized for each user's request to the website. The alternative is for the web server itself to deliver a static web page
            </Typography>
            <Avatar alt='js' src={dsa}/>
            <Typography variant='caption' className={styles.topicCards}>
               A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs.
            </Typography>
            <Avatar alt='js' src={reactImg}/>
            <Typography variant='caption' className={styles.topicCards}>
               React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
            </Typography>
          </DialogContentText>
        </DialogContent>
      
      {/* TOPIC CARDS */}
      <Grid container className={styles.container} direction="column">

        <Grid item md={12}>
          <DialogTitle>

          <Typography variant="h2">Let's start to learn !</Typography>
          </DialogTitle>
        </Grid>

        <Grid container className={styles.container} spacing={5}>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Avatar alt='js' src={jsImg} />
                <Typography variant='h6'>
                  Javascript
                </Typography>
                <Typography variant='caption'>Train fundamentals with javascript</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' href='/learn/javascript'>
                  <Typography variant='caption'>Launch</Typography>
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
                <Typography variant='caption'>Study Serverside programming</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' href='/learn/serverside'>
                  <Typography variant='caption'>Launch</Typography>
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
                <Button variant='outlined' href='/learn/sql'>
                  <Typography variant='caption'>Launch</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Avatar alt='react' src={dsa} />
                <Typography variant='h6'>
                  Algorithms
                </Typography>
                <Typography variant='caption'>Train your skills in Algorithms</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' href='/learn/sql'>
                  <Typography variant='caption'>Launch</Typography>
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
                <Typography variant='caption'>Train your skills in ReactJS</Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' href='/learn/react'>
                  <Typography variant='caption'>Launch</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{minWidth: 275}} raised className={styles.hov}>
              <CardContent>
                <Avatar>🚀</Avatar>
                <Typography variant='h6'>
                  Rocket Academy
                </Typography>
                <Typography variant='caption'>Enroll with Rocket Academy!</Typography>
              </CardContent>
              <CardActions>
                {/* <Button variant='outlined'>
                  <Typography variant='caption'>
                    <a href='https://rocketacademy.co'
                    className={styles.anchorTag}
                    target='blank'>
                      Launch
                    </a>
                  </Typography>
                </Button> */}
                <Button variant='outlined' href='https://rocketacademy.co' target='blank'>
                  <Typography variant='caption'>Launch</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>

      {/* <button onClick={() => enterQuiz('javascript')}>Javascript</button> */}
      {/* <a href='/quiz/javascript'>Js</a> */}

      {/* <button onClick={() => enterQuiz('Python 🐍')}>Pyhton</button> */}
    </Grid>
          </DialogContentText>
           </DialogContent>






        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose}>Got it ! 👍</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogLearn;
