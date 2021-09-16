
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.changeColumn('js_questions', 'question',
        {
          type: Sequelize.STRING(1234)
        });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('js_questions', 'question');
  }
};