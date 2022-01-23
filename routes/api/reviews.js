const express = require('express')
const router = express.Router()
const { reviewsController: ctrl } = require('../../controllers')
const { controllerWrapper } = require('../../middleware/')

router.get('/', controllerWrapper(ctrl.getAllReviews))
module.exports = router
