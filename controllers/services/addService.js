const { Service } = require('../../models')
const addService = async (req, res) => {
  const newService = { ...req.body }
  const result = await Service.create(newService)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  })
}

module.exports = addService
