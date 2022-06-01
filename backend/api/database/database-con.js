var mysql = require('mysql2'); ///// database connection
var pool = mysql.createPool({
  host: 'localhost',
  user: 'netrapter',
  password: 'Khizsh18!',
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
/// add data in users
module.exports.addData = function (insertQuery, valuesArr, res, log_obj) {
  let query = mysql.format(insertQuery, valuesArr);

  pool.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json("Error! cannot connect to database");
      return;
    }
    // addLog(log_obj);
    res.status(200).json("Record Added Successfully!");
  });
}

module.exports.addLog = function (obj) {
  addLog(obj);
}
///Update users data

module.exports.updateData = function (updateQuery, valuesArr, res, log_obj) {
  let query = mysql.format(updateQuery, valuesArr);
  console.log(query);
  pool.query(query, (err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
      res.status(400).json("Error! cannot connect to database");
      return;
    } else if (data.affectedRows > 0) {
      addLog(log_obj);
      res.status(200).json("Record Updated Successfully!");
    } else {
      res.status(404).json("Record Not Found");
    }
  });
}