var mysql = require('mysql2'); ///// database connection
var pool = mysql.createPool({
  host: 'localhost',
  user: 'netrapter',
  password: 'Khizsh18!',
  database:'hawkeye100',
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