'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shops', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {type:Sequelize.STRING},
      slug:{type: Sequelize.STRING, unique: true},
      image: {type: Sequelize.STRING} ,
      updatedAt:{type: Sequelize.DATE, allowNull:false},
      createdAt: {type: Sequelize.DATE, allowNull:false} 
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Shops');
     
  }
};
