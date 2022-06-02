var dbCon = require("../database/database-con.js");

module.exports.getData = function(req, res) {
  let query = "Select * from user";
  query += " LIMIT 250 ";
  dbCon.query(query, [], res);
}

module.exports.addData = function(req, res) {
  let ip_address = req.body.ip_address;
  let status = req.body.status;
  let type = req.body.type;
  let added_on_time_stamp = req.body.added_on_time_stamp;
  let username = req.body.username;
  let password = req.body.password;
  let phone_number = req.body.phone_number;
  let email_address = req.body.email_address;
  let postal_address = req.body.postal_address;
  
  let query = "INSERT INTO user"; 
    query += "(ip_address, status, type,added_on_time_stamp, username, password, phone_number, email_address, postal_address)";
    query += "VALUES (?,?,?,?,?,?,?,?,?)";
    let valuesArr = [ip_address, status, type, added_on_time_stamp, username, password, phone_number, email_address, postal_address];
    dbCon.addData(query, valuesArr, res)
      console.log(query)
    }, function(err) {
      res.status(400).json("Error! cannot connect to database");
      return;
    };
////search data 

module.exports.searchData = function(req,res){
  let query="Select * from user ";
 let username=req.body.username;
 query+="where username like \"%?%\" ";
 query+= "LIMIT 250";
  dbCon.query(query, [username], res)
}


// update
module.exports.updateData = function(req, res) {
  console.log(req.body);
  let ip_address = req.body.ip_address;
  let status = req.body.status;
  let type = req.body.type;
  let added_on_time_stamp = req.body.added_on_time_stamp;
  let username = req.body.username;
  let password = req.body.password;
  let phone_number = req.body.phone_number;
  let email_address = req.body.email_address;
  let postal_address = req.body.postal_address;

  var query = "UPDATE user set ip_address=?, status=?, type=?, added_on_time_stamp=?, username=?, password=?, phone_number=?, email_address=?, postal_address=? WHERE  username= ?";
  let valuesArr = [ip_address, status, type, added_on_time_stamp, username, password, phone_number, email_address, postal_address];
  dbCon.updateData(query, valuesArr, res)
}
// de-activate data
module.exports.deactivateData = function(req, res) {

  let target_id = req.body.target_id;
  let active = 0;
  var query = "UPDATE user set active=? WHERE  target_id= ?";
  var valuesArr = [active, target_id];
  let obj = {};
  obj.username = req.body.username;
  obj.password = req.body.password;
  obj.action = "Deactivated Data in Users";
  dbCon.updateData(query, valuesArr, res, obj)

}