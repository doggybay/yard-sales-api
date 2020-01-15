const { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST } = process.env

let connectionString = process.platform === 'win32' ? `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}` : 'postgres://localhost/yard-sales'
  
  module.exports = {
    development: {
        client: 'pg',
        connection: connectionString,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  