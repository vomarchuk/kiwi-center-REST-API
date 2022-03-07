const { Service } = require('../../models')

const addService = async (req, res, next) => {
  const { categoryId } = req.params
  const newService = { ...req.body, category: categoryId }

  const result = await Service.create(newService)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  })
}
module.exports = addService
