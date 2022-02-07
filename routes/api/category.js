const express = require('express')
const router = express.Router()
const { categoryControllers: categoryCtrl } = require('../../controllers')
const { serviceControllers: serviceCtrl } = require('../../controllers')
const { controllerWrapper, validation } = require('../../middleware')

const { addServiceSchema } = require('../../models/service')

router.get('/', controllerWrapper(categoryCtrl.getAllCategories))
router.get('/:categoryId', controllerWrapper(categoryCtrl.getCategoriesById))
router.post('/addCategory', controllerWrapper(categoryCtrl.addCategory))

router.post(
  '/:categoryId/addService',
  validation(addServiceSchema),
  controllerWrapper(serviceCtrl.addService),
)

module.exports = router

// const {
//   addContactSchema,
//   updateContactSchema,
//   updateStatusContactSchema,
// } = require('../../models/contact')

// router.get('/:contactId', authenticate, controllerWrapper(ctrl.getById))

// router.post(
//   '/',
//   authenticate,
//   validation(addContactSchema),
//   controllerWrapper(ctrl.addContact),
// )

// router.delete(
//   '/:contactId',
//   authenticate,
//   controllerWrapper(ctrl.removeContact),
// )

// router.put(
//   '/:contactId',
//   authenticate,
//   validation(updateContactSchema),
//   controllerWrapper(ctrl.updateById),
// )

// router.patch(
//   '/:contactId/favorite',
//   authenticate,
//   validation(updateStatusContactSchema),
//   controllerWrapper(ctrl.updateStatusContact),
// )
