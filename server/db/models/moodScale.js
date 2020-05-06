const Sequelize = require('sequelize')
const db = require('../db')

const MoodScale = db.define('moodScale', {
  mood: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 5
    }
  }
})

module.exports = MoodScale
