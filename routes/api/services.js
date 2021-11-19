const express = require('express')
const router = express.Router()
const { serviceControllers: ctrl } = require('../../controllers')
const { controllerWrapper } = require('../../middleware/')

router.get('/', controllerWrapper(ctrl.getAll))

router.post('/', controllerWrapper(ctrl.addService))

module.exports = router
