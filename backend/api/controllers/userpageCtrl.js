var dbCon = require("../database/database-con.js");

module.exports.getData = function(req, res) {
  let query = "Select * from user";
  query += " LIMIT 250 ";
  dbCon.query(query, [], res);
}

module.exports.addData = async function(req, res) {
  let obj = {};
  obj.ip_address = req.body.ip_address;
  obj.status = req.body.status;
  obj.type = req.body.type;
  obj.added_on_time_stamp = req.body.added_on_time_stamp;
  obj.username = req.body.username;
  obj.password = req.body.password;
  obj.phone_number = req.body.phone_number;
  obj.email_address = req.body.email_address;
  obj.postal_address = req.body.postal_address;
  
  let query = "INSERT INTO user"; 
    query += "(ip_address, status, type,added_on_time_stamp, username, password, phone_number, email_address, postal_address)";
    query += "VALUES (?,?,?,?,?,?,?,?,?)";
    let valuesArr = [ip_address, status, type, added_on_time_stamp, username, password, phone_number, email_address, postal_address];
    dbCon.addData(query, valuesArr, res, obj)
    //values('${ip_address}', '${status}','${type}','${added_on_time_stamp}','${username}','${password}','${phone_number}','${email_address}','${postal_address}','${added_by}','${updated_by}','${updated_on_time_stamp}')`;
 
    // console.log("location analysis data added");

      console.log(query)
    }, function(err) {
      res.status(400).json("Error! cannot connect to database");
      return;
    };

////search data 

module.exports.searchData = function(req,res){
  let query="Select * from user ";
 let username=req.body.username;
 let action=req.body.action;
 query+="where user like \"%?%\" AND action like \"%?%\" ";
 query+= "LIMIT 250";
  dbCon.query(query, [username,action], res)
}
  



  // ip_address: string,
  // status: string,
  // type: string,
  // added_on_time_stamp: string,
  // username: string,
  // password: number,
  // phone_number: string,
  // email_address: number,
  // postal_address: number,
  // added_by: string,
  // updated_by: string,
  // updated_on_time_stamp: string,\


  
// ip_address            | int unsigned    | YES  |     | NULL    |       |
// | status                | tinyint(1)      | YES  |     | NULL    |       |
// | type                  | varchar(25)     | YES  |     | NULL    |       |
// | added_on_time_stamp   | bigint unsigned | YES  |     | NULL    |       |
// | username              | varchar(200)    | NO   | PRI | NULL    |       |
// | password              | varchar(200)    | YES  |     | NULL    |       |
// | phone_number          | varchar(50)     | YES  |     | NULL    |       |
// | email_address         | varchar(150)    | YES  |     | NULL    |       |
// | postal_address        | varchar(255)    | YES  |     | NULL    |       |
// | added_by              | varchar(200)    | YES  |     | NULL    |       |
// | updated_by            | varchar(200)    | YES  |     | NULL    |       |
// | updated_on_time_stamp | int unsigned    | YES  |     | NULL    |       |
// | role_id    