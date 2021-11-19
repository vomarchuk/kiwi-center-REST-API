const { Service } = require('../../models')
const getAll = async (req, res, next) => {
  const result = await Service.find({})
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  })
}

module.exports = getAll
