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

router.post('/', async (req, res, next) => {
  try {
    const newPatient = await Patient.create(req.body)
    res.json(newPatient)
  } catch (error) {
    next(error)
  }
})

router.delete('/:patientId', async (req, res, next) => {
  try {
    await Patient.destroy({
      where: {
        id: req.params.patientId
      }
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
