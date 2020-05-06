const router = require('express').Router()
const {Treatment} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const treatments = await Treatment.findAll()
    res.json(treatments)
  } catch (err) {
    next(err)
  }
})

router.get('/:treatmentId', async (req, res, next) => {
  try {
    const treatments = await Treatment.findByPk(req.params.treatmentId)
    res.json(treatments)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newTreatment = await Treatment.create(req.body)
    res.json(newTreatment)
  } catch (err) {
    next(err)
  }
})
