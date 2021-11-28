const { Schema, model } = require('mongoose')

const serviceSchema = Schema(
  {
    category: {
      type: String,
      required: [true, 'Set name for contact'],
    },
  },
  { versionKey: false, timestamps: true },
)

const Service = model('service', serviceSchema)

module.exports = { Service }
