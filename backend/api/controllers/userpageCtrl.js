var dbCon = require("../database/database-con.js");

module.exports.getData = function(req, res) {
  let query = "Select * from user";
  query += " LIMIT 250 ";
  dbCon.query(query, [], res);
}
