const { Category } = require('../../models')
const getAllCategories = async (req, res, next) => {
  const result = await Category.find({})
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  })
}

module.exports = getAllCategories
