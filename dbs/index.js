const { MongoClient } = require('mongodb');

// Note: A production application should not expose database credentials in plain text.
// For strategies on handling credentials, visit 12factor: https://12factor.net/config.
// const PROD_URI = 'mongodb://<dbuser>:<dbpassword>@ds145113.mlab.com:45113/dota';
const { DOTA_MONGO_URI, DOTA_MONGO_USER, DOTA_MONGO_PW } = process.env;

const DEV_URI = `mongodb://${DOTA_MONGO_USER}:${DOTA_MONGO_PW}@${DOTA_MONGO_URI}`;

function connect(url) {
  return MongoClient.connect(url).then(client => client.db());
}

module.exports = async function () {
  const databases = await Promise.all([connect(DEV_URI)]);

  return {
    dev: databases[0],
  };
};
