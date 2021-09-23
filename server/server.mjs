import express from 'express';
import cors from 'cors';
import db from './model/models/index.mjs';
import {} from 'dotenv/config';

const app = express();


app.use(cors());
// app.use('/api/:topic', javascript);
app.get('/api/javascript', async (req, res) => {
  // const {topic} = req.params;
  // console.log('topic --->> ', topic);
  const choicesResults = [] 
  const questionsResults = [] 

  const questions = await db.JsQuestion.findAll({
    attributes: ['question','answer', 'require_snippet', 'question_id'],
  });

  for (let i = 0; i < questions.length; i += 1) {
    const {dataValues} = questions[i]
    questionsResults.push(dataValues); 
  }

  const choices = await db.JsChoice.findAll({
  
    attributes: ['choice', 'question_id'],
  });

  for (let i = 0; i < choices.length; i += 1) {
    const {dataValues} = choices[i]
    choicesResults.push(dataValues); 
  }

  console.log('choices -->> ', choicesResults);
  console.log('questions -->> ', questionsResults);
  res.json({choicesResults, questionsResults});
})

app.get('/api/serverside', async (req, res) => {

  const choicesResults = [] 
  const questionsResults = [] 

  const questions = await db.BackendQuestion.findAll({
    attributes: ['question','answer', 'require_snippet', 'question_id'],
  });

  for (let i = 0; i < questions.length; i += 1) {
    const {dataValues} = questions[i]
    questionsResults.push(dataValues); 
  }

  const choices = await db.BackendChoice.findAll({
  
    attributes: ['choice', 'question_id'],
  });

  for (let i = 0; i < choices.length; i += 1) {
    const {dataValues} = choices[i]
    choicesResults.push(dataValues); 
  }

  console.log('choices -->> ', choicesResults);
  console.log('questions -->> ', questionsResults);
  res.json({choicesResults, questionsResults});
})

//  SQL DATA API
app.get('/api/sql', async (req, res) => {

  const choicesResults = [] 
  const questionsResults = [] 

  const questions = await db.SqlQuestion.findAll({
    attributes: ['question','answer', 'require_snippet', 'question_id'],
  });

  for (let i = 0; i < questions.length; i += 1) {
    const {dataValues} = questions[i]
    questionsResults.push(dataValues); 
  }

  const choices = await db.SqlChoice.findAll({
  
    attributes: ['choice', 'question_id'],
  });

  for (let i = 0; i < choices.length; i += 1) {
    const {dataValues} = choices[i]
    choicesResults.push(dataValues); 
  }

  console.log('choices -->> ', choicesResults);
  console.log('questions -->> ', questionsResults);
  res.json({choicesResults, questionsResults});
})

const PORT = 5000 || process.env.PORT;

app.listen(PORT, console.log('http://localhost:5000'))