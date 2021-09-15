

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('js_choices', 'id', 
     {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('users');
  }
};
