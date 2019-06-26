module.exports = function(sequelize, DataTypes) {
  var Places = sequelize.define("Places", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    lon: {
      // eslint-disable-next-line prettier/prettier
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    budget: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
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
