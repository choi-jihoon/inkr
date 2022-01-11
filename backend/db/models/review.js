'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    artistId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    reviewText: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});

  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'artistId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Review;
};
