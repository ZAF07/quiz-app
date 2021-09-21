export default function initBackendChoiceModel(sequelize, DataTypes) {
  return sequelize.define(
    'backend_choice',
    {
      question_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'backend_questions',
          key: 'question_id',
        },
      },
      choice: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}