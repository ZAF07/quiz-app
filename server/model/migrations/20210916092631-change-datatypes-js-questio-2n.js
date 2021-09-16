
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.changeColumn('js_questions', 'question',
        {
          type: Sequelize.TEXT
        });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('js_questions', 'question');
  }
};