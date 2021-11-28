const express = require('express')
const router = express.Router()
const homePage = require('../../controllers/homePage')
const { controllerWrapper } = require('../../middleware')

router.get('/', controllerWrapper(homePage))

module.exports = router
