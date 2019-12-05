const { Model } = require('objection')

class Sale extends Model {
  static get tableName() {
    return 'sales'
  }

  static get relationMappings() {
    const Picture = require('./Picture')
    return {
      pictures: {
        relation: Model.HasManyRelation,
        modelClass: Picture,
        join: {
          from: "sales.id",
          to: "pictures.sale_id"
        }
      }
    };
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