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
  Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import spaceKey from '../../images/space-key.png'
import pressDown from '../../images/down.gif'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//  CUSTOM STYLES
const useStyles = makeStyles((theme) => ({
  dialogContent: {
   display: 'flex',
   flexDirection: 'column'
  },
}))


function DialogHelp() {

  const styles = useStyles()

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
     <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Alan AI 🤖
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Alan AI 🤖"}</DialogTitle>
          <DialogTitle>
            <Typography variant='h6'>How to wake me?  😴</Typography>
          </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant='caption'>
              By default, there would be a blue button at the bottom right coner. Click, and your wish are my commands!
            </Typography>
            <Typography variant='body' style={{'display': 'block', 'marginTop': '3%'}}>
              Alternatively, key down on the spacebar on your keyboard and i will come alive 🤪
            </Typography>
            <span>
              <Avatar alt='space-key' src={pressDown}/>
              <Avatar alt='space-key' src={spaceKey}/>
            </span>
          </DialogContentText>
           </DialogContent>

          <DialogTitle>{"Commands i know 🗣"}</DialogTitle>
           <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"  className={styles.dialogContent}>
            {/* HOME PAGE COMMANDS */}
            <Typography variant='h6'>Commands for the Home page 🏚</Typography>
            <Typography variant='caption'>
               "WHAT CAN I DO HERE" 👉 I'll tell you what you can do in this app
            </Typography>
              <Typography variant='caption'>
               "START (quiz topic)" 👉 Tells me to start the quiz topic of your choice. I'll take you to the quiz page!
            </Typography>

              {/* QUIZ PAGE COMMANDS */}
            <Typography variant='h6'>Commands for the quiz page 📝</Typography>
            <Typography variant='caption'>
               "READ QUESTIONS" 👉 Tells me to read the questions out to you
            </Typography>
              <Typography variant='caption'>
               "READ/ REPEAT CHOICES" 👉 Tells me to read the choices for the current questions out to you
            </Typography>
             <Typography variant='caption'>
               "SELECT/ PICK/ CHOOSE 👉 Tells me to select the choice you would like to pick for the current questions
            </Typography>
            
            {/* AFTER QUIZ COMMANDS */}
            <Typography variant='h6'>Commands for after completing quiz ✅</Typography>
            <Typography variant='caption'>
               "BRING ME BACK TO HOME" 👉 I'll take you back to the home page!
            </Typography>
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

export default DialogHelp
