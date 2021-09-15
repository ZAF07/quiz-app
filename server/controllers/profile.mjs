import db from '../model/models/index.mjs';

const profileControl = (req, res) => {
  res.send('profile');
};
const homeControl = async (req, res) => {
  const choicesResults = [] 
  const questionsResults = [] 

  const questions = await db.Question.findAll({
    attributes: ['question','answer', 'question_id'],
  });

  for (let i = 0; i < questions.length; i += 1) {
    const {dataValues} = questions[i]
    questionsResults.push(dataValues); 
  }

  const choices = await db.Choice.findAll({
    where: {
      question_id: 10,
    },
    attributes: ['choice'],
  });

  for (let i = 0; i < choices.length; i += 1) {
    const {dataValues} = choices[i]
    choicesResults.push(dataValues); 
  }
  res.json({choicesResults, questionsResults});
};

export {profileControl, homeControl};