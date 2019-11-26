const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Sale = ('./Sale')
    return {
      sales: {
        relation: Model.HasManyRelation,
        modelClass: Sale,
        join: {
          from: 'users.id',
          to: 'sales.user_id'
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        first_name: { type: 'string', minLength: 1, maxLength: 255 },
        last_name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }

}

module.exports = User