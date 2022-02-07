const { Schema, model } = require('mongoose')

const categorySchema = Schema(
  {
    category: {
      type: String,
      required: [true, 'Set name for contact'],
    },
  },
  { versionKey: false, timestamps: true },
)

const Category = model('category', categorySchema)

module.exports = { Category }
