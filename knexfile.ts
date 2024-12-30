module.exports = {

    development: {
      client: 'sqlite-3',
      connection: {
        filename: './dev'
      },
      migrations: { directory: './migrations' },
      seeds: { directory: './seeds' }
    },
  
    staging: {
      client: 'pg',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'pg',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };