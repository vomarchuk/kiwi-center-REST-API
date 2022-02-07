const isDuplicateCategory = async (newCategory, Category) => {
  return await Category.findOne(newCategory)
}

module.exports = isDuplicateCategory
