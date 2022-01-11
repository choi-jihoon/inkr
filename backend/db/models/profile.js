'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    fullName: {
      type: DataTypes.STRING
    },
    profilePic: {
      type: DataTypes.STRING,
      defaultValue: '/images/default-pic.jpg'
    },
    location: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    specialties: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: []
    },
  }, {});
  Profile.associate = function(models) {
    Profile.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Profile;
};
