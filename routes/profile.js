const express = require('express')
const profile = require('../Controllers/profile')
const router = express.Router()


router.use('/:username', profile.show)

module.exports = router