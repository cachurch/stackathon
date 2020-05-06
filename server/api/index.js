const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/patients', require('./patients'))
router.use('/treatments', require('./treatments'))
router.use('/moods', require('./moodScale'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
