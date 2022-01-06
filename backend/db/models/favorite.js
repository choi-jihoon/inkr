'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    imageId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Images' }
    },
  }, {});
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.User, { foreignKey: 'userId' });
    Favorite.belongsTo(models.Image, { foreignKey: 'imageId' });
  };
  return Favorite;
};
