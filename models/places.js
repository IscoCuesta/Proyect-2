module.exports = function(sequelize, DataTypes) {
  var Places = sequelize.define("Places", {
    name: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1, 100]
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1, 100]
      }
    },
    zone: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1, 100]
      }
    },
    url: {
      type: DataTypes.TEXT,
      validate: {
        allowNull: false,
        len: [1, 100]
      }
    },
    lon: {
      // eslint-disable-next-line prettier/prettier
      type: DataTypes.STRING, 
      validate: {
        allowNull: false,
        len: [1, 100]
      }
    },
    lat: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1, 100]
      }
    },
    budget: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1, 100]
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1, 100]
      }
    }
  });

  Places.associate = function(models) {
    Places.hasMany(models.Dishes, {
      onDelete: "cascade"
    });
  };

  return Places;
};
