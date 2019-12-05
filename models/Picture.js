const { Model } = require('objection')

class SalePicture extends Model {
  static get tableName() {
    return 'pictures'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['sale_id', 'pic'],

      properties: {
        id: { type: 'integer' },
        sale_id: { type: 'integer' },
        pic: { type: 'string' }
      }
    }
  }

}

module.exports = SalePicture