const Sequelize = require('sequelize')
const db = require('../db')

const PatientBehavior = db.define('behavior', {
  notes: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = PatientBehavior
