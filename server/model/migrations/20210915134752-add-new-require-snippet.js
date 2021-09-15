

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.changeColumn('js_questions', 'require_snippet',
        {
          type: Sequelize.STRING
        });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('js_questions', 'require_snippet');
  }
};
