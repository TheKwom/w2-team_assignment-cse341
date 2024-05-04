// const dotenv = require("dotenv");
// dotenv.config();
// const { MongoClient } = require("mongodb");

// let _db;

// async function listDatabases(client) {
//   databaseList = await client.db().;

//   console.log("Databases: ");
//   databaseList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

// const initDb = async (callback) => {
//   const client = new MongoClient(process.env.MONGODB_URI);

//   try {
//     await client.connect();
//     console.log();
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// };

// const getDb = () => {
//   if (!_db) {
//     throw Error("Db not initialized");
//   }
//   return _db;
// };

// module.exports = {
//   initDb,
//   getDb,
// };
