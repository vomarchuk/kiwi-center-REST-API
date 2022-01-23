const { Schema, model } = require('mongoose')

const serviceSchema = Schema(
  {
    category: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    service: {
      id: { type: String },
      name: {
        type: String,
      },
      man: {
        price: { type: Number },
        priceByCart: { type: Number },
      },
      woman: {
        price: { type: Number },
        priceByCart: { type: Number },
      },
    },
  },
  { versionKey: false, timestamps: true },
)

const Service = model('service', serviceSchema)

module.exports = { Service }
