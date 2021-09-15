module.exports = {
  up: async (queryInterface) => {
    const questionsList = [
      {
        question: 'Would this code work? If not, what has to be added or removed for it to work?',
        answer: ')',
        require_snippet: "function main(input\n {\n  return 'hello world' \n }",
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
        choice: 'Missing the keyword, "var", "const" or "let"',
        question_id: question.question_id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      choices.push({
        choice: 'Seems fine. This code will return "Hello World"',
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