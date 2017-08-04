'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'production',
      password: 'production',
      database: 'test_capstone'
    }
    // connection: 'postgres://localhost/dashboard_dev'
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_URL,
      user: 'production',
      password: 'production',
      database: 'test_capstone'
    }
  }
}
