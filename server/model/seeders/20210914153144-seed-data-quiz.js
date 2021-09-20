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
    {
        question: 'What is the value of the variable words after the following code runs?',
        answer: "[ 'olleh', 'dlrow' ]",
        require_snippet: "let words = ['Hello', 'World'];\nwords.forEach((word, i) => {\n (words[i] = word.split('').reverse().join('').toLowerCase())});",
        created_at: new Date(),
        updated_at: new Date(),
      },
    {
        question: 'What does the following code outputs?',
        answer: '0 [ 1 ]',
        require_snippet: "function func(a, b) {\n a += 1\n b.push(1)\n}\nconst a = 0;\nconst b = []\nfunc(a, b)\nconsole.log(a, b);",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Select the correct answer",
        answer: "24",
        require_snippet: "const f = n => n <= 1 ? 1 : n * f(n - 1);\nlet g = f(4)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Would this code work? If not, what has to be added or removed?",
        answer: ")",
        require_snippet: "function main(input {\n return 'Hello, World'\n}",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ];

    // Insert categories before items because items reference categories
    let questions = await queryInterface.bulkInsert(
      'js_questions',
      questionsList,
      { returning: true }
    );

    const choices = [];

    const choicesSet = [
      [
        {
        choice: "return recursiveStringReverse(lastChars) + firstChar; ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        choice: "return lastChars + firstChar;",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        choice: "return firstChar + recursiveStringReverse(lastChars)",
        created_at: new Date(),
        updated_at: new Date(),
    }
      ],
      [
        {
          choice: "[ 'hello', 'world' ]",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "[ 'olleH', 'dlroW' ]",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "[ 'World', 'Hello' ]",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "1 [ 1 ]",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "1 []",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "0 []",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "60",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "120",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      [
        {
          choice: "We have to return a variable",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "Missing 'var', 'const' or 'let' keyword",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          choice: "Seems fine! This code would run!",
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

    //   choices.push({
    //     choice: "return recursiveStringReverse(lastChars) + firstChar; ",
    //     question_id: question.question_id,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   });

    //   choices.push({
    //     choice: "return lastChars + firstChar;",
    //     question_id: question.question_id,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   });

    //   choices.push({
    //     choice: "return firstChar + recursiveStringReverse(lastChars)",
    //     question_id: question.question_id,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    // });
    }

    queryInterface.bulkInsert('js_choices', choices);
  },

  down: async (queryInterface) => {
    // Delete item before category records because items reference categories
    await queryInterface.bulkDelete('js_choices', null, {});
    await queryInterface.bulkDelete('js_questions', null, {});
  },
};

