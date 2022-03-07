const isDuplicate = async (newObject, Object) => {
  return await Object.findOne(newObject)
}

module.exports = isDuplicate
