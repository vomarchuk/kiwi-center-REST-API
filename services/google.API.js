const axios = require('axios')
require('dotenv').config()

const { GOOGLE_KIWI_PLACE_ID, GOOGLE_API_KEY } = process.env

const BASE_URL = 'https://maps.googleapis.com/maps/api/place/details/json'

const getReviews = async options => {
  const response = await axios(
    `${BASE_URL}?place_id=${GOOGLE_KIWI_PLACE_ID}&${options}&key=${GOOGLE_API_KEY}`,
  )
  return response
}

module.exports = getReviews
