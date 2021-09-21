
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('sql_questions', 'question',
        {
          type: Sequelize.TEXT,
        });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('sql_questions', 'question');
  }
};