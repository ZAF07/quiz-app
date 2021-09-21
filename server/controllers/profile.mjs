import db from '../model/models/index.mjs';

const profileControl = (req, res) => {
  res.send('profile');
};
const javascriptQnA = async (req, res) => {
  const {topic} = req.params;
  console.log('topic --->> ', topic);
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
};

export {profileControl, javascriptQnA};