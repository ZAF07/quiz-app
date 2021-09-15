

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('js_questions', 'require_snippet',
        {
          type: Sequelize.INTEGER
        });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('js_questions', 'require_snippet');
  }
};
