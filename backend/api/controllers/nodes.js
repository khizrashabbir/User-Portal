var dbCon = require("../database/database-con.js");

module.exports.getDataNode = function(req, res) {
  let query = "Select * from node";
  query += " LIMIT 250 ";
  dbCon.query(query, [], res);
}
