const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    duration: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring'),
        allowNull: false,
    },
  }, { timestamps: false });
};