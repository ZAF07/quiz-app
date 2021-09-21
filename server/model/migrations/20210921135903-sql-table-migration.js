

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('sql_questions', { 
        question_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        question: Sequelize.TEXT,
        answer: Sequelize.STRING,
        require_snippet: Sequelize.TEXT(2000),
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });

      await queryInterface.createTable('sql_choices', { 
        question_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'sql_questions',
            key: 'question_id',
          },
        },
        choice: Sequelize.STRING,
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
  },

  down: async (queryInterface) => {
      await queryInterface.dropTable('sql_questions');
      await queryInterface.dropTable('sql_choices');
  }
};
