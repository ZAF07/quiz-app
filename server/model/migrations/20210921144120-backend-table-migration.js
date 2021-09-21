

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('backend_questions', { 
        question_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        question: Sequelize.STRING,
        require_snippet: Sequelize.STRING,
        answer: Sequelize.STRING,
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });

      await queryInterface.createTable('backend_choices', { 
        question_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'backend_questions',
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
      await queryInterface.dropTable('backend_questions');
      await queryInterface.dropTable('backend_choices');
  }
};
