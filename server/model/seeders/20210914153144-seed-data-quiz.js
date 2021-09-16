module.exports = {
  up: async (queryInterface) => {
    const questionsList = [
      {
        question: 'Select the line of code that completes the function',
        answer: "return recursiveStringReverse(lastChars); ",
        require_snippet: "function recursiveStringReverse(str) {\n if (str.length <= 1) \n return str\n}\n let firstChar = str.charAt(0)\n let lastString = str.slice(1)\n\n // MISSING LINE\n}",
        created_at: new Date(),
        updated_at: new Date(),
      },
    // {
    //     question: 'What is a component?',
    //     answer: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML',
      
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // {
    //     question: 'How many times does a component rerenders?',
    //     answer: 'Once when it is rendered and any other time it\'s (or it\'s parent\'s) props or state changes',
        
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
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
        choice: "return recursiveStringReverse(lastChars) + firstChar; ",
        question_id: question.question_id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      choices.push({
        choice: "return lastChars + firstChar;",
        question_id: question.question_id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      choices.push({
        choice: "return firstChar + recursiveStringReverse(lastChars)",
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