const db = require('firebase-admin');
const config = require('./serviceAccountKey.json');

db.initializeApp({
  credential: db.credential.cert(config),
});

module.exports = db;
