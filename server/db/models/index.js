const User = require('./user')
const Patient = require('./patient')
const Treatment = require('./treatment')
const PatientBehavior = require('./patientBehavior')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasOne(Patient)
Patient.belongsTo(User)

Treatment.belongsTo(Patient, {through: PatientBehavior})
Patient.hasOne(Treatment, {through: PatientBehavior})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Patient,
  Treatment,
  PatientBehavior
}
