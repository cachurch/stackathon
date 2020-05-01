const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
// router.use('/patient', require('./patient'))
// router.use('/treatment',  require('./treatment'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
