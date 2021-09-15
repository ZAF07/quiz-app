module.exports = {
  up: async (queryInterface) => {
    const questionsList = [
      {
        question: 'What is to be added to this code for it to work?',
        answer: ')',
        created_at: new Date(),
        updated_at: new Date(),
      },
    {
        question: 'What is a component?',
        answer: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML',
        created_at: new Date(),
        updated_at: new Date(),
      },
    {
        question: 'How many times does a component rerenders?',
        answer: 'Once when it is rendered and any other time it\'s (or it\'s parent\'s) props or state changes',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Insert categories before items because items reference categories
    let questions = await queryInterface.bulkInsert(
      'js_questions',
      questionsList,
      { returning: true }
    );

    const choices = [];
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];

      choices.push({
        choice: ')',
        question_id: question.question_id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      choices.push({
        choice: 'other item',
        question_id: question.question_id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      choices.push({
        choice: 'iitemmm',
        question_id: question.question_id,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    queryInterface.bulkInsert('js_choices', choices);
  },

  down: async (queryInterface) => {
    // Delete item before category records because items reference categories
    await queryInterface.bulkDelete('js_choices', null, {});
    await queryInterface.bulkDelete('js_questions', null, {});
  },
};