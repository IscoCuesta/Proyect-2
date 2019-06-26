module.exports = function(sequelize, DataTypes) {
  var Dishes = sequelize.define("Dishes", {
    dish: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    }
  });

  Dishes.associate = function(models) {
    models.Dishes.belongsTo(models.Places, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Dishes;
};
