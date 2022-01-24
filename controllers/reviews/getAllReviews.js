const getReviews = require('../../services/google.API')

const options = 'fields=name%2Creviews'

const getAllReviews = async (req, res, next) => {
  const response = await getReviews(options)
  const result = response.data?.result?.reviews
  res.status(200).json({
    status: 'success',
    code: 200,
    data: result,
  })
}

module.exports = getAllReviews
