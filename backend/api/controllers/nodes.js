var dbCon = require("../database/database-con.js");

module.exports.getData = function(req, res) {
  let query = "Select * from give_user_table_name_here";
  query += " LIMIT 250 ";
  dbCon.query(query, [], res);
}
