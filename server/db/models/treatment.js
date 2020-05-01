const Sequelize = require('sequelize')
const db = require('../db')

const Treatment = db.define('treatment', {
  treatmentType: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['Medication', 'Behavioral Therapy']]
    }
  },
  medName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: ''
  },
  behavioralName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: ''
  },
  doseage: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  timeAdministered: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = Treatment
