const router = require('express').Router()
const {Patient} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const patients = await Patient.findAll()
    res.json(patients)
  } catch (err) {
    next(err)
  }
})

router.get('/:patientId', async (req, res, next) => {
  try {
    const patient = await Patient.findByPk(req.params.patientId)
    res.json(patient)
  } catch (err) {
    next(err)
  }
})

module.exports = router
