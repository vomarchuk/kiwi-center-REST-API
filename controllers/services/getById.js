const { Service } = require('../../models')

const getById = async (req, res, next) => {
  const { serviceId } = await req.params

  const result = await Service.findById(serviceId)

  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  })
}

module.exports = getById
