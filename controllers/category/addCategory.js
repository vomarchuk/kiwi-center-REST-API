const { Category } = require('../../models')
const { Conflict } = require('http-error')
const isDuplicate = require('../../helpers/isDuplicate')

const addCategory = async (req, res, next) => {
  const newCategory = { ...req.body }

  if (await isDuplicate(newCategory, Category)) {
    return next(new Conflict())
  }

  const result = await Category.create(newCategory)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  })
}

module.exports = addCategory
