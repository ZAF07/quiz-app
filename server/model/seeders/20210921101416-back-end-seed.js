module.exports = {
  up: async (queryInterface) => {
    const questionsList = [
      {
        question: "What kind of SQL statement retrieves from a table?",
        answer: 'SELECT',
        created_at: new Date(),
        updated_at: new Date(),
      },
    {
        question: 'Of the various HTTP requests which may be initiated from a browser, which type of response content would be more likely to originate from an application server rather than a proxy?',
        answer: "JSON text",
        created_at: new Date(),
        updated_at: new Date(),
      },
    {
        question: 'As part of a backend architecture, what is the disadvantage of using serverless computing?',
        answer: 'Higher latency of services that are used infrequently',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Which media type is commonly used in POST request, and also used to format a GET query string",
        answer: "application/x-www-form-urlencoded",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Which method would efficiently check whether a resource URI exists?",
        answer: "GET",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ];

    // Insert categories before items because items reference categories
    let questions = await queryInterface.bulkInsert(
      'backend_questions',
      questionsList,
      { returning: true }
    );

    const choices = [];

    const choicesSet = [
      [
        {
        choice: 'LOOKUP',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        choice: "FETCH",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        choice: 'READ',
        created_at: new Date(),
        updated_at: new Date(),
    }
      ],
      [
        {
          choice: "Images",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "Javascript",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "CSS",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "Complexity from handling multithreaded synchronization",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "Higher cost from unused resources",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "Having to manually set up elasticity",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "text / html",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "application / json",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "text / plain",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "HEAD",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "CONNECT",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "TRACE",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ]
    ]

    for (let i = 0; i < questions.length; i += 1) {
      const questionId = questions[i].question_id;

      for (let j = 0; j < choicesSet[i].length; j += 1) {
        choicesSet[i][j].question_id = questionId
        
        choices.push(choicesSet[i][j])
      }
      
    }

    queryInterface.bulkInsert('backend_choices', choices);
  },

  down: async (queryInterface) => {
    // Delete item before category records because items reference categories
    await queryInterface.bulkDelete('backend_choices', null, {});
    await queryInterface.bulkDelete('backend_questions', null, {});
  },
};

