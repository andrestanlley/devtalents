const express = require('express')
const signup = require('../Controllers/signup')
const router = express.Router()

router.post('/start', signup.check)
router.post('/finish', signup.presentation)
router.post('/register', signup.register)

module.exports = router