const config = require("./serviceAccountKey.json");
const db = require("firebase-admin");

db.initializeApp({
  credential: db.credential.cert(config),
});

module.exports = db;
