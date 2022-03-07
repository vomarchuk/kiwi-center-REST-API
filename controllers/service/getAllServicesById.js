const { Service } = require('../../models')

const getAllServicesById = async (req, res, next) => {
  const { categoryId } = req.params

  const result = await Service.find({ category: categoryId })
  console.log(result)
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  })
}

module.exports = getAllServicesById
