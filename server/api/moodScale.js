const router = require('express').Router()
const {MoodScale} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const moods = await MoodScale.findAll()
    res.json(moods)
  } catch (err) {
    next(err)
  }
})

router.get('/:treatmentId', async (req, res, next) => {
  try {
    const moods = await MoodScale.findByPk(req.params.treatmentId)
    res.json(moods)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newMood = await MoodScale.create(req.body)
    res.json(newMood)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const editedMood = await MoodScale.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(editedMood)
  } catch (error) {
    next(error)
  }
})
