const express = require('express')
const signup = require('../Controllers/signup')
const router = express.Router()

router.post('/new', signup.check)
router.post('/presentation', signup.presentation)
router.post('/register', signup.register)

module.exports = router