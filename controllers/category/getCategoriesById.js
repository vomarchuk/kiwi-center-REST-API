const { Category } = require('../../models')

const getCategoriesById = async (req, res, next) => {
  const { categoryId } = await req.params

  const result = await Category.findById(categoryId)

  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  })
}

module.exports = getCategoriesById
