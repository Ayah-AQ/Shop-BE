'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
     firstName: {type: DataTypes.STRING,allowNull:false},
    lastName: {type: DataTypes.STRING,allowNull:false},
    email: {type: DataTypes.STRING, unique: true},
    username: {type: DataTypes.STRING, allowNull:false,
      unique: true },
    password: {type: DataTypes.STRING,allowNull:false}
  }
   );
  return User;
};