module.exports = (sequelize, DataTypes) => {
  const Kakao = sequelize.define(
    "Kakao",
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      paranoid: false,
    }
  );
  return Kakao;
};
