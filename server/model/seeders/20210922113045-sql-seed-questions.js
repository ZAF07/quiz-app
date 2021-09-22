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
        question: 'Which of the following statements is true about SQL queries?',
        answer: "A valid order of statement keywords is as follows: SELECT, FROM, WHERE, ORDER BY, GROUP, BY",
        created_at: new Date(),
        updated_at: new Date(),
      },
    {
        question: 'Table COLOR has 20 records and table COLOR has 15. If these two tables are joined in a CROSS JOIN as shown in the code snippet, how many rows will the result set contain?',
        require_snippet: 'SELECT s.size, c.color\nFROM size s\nCROSS JOIN color c',
        answer: 'The number of rows is equal to the number of rows with a matching join key',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Given the table schema Customer(Id, Name, ReferralType), which SQL query returns the total number of different referral types?",
        answer: "SELECT UNIQUE COUNT(ReferralType) FROM Customer",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Given a table of products and a table of shipments of those products, the following query aims to find the products customer bought more than 10 of in a shipment, with its total count. What is an error in the following SQL query?",
        require_snippet:'SELECT\n\tid,\n\tproduct_name,\n\tCOUNT( product_id) AS total\nFROM products p JOIN shipments s ON s.product_id = p.id\nGROUP BY id,\n\tproduct_name\nWHERE COUNT( product_id ) > 10\nORDER BY total;',
        answer: "ID is an repeated column name, to avoid ambiguity error P.ID should be used instead",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ];

    // Insert categories before items because items reference categories
    let questions = await queryInterface.bulkInsert(
      'sql_questions',
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
          choice: "DDL triggers can be created to INSERT, UPDATE, or DELETE events",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "AVG, SUM, MIN, and COUNT are examples of scalar functions",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "Logical and comparison operators can potentially rteturn a third result of UNKNOWN",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "300",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "20",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "35",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "SELECT DISTINCT COUNT(ReferralType) FROM Customer",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "SELECT COUNT(ReferralType) FROM Customer GROUP BY ReferralType",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "SELECT COUNT(DISTINCT ReferralType) FROM Customer",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "total alias can't be used for ordering before groupings are made, ORDER BY COUNT(product_id) should be used instead",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "WHERE filters rows before any groupings are made, HAVING should be used instead",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "AS is missing to properly alias table names, (products AS p JOINS shipments AS s) should be used instead",
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

    queryInterface.bulkInsert('sql_choices', choices);
  },

  down: async (queryInterface) => {
    // Delete item before category records because items reference categories
    await queryInterface.bulkDelete('sql_choices', null, {});
    await queryInterface.bulkDelete('sql_questions', null, {});
  },
};

