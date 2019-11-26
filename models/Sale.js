const { Model } = require('objection');

class Sale extends Model {
  static get tableName() {
    return 'sales'
  }

  static get relationMappings() {
    const SalePicture = require('./SalePicture')
    return {
      pictures: {
        relation: Model.HasManyRelation,
        modelClass: SalePicture,
        join: {
          from: 'sales.id',
          to: 'sales_pictures.sale_id'
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'user_id', 'location', 'date_time'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        details: { type: 'string' },
        user_id: { type: 'integer' },
        location: { type: 'string', minLength: 1, maxLength: 255 },
        date_time: { type: 'string', minLength: 1, maxLength: 255}
      }
    }
  }

}

module.exports = Sale