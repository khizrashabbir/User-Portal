var mysql = require('mysql2'); ///// database connection
var pool = mysql.createPool({
  host: 'localhost',
  user: 'zia',
  password: '12345678',
  database:'nms',
});

module.exports.query = function(getQuery, valuesArr, res) {
  let query = mysql.format(getQuery, valuesArr);
  if (valuesArr.length > 0) {
    query = query.replace(/\'/g, "");
  }

  let customized = res.customized;
  console.log("query",query);
  pool.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json("Error! cannot connect to database");
      return;
    } else if (customized) {
      res.status(200).json({
        query: query,
        data: data
      });
      return;
    }
    res.status(200).json(data)
  });
}
module.exports.queryData = function (getQuery,valuesArr) {
  return new Promise(function(resolve, reject) {
    let query = mysql.format(getQuery, valuesArr);
    if (valuesArr.length > 0) {
      query = query.replace(/\'/g, "");
    }
  console.log(query);
    pool.query(query, (err, data) => {
      console.log("error: ",err)
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}

module.exports.authenticate = function(authenticateQuery, valuesArr, res) {
  let query = mysql.format(authenticateQuery, valuesArr);

  pool.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json("Error! Login Fail.");
      return;
    } else if (data.length > 0) {
      console.log(data);
      let obj = {};
      obj.username = data[0].User_UserName;
      obj.user_role = data[0].Role_Name;
      obj.action = "Login";
      obj.time = new Date();
      addLog(obj);
      res.status(200).json({
        message: "success",
        data: data[0]
      });
    } else {
      res.status(400).json("Login Failed");
    }
  });
}
