const { Schema, model } = require('mongoose')

const Joi = require('joi')

const pricePattern = /^[0-9]/

const serviceSchema = Schema(
  {
    name: {
      type: 'string',
      required: [true, 'Set name for service'],
    },
    price: {
      general: {
        cost: { type: 'number' },
        costByCart: { type: 'number' },
      },
      man: {
        cost: { type: 'number' },
        costByCart: { type: 'number' },
      },
      woman: {
        cost: { type: 'number' },
        costByCart: { type: 'number' },
      },
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
  },
  { versionKey: false, timestamps: true },
)

const addServiceSchema = Joi.object({
  name: Joi.string(),
  price: {
    general: {
      cost: Joi.string().pattern(pricePattern, 'cost'),
      costByCart: Joi.string().pattern(pricePattern, 'costByCart'),
    },
    man: {
      cost: Joi.string().pattern(pricePattern, 'cost'),
      costByCart: Joi.string().pattern(pricePattern, 'costByCart'),
    },
    woman: {
      cost: Joi.string().pattern(pricePattern, 'cost'),
      costByCart: Joi.string().pattern(pricePattern, 'costByCart'),
    },
  },
})

const Service = model('service', serviceSchema)

module.exports = { Service, addServiceSchema }
