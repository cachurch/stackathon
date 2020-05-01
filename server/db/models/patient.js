const Sequelize = require('sequelize');
const db = require('../db');

const Patient = db.define('patients', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    moodScale: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            min: 0,
            max: 5
        }
    },
    medicalHistroy: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    notes: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});

module.exports = Patient