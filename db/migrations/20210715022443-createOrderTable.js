'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', { 
      id: {type:Sequelize.INTEGER, autoIncrement:true, primaryKey:true},
      updatedAt:{type: Sequelize.DATE, allowNull:false},
      createdAt: {type: Sequelize.DATE, allowNull:false} 
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Orders');
    
  }
};
