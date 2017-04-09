module.exports = {
  blueprints: {
    shortcuts: true,
    prefix: '/bp',
  },

  models: {
    connection: 'myMysqlServer'
  },

  connections: {
    myMysqlServer: {
      adapter: 'sails-mysql',
      host: 'localhost',
      user: 'brushUser',
      password: 'k30575849',
      database: 'brushfire'
    }
  },

  mailgun:  {
    apiKey: 'key-0bdf64a4426e0414da70eae079293824',
    domain: 'https://api.mailgun.net/v3/sandbox21bfe8bb5ff8426e982da084c2b5197e.mailgun.org',
    baseUrl: 'http://localhost:1337'
  }
};
