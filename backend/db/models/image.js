'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING
    },
    favoritedCount: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: []
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' });
    Image.belongsToMany(models.User, { foreignKey: 'imageId', through: 'Favorite', otherKey: 'userId' });
    Image.hasMany(models.Favorite, { foreignKey: 'imageId', onDelete: 'CASCADE', hooks: true });
  };
  return Image;
};
