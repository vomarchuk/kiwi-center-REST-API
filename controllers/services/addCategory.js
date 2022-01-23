const { Service } = require('../../models')
const { Conflict } = require('http-error')
const isDublicateService = require('../../helpers/isDublicateService')

const addCategory = async (req, res, next) => {
  const newService = { ...req.body }

  if (await isDublicateService(newService, Service)) {
    return next(new Conflict())
  }

  const result = await Service.create(newService)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  })
}

module.exports = addCategory
